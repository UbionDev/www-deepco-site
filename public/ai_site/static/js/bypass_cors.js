/**
 * Cors 통신 용
 */
class ByPassCORS {
    /**
     * 생성자
     * @param selector 선택자 or 해당 페이지 ex) 프레임 :: #id, .classs 부모 페이지 지정 :: window.opener, window.parent
     * @param origin 도메인 설정 :: http://www.test.com/test.html 형식으로 지정
     */
    constructor(selector, origin = "*") {
        /**
         * 도메인 설정 :: http://www.test.com/test.html 형식으로 지정
         * 지정 안하면 :: "*"" 로 지정
         */
        this.origin = "*";
        /**
         * 찾아와 연결된 페이지
         */
        this.page = null;
        /**
         * 보내는 주체 구분을 위한 GUID 설정
         */
        this.id = null;
        /**
         * 메시지 처리
         * @param msg 전문
         */
        // sendMessage = (msg : any) : void => {
        //     this.page.postMessage(msg, this.origin);
        // }
        this.sendMessage = (type, message) => {
            let msg = {
                type: type,
                message: message
            };
            this.page.postMessage(msg, this.origin);
        };
        /**
         * Image 에 대한 Base64 데이터 변환 메시지 보내기
         * @param type 보내는 메시지 타입
         * @param url 이미지 URL
         */
        this.sendMessageImage = (type, url) => {
            Common.imageReadAsDataURL(url)
                .then((dataUrl) => {
                this.sendMessage(type, dataUrl);
            });
        };
        /**
         * 전달 받는 메시지
         * 전문 통신 방식으로 처리하기 위해 추가 개발 필요
         * @param message
         */
        this.receiveMessage = (message) => {
            //console.log(message.data);
            let msg = message.data;
            console.log(msg);
            this.OnEvent(msg.type, msg.message);
        };
        /**
         * 연결될 페이지 값
         */
        this.pageList = {};
        this.onCORSEvent = new CORSEvent();
        this.Event = this.onCORSEvent.expose();
        this.origin = origin;
        this.setPage(selector);
        /**
         * 보내는 클래스를 특정하기 위해 GUID 를 생성하여 할당한다.
         */
        this.id = this.GUIDCreate();
        // 메시지 받아오기
        window.addEventListener("message", this.receiveMessage);
    }
    /**
     * 페이지 셋팅을 위해 처리
     * @param selector 선택자 or 해당 페이지 ex) 프레임 :: #id, .classs 부모 페이지 지정 :: window.opener, window.parent
     */
    setPage(selector) {
        if (typeof (selector) == "string") {
            var page = document.querySelector(selector);
            if (page != null) {
                this.setFramePage(page, selector);
            }
            else {
                this.setParent(selector);
            }
        }
        else {
            this.setParent(selector);
        }
    }
    /**
     * 프레임으로 설정하기 위함
     * @param page
     * @param selector
     */
    setFramePage(page, selector) {
        console.log(page.contentWindow);
        if (page.contentWindow != undefined) {
            this.page = page.contentWindow;
        }
        else {
            this.setParent(selector);
        }
    }
    /**
     * 부모 페이지 설정
     * @param page
     */
    setParent(page) {
        if (typeof (page) == "string") {
        }
        else {
            this.page = page;
        }
    }
    setAttachPage(id, page) {
    }
    OnEvent(eventType, data) {
        this.onCORSEvent.trigger(eventType, data);
    }
    bindEvent() {
    }
    addEventListener(eventType, data) {
        this.Event.handlers.push({
            type: eventType,
            handler: data
        });
    }
    /**
     * GUID 생성
     * @returns GUID 값
     */
    GUIDCreate() {
        return (this.GUIDS4() + this.GUIDS4() + "-" + this.GUIDS4() + "-4" + this.GUIDS4().substr(0, 3) + "-" + this.GUIDS4() + "-" + this.GUIDS4() + this.GUIDS4() + this.GUIDS4()).toLowerCase();
    }
    /**
     * GUID 생성을 위한 랜덤 값
     * @returns 랜덤 생성 4자리
     */
    GUIDS4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
}
// function toDataURL = url : string => fetch(url)
// .then(response => response.blob())
// .then(blob => new Promise((resolve, reject) => {
//   const reader = new FileReader()
//   reader.onloadend = () => resolve(reader.result)
//   reader.onerror = reject
//   reader.readAsDataURL(blob)
// }))
// namespace Common
// {
//     export 
// }
var Common;
(function (Common) {
    function imageReadAsDataURL(url) {
        return fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }));
    }
    Common.imageReadAsDataURL = imageReadAsDataURL;
})(Common || (Common = {}));
class CORSEvent {
    /**
     * 생성시 실행할 함수모음(handlers)에 대한 배열을 선언한다.
     */
    constructor() {
        this.handlers = [];
    }
    /**
     * 처리가 가능한지 판단 진행
     * @param msg
     */
    parseEvent(msg) {
        // 처리 진행
        this.trigger(msg.type, msg.message);
    }
    /**
     * 실행
     * @param eventType 실행될 Event유형
     * @param data 실행시 전달될 데이터
     */
    trigger(eventType, data) {
        for (var idx in this.handlers) {
            if (this.handlers[idx].type === eventType) {
                this.handlers[idx].handler(data);
            }
        }
    }
    /**
     * 생성된 이벤트를 외부로 노출 시킨다.
     */
    expose() {
        return this;
    }
}
//# sourceMappingURL=bypass_cors.js.map