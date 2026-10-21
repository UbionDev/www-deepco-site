var express = require('express');
var router = express.Router();
var keycloak_util = require(_base + '/common/keycloak/keycloak_util.js');

//  로그인
router.get('/keycloack/login', async (req, res) => {
    try {
        let referer = req.header('Referer') || null;
        let redirectUrl = req.query.redirectUrl;
        let callbackUrl;
        
        if(redirectUrl) {
            referer = req.protocol + '://' + req.get('host') + redirectUrl;
        }

        if(referer){
            callbackUrl = referer;
        }

        //  다시 들어올 페이지 설정
        let redirectUri = req.protocol + '://' + req.get('host') + "/keycloack/ssoToken" + (callbackUrl ? '?callbackUrl='+encodeURIComponent( callbackUrl ) : '');
        let sendUrl = await keycloak_util.openLoginPage({redirectUri : redirectUri});

        res.redirect(sendUrl.url);
    } catch (error) {
        res.json(error);
    }
});

//  토큰 받아오기
router.get('/keycloack/ssoToken', async (req, res) => {
    let callbackUrl = req.query.callbackUrl || null;

    try {
        //  redirectUri 생성
        let redirectUri = req.protocol + '://' + req.get('host') + "/keycloack/ssoToken" + (callbackUrl ? '?callbackUrl='+encodeURIComponent( callbackUrl ) : '');
        await keycloak_util.getToken(req, res, {redirectUri : redirectUri});
    } catch (error) {
        //
    } finally {
        if( !callbackUrl ){
            callbackUrl = '/';
        }
        res.redirect(callbackUrl);
    }
});

//  로그아웃
router.post('/keycloack/logout', async (req, res) => {
    try {
        await keycloak_util.ssoLogout(req, res);
        
        res.json({});
    } catch(error) {
        res.json(error);
    }
});

//  로그인 체크 및 TextCoding 호출
router.post('/keycloak/loginCheck', async (req, res, next) => {
    try {
        //  메소드 확인
        let method = req.body.method.trim();
        //  text coding으로 보내는 url 설정
        let textCodingUrl = _prop.Api.CodingContentUrl + req.body.url;

        let options = {
            url : textCodingUrl,
            method : method,
            headers : JSON.parse(req.body.headers),
            json : true
        }

        //  GET 이라면 qs 이외 body에 담아서 보냄
        if(method && method.toUpperCase() == 'GET') {
            options.qs = JSON.parse(req.body.data);
        } else {
            options.body = JSON.parse(req.body.data);
        }

        //  text coding으로 보냄
        let apiResponse = await _commonUtil.callAPI(options, req);

        res.json(apiResponse);
    } catch(error) {
        res.json(error);
    }
});

module.exports = router;