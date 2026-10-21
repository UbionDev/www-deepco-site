var aiKitCommon;
(function(aiKitCommon) {
    //  text coding으로 바로 붙을때 토큰 확인 및 재발급
    function callTextCodingAjax(url, params = {}, method, headers = {}) {
        let body = {
            url : url,
            data : JSON.stringify(params),
            method : method,
            headers : JSON.stringify(headers),
        }
        
        return callAjax('/keycloak/loginCheck', body, 'POST');
    }
    aiKitCommon.callTextCodingAjax = callTextCodingAjax;

    function callAjax(url, params = {}, method, headers = {}) {
        if($('meta[name="csrf-token"]').attr('content')) {
            let csrfToken = $('meta[name="csrf-token"]').attr('content');
            headers["CSRF-Token"] = csrfToken;
        }

        return jQuery.ajax({
            url: url,
            type: method,
            headers: headers,
            data: params,
            dataType: 'json',
            complete: function () {
            },
            error: function (error) {
                console.log(error.statusText);
            }
        });
    }
    aiKitCommon.callAjax = callAjax;

    //  쿠키값 가져오기 
    function getCookie(key){
        let cookieKey = key + "="; 
        let result = "";
        const cookieArr = document.cookie.split(";");

        for(let i = 0; i < cookieArr.length; i++) {
            if(cookieArr[i][0] === " ") {
            cookieArr[i] = cookieArr[i].substring(1);
            }
            
            if(cookieArr[i].indexOf(cookieKey) === 0) {
            result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
            return result;
            }
        }
        return result;

    }
    aiKitCommon.getCookie = getCookie;

    // 쿠키값 저장하기
    function setCookie(key, value){
        document.cookie = key + '=' + value + ';path=/';
    }
    aiKitCommon.setCookie = setCookie;
})(aiKitCommon || (aiKitCommon = {}));