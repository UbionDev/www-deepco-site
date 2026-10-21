var keycloakJS = require(_base + '/config/' + _ServiceType + '/keycloak.json');
var APIRequest = require('request-promise');

module.exports = {
    //  로그인 페이지 열기
    openLoginPage: (loginUrl) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let keycloakUrl = keycloakJS['auth-server-url'] + 'realms/' + keycloakJS.realm + '/protocol/openid-connect/auth?';

                    let param = {
                        client_id : keycloakJS.resource,
                        redirect_uri : loginUrl.redirectUri,
                        response_type : 'code',
                        scope : 'openid',
                    }

                    const keycloakParm = new URLSearchParams( param );
                    const sendUrl = keycloakUrl + keycloakParm.toString();
                    
                    resolve({url : sendUrl});
                } catch (error) {
                    reject(error);
                }
            }
        )
    },
    //  code로 토큰값 가져오기
    getToken: (req, res, url) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    //  code값 추출
                    let code = req.query && req.query.code;

                    //  hash로 들어올때 code 출력
                    if(!code) {
                        const getUrlParm = new URLSearchParams(req.headers.referer);
                        code = getUrlParm.get('code');
                    }

                    //  토큰 받는 api 주소 생성
                    let keycloakUrl = keycloakJS['auth-server-url'] + 'realms/' + keycloakJS.realm + '/protocol/openid-connect/token';
                    
                    let body = {
                        code : code,
                        grant_type : "authorization_code",
                        client_id : keycloakJS.resource,
                        client_secret : keycloakJS['credentials']['secret'],
                        redirect_uri : url.redirectUri,
                    }
            
                    let options = {
                        url : keycloakUrl,
                        method : 'POST',
                        headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                        form : body,
                        json: true
                    }
                    
                    let token = await APIRequest(options);

                    //  토큰 쿠키에 저장
                    res.cookie('aikit_at', token.access_token, {
                        path : "/"
                    });
                    res.cookie('aikit_rt', token.refresh_token, {
                        path : "/"
                    });

                    resolve(token);
                } catch(error) {
                    reject(error);
                }
            }
        )
    },
    //  로그아웃
    ssoLogout: (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    //  쿠키에서 access 토큰 값 가져오기
                    let accessToken = req.cookies.aikit_at;
                    //  쿠키에서 refresh 토큰 값 가져오기
                    let refreshToken = req.cookies.aikit_rt;

                    //  로그아웃 url 세팅
                    let keycloakUrl = keycloakJS['auth-server-url'] + 'realms/' + keycloakJS.realm + '/protocol/openid-connect/logout';

                    let body = {
                        client_id : keycloakJS.resource,
                        client_secret : keycloakJS['credentials']['secret'],
                        refresh_token : refreshToken,
                    }
            
                    let options = {
                        url : keycloakUrl,
                        method : 'POST',
                        headers : { 
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization' : 'Bearer ' + accessToken,
                        },
                        form : body,
                        json: true,
                    }
            
                    let response = await APIRequest(options);

                    //  해당 이름 토큰 삭제
                    res.clearCookie('aikit_at', {path : '/'});
                    res.clearCookie('aikit_rt', {path : '/'});

                    resolve(response);
                } catch(error) {
                    //  해당 이름 토큰 삭제
                    res.clearCookie('aikit_at', {path : '/'});
                    res.clearCookie('aikit_rt', {path : '/'});

                    reject(error);
                }
            }
        )
    },
    // 토큰 검증
    tokenCheck: async (req, res, next) => {
        res.locals.loginInfo = {};
        try{
            //  토큰 배치
            let accessToken = req.cookies.aikit_at;
            let refreshToken = req.cookies.aikit_rt;
            let token;
            let token_rt;

            //  refresh 토큰 디코딩
            if(refreshToken) {
                token_rt = Buffer.from(refreshToken.split('.')[1], "base64").toString("utf8");
                token_rt = JSON.parse(token_rt);
            }

            //  토큰이 없거나 만료 30초 전이면 권한 권한 삭제
            if(!token_rt || Date.now() >= (token_rt.exp - _prop.Api.tokenBufferTime) * 1000) {
                throw({errorMag : "사용자 권한이 없습니다."});
            }
            
            if(accessToken) {
                //  토큰 디코딩
                token = Buffer.from(accessToken.split('.')[1], "base64").toString("utf8");
                token = JSON.parse(token);
            }

            //  토큰값 재발급
            //  토큰 시간이 끝나기전 재발급
            if(!token || Date.now() >= (token.exp - _prop.Api.tokenBufferTime) * 1000) {
                //  토큰 재발급 url 세팅
                let keycloakUrl = keycloakJS['auth-server-url'] + 'realms/' + keycloakJS.realm + '/protocol/openid-connect/token';

                let body = {
                    client_id : keycloakJS.resource,
                    grant_type : "refresh_token",
                    client_secret : keycloakJS['credentials']['secret'],
                    refresh_token : refreshToken,
                }
        
                let options = {
                    url : keycloakUrl,
                    method : 'POST',
                    headers : { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    form : body,
                    json: true
                }

                let response = await APIRequest(options);

                //  토큰 재 구성
                accessToken = response.access_token;
                refreshToken = response.refresh_token;

                //  access토큰 디코딩
                token = Buffer.from(accessToken.split('.')[1], "base64").toString("utf8");
                token = JSON.parse(token);

                //  access 토큰값 쿠키에 추가
                req.cookies.aikit_at = accessToken;
                req.cookies.aikit_rt = refreshToken;

                res.cookie("aikit_at", accessToken, {
                    path : "/",
                });
    
                res.cookie("aikit_rt", refreshToken, {
                    path : "/",
                });
            }

            res.locals.loginInfo = token;
            next();
            
        } catch(error) {
            res.clearCookie('aikit_at', {path : '/'});
            res.clearCookie('aikit_rt', {path : '/'});
            next();
        }
    },
    // 권한 체크
    hasAnyRole : (roles) => {
        return async (req, res, next) => {
            try {
                if(!(res.locals.loginInfo && res.locals.loginInfo.sub)) {
                    res.redirect("/keycloack/login?redirectUrl=" + req.originalUrl);
                    return;
                }

                let loginTrue = false;
                let userRoles = (res.locals.loginInfo.realm_access && res.locals.loginInfo.realm_access.roles) || [];
    
                roles.forEach(role => {
                    if(userRoles.includes(role)) {
                        loginTrue = true;
                        return;
                    }
                });
    
                if(loginTrue) {
                    next();
                } else {
                    throw({errorMsg : "권한이 없는 사용자 입니다."});
                }
            } catch (error) {
                //  403에러 페이지로 이동
                const err = new Error('권한이 없는 사용자 입니다.');
                err.status = 403;
                next(err);
            }
        }
    }
}

