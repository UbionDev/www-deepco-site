require('log-timestamp');
var createError = require('http-errors');
var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
//var engine = require('ejs-locals');

const moment = require('moment');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
var Blockly = require('blockly');

// express-ejs-layouts
const expressEjsLayouts = require('express-ejs-layouts');

// https://www.npmjs.com/package/express-csp-header
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
const { UNSAFE_INLINE, UNSAFE_EVAL } = require('csp-header');


const i18n = require('i18n');
const acceptLanguage = require('accept-language');
acceptLanguage.languages(['en', 'ko']);


var app = express();




module.exports = () => {

  return new Promise(
      async (resolve, reject) => {
          try {


            global._base = __dirname;


            global._ServiceType = process.env.ServiceType || 'Service';

            global._prop = require('./config/properties-' + _ServiceType);
            global._commonUtil = require('./common/utils/common_util');

            global._pyProc = {};
            var tempUsersConfig = require('./config/temp-users');
            global._tempAccessUsers = [];
            if( tempUsersConfig.UserList ) {
              global._tempAccessUsers = tempUsersConfig.UserList;
            }

            const keycloak_util = require(_base + '/common/keycloak/keycloak_util.js')


            /**
             * Debug모드가 아닌 모든 경우에
             * redirect HTTP to HTTPS 
             *
            if( _ServiceType !== 'dev' ){
            
              app.all('*', (req, res, next) => { 
                var hostname = req.hostname;
            
                //
                 // 내부에서 서버끼리 통신할때 localhost or 127.0.0.1 인 경우는 https로 리다이렉트를 제외해야함.
                 // 제외하지 않으면 통신이 되지 않는 현상 발생.
                 //
                if( hostname !== 'localhost' && hostname !== '127.0.0.1' ){
            
                  let protocol = req.headers['x-forwarded-proto'] || req.protocol; 
                  if (protocol == 'https') { 
                    next(); 
                  } else { 
                    let from = `${protocol}://${req.hostname}${req.url}`; 
                    let to = `https://${req.hostname}${req.url}`; 
                    // log and redirect 
                    res.redirect(to);
                  } 
            
                } else {
                  next();
                }
            
              });
            
            }
            //*/
            
            var indexRouter = require('./routes/index');
            
            
            /****************************************************
             * 크로스 도메인 셋팅
             ****************************************************/
            let corsWhiteList = [ "*" ];	//CROSS DOMAIN 허용 도메인
            let whitelist = corsWhiteList;
            let corsOptions = {
                origin : function ( origin, callback ) {
                  if ( !origin || whitelist.indexOf( "*" ) > -1 || whitelist.indexOf( origin ) > -1 ) {
                    callback( null, true );
                  } else {
                    callback( new Error( 'Not allowed by CORS' ) );
                  }
                }
                , methods : "GET,POST,PUT,DELETE"
            //		, preflightContinue : false
            //		, optionsSuccessStatus : 204
            }
            app.use( cors( corsOptions ) );
            // app.use(cors());
            
            
            app.use(expressEjsLayouts);
            app.set('layout','ai_site/layout/ai_layout');
            app.set('layout extractScripts', true);

            // use ejs-locals for all ejs templates:
            //app.engine('ejs', engine);
            
            // view engine setup
            app.set('views', path.join(__dirname, 'views'));
            app.set('view engine', 'ejs');
            
            app.use(logger('dev'));
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            app.use(cookieParser());
            // 딥코봇 펌웨어 — 펌웨어 센터로 이전(2026-10). 옮긴 파일만 새 주소로 보낸다.
            // 이후 추가되는 펌웨어는 처음부터 펌웨어 센터 주소로 배포하므로 이 목록에 넣지 않는다.
            const movedBotFirmwares = [
              'ver_1_11_0_20240418_firmware.zip',
              'ver_1_10_0_20231208_firmware.zip',
              'ver_1_9_1_FullVersion_firmware.zip',
            ];
            app.get('/CodaCar/application/:file', (req, res, next) => {
              if (!movedBotFirmwares.includes(req.params.file)) return next();
              res.redirect(301, 'https://firmware.deepco.co.kr/Resource/firmware/' + req.params.file);
            });
            // 개편 사이트(정적) — 기존 public보다 먼저 응답한다. 되돌릴 때는 이 줄만 뺀다.
            app.use(express.static(path.join(__dirname, 'public', 'www')));
            app.use(express.static(path.join(__dirname, 'public')));
            app.use(express.static(path.join(__dirname, 'assets')));
            app.use(express.static(_prop.Resources.codaUpdateDir));
            // app.use(helmet());
            app.use(
              helmet({
                referrerPolicy: { policy: ["origin", "unsafe-url"] },
              })
            );

            app.use( fileUpload({}) );
            
            // Csp 적용 -- https://www.npmjs.com/package/express-csp-header
            app.use(expressCspHeader({
              directives: {
                  'script-src': [SELF, UNSAFE_INLINE, UNSAFE_EVAL, 'https://www.youtube.com', 'https://cr.acecounter.com', 'https://gtc8.acecounter.com'],
              }
            }));
            



            /**
             * locale 
             *   - js 파일 -> json 파일 변환
             */
             require(_base + '/locales/locale_converter');


            /**
             * 다국어 설정
             */
             app.get('/lang/:lang', function (req, res) {
                  let backURL = req.header('Referer') || '/';
                  try {
                      //cookie 설정
                      let exp = 365;  //365일
                      let expiryDate = new Date( Date.now() + 60 * 60 * 1000 * 24 * exp);
                      res.cookie('lang', req.params.lang, { expires : expiryDate });
                  } catch (error) {
                      console.error(error);
                  }
                  res.redirect( backURL );
              });

              
              var locals_i18n = {};

              // set up language
              i18n.configure({
                  locales: ['en', 'ko'], // set the languages here
                  directory: path.join(_base, 'public', 'locales', 'json'),
                  defaultLocale: 'en',
                  cookie: 'lang',
                  register : locals_i18n,

                  // whether to write new locale information to disk - defaults to true
                  updateFiles: false,

                  // sync locale information across all files - defaults to false
                  syncFiles: false,

                  // used to alter the behaviour of missing keys
                  // missingKeyFn: function (locale, value) {
                      // console.error(locale, value);
                      // return value;
                  // },
              });

              app.use(i18n.init);
              app.use(function(req, res, next){
                  // i18n.init(req, res);

                  //우선순위는 lang 쿠키값.
                  let current_locale = req.cookies.lang || req.headers["accept-language"] || 'en';
                  //제공하는 언어인지 확인. (제공하는 언어가 아닌 경우 default 언어는 제공하는 언어 (acceptLanguage) 중 첫번째 언어로 설정)
                  current_locale = acceptLanguage.get( current_locale );
                  

                  // let locals_i18n = {
                  //     locale : current_locale,
                  //     _ : res.__
                  // }

                  // string 타입의 문자열 " #('common.period') " >> 다국어 변환
                  locals_i18n.strToi18n = function(str){
                    var regex = new RegExp('[#][(]([a-zA-Z._]+)[)]', 'g');
                    var convertStr = str.replace(regex, function(reg, trget){
                      return locals_i18n.__(trget);
                    });
                    return convertStr;
                  }
                
                  locals_i18n.locale = current_locale;
                  
                  req.locale = current_locale;
                  res.locals.i18n = locals_i18n;
                  return next();
              });





            // setup route middlewares
            var csrf = require('csurf');
            var csrfProtection = csrf({ cookie: true });



            /**
             * Front Temporary Access User Login
             */
             app.post('/tempLogin', function(req, res) {
              let { loginId, loginPwd } = req.body;
              console.log("================== Front Temporary User Login ======================");
              console.log("[Temp Login ID]: " + loginId);
              console.log("[Temp Login PW]: " + loginPwd);
              console.log("======================================================================");
              console.log(_tempAccessUsers.length);
          
              let tempLoginInfo;
              let maxCookieAge = 60*60*24*1000;  // 1 day
              for(let i in _tempAccessUsers) {
                  let tempUserInfo = _tempAccessUsers[i];
                  if( loginId == tempUserInfo.id ) {
                      if( loginPwd == tempUserInfo.pwd ) {
                          tempLoginInfo = {
                              loginId: tempUserInfo.id,
                              level: tempUserInfo.level
                          };
                      }
                  }
              }
              res.cookie('tempLoginInfo', JSON.stringify(tempLoginInfo), { maxAge: maxCookieAge, httpOnly: true });
              res.redirect('/home');
          });
            

            /**
             * csrf 적용되지 않는 route
             */
            // var doc_office_controller = require(_base + '/routes/common/doc_office/doc_office_controller');
            // app.use('/common/doc_office', doc_office_controller);
            var commonController = require(_base + '/routes/common/common_controller');
            app.use('/common', commonController);
            
            
            /**
             * Front Temporary Access Users Check
             * csrf 적용되는 route
             */
            app.use('/', keycloak_util.tokenCheck,
            async (req, res, next) => {
              console.log("================== Front Temporary User Info ======================");
              console.log("[Temp Login Info]: " + req.cookies.tempLoginInfo);
              console.log("======================================================================");
              let tempLoginInfo;
              if( req.cookies.tempLoginInfo == null ) {

                let tempLoginObj = {
                  loginId: "",
                  level: 0
                };
                tempLoginInfo = JSON.stringify(tempLoginObj);
                //res.end('Login Required.');

              } else {

                tempLoginInfo = req.cookies.tempLoginInfo;
              }

              res.locals.tempLoginInfo = tempLoginInfo;
              res.locals.host_protocol = req.protocol;
              res.locals.host_domain = req.headers.host;
              next();
              
            }, 
            csrfProtection,
            (req,res,next) =>{
              res.locals.csrfToken = req.csrfToken();
              next();
            },
            indexRouter);
            
            
            
            
            // catch 404 and forward to error handler
            app.use(function(req, res, next) {
              next(createError(404));
            });
            
            // error handler
            app.use(function(err, req, res, next) {
              // set locals, only providing error in development
              res.locals.message = err.message;
              res.locals.error = req.app.get('env') === 'development' ? err : {};
            
              let backURL = req.header('Referer') || '/';

              // render the error page
              res.status(err.status || 500);
              res.render('error-msg', {
                                    layout: "common/blank_layout", 
                                    backURL : backURL,
                                });
            });


            resolve(app);

          } catch (error) {
              reject(error);
          }
      }
  )

};
