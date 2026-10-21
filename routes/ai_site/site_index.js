var express = require('express');
var router = express.Router();


router.get('/', async function(req, res){

    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';
    /*
    res.render('ai_site/home', {
                                    
                                    layout: "ai_site/layout/ai_layout", 
                                    menu : "home",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host
                                });
    //*/
    res.sendFile(_base + '/public/deepco/index.html');

});

router.get('/about', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/about', {                                    
                                    layout: "ai_site/layout/ai_layout",
                                    menu : "about",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host
                                });
    
});


router.get('/check', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/check', {
                                    layout: "ai_site/layout/ai_layout",
                                    menu : "check",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host
                                });
});

router.get('/airun', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/airun', {
                                    layout: "ai_site/layout/ai_layout",
                                    menu : "airun",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host
                                });
});

router.get('/lecture', async function(req, res){
    try {
        // 접속할 CODA 목록 조회
        var codaInfos = await codaNetworkList(req);
        let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
        let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

        // 학습 정보 가져오기
        var studyInfo = await lectureInfo(req, res);

        res.render('ai_site/lecture', {
                                layout: "ai_site/layout/ai_layout",
                                menu : "lecture",
                                coda_list : codaInfos,
                                cookie_coda_name : cookieKitName,
                                cookie_coda_addr : cookieKitAddress,
                                studyInfo : studyInfo,
                                host_protocol: req.protocol,
                                host_domain: req.headers.host
                                });
    } catch(error) {
        res.redirect('/');
    }
});


router.get('/lesson/:course_id', async function(req, res){
    try {
        // 접속할 CODA 목록 조회
        var codaInfos = await codaNetworkList(req);
        let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
        let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

        let course_id = req.params.course_id;
        // 학습 정보 가져오기
        var studyInfo = await lectureInfo(req, res, course_id);
        //console.log(JSON.stringify(studyInfo));
        if(studyInfo && studyInfo.length > 0) {
            res.render('ai_site/lesson', {
                                        layout: "ai_site/layout/ai_layout",
                                        menu : "lecture",
                                        coda_list : codaInfos,
                                        cookie_coda_name : cookieKitName,
                                        cookie_coda_addr : cookieKitAddress,
                                        studyInfo : studyInfo[0],
                                        host_protocol: req.protocol,
                                        host_domain: req.headers.host
                                    });
        } else {
            throw(new Error("study info Error"));
        }
    } catch(error) {
        res.redirect('/');
    }
});

router.get('/contact', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/contact', {
                                    layout: "ai_site/layout/ai_layout",
                                    menu : "contact",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host
                                  });
});

router.get('/myclass', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/myclass', {
        layout: "ai_site/layout/ai_layout",
        menu : "myclass",
        coda_list : codaInfos,
        cookie_coda_name : cookieKitName,
        cookie_coda_addr : cookieKitAddress,
        host_protocol: req.protocol,
        host_domain: req.headers.host
    });
});



router.get('/project', async function(req, res){
    try {
        // 접속할 CODA 목록 조회
        var codaInfos = await codaNetworkList(req);
        let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
        let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

        //  내 프로젝트 조회
        let options = {
            url : _prop.Api.CodingContentUrl + '/my-projects',
            method : "GET",
            body: {},
            json : true
        }

        let apiResponse = await _commonUtil.callAPI(options, req);

        res.render('ai_site/project', {
                                    layout: "ai_site/layout/ai_layout",
                                    menu : "project",
                                    coda_list : codaInfos,
                                    cookie_coda_name : cookieKitName,
                                    cookie_coda_addr : cookieKitAddress,
                                    host_protocol: req.protocol,
                                    host_domain: req.headers.host,
                                    apiResponse : apiResponse,
                                });
                                
    } catch(error) {
        res.redirect('/');
    }
});

router.get('/introduce', async function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = await codaNetworkList(req);
    let cookieKitName = req.cookies.aikit_name || 'uCodaCar';
    let cookieKitAddress = req.cookies.aikit_addr || 'kit.ubion.co.kr';

    res.render('ai_site/introduce', {
        layout: "ai_site/layout/ai_layout",
        menu : "introduce",
        coda_list : codaInfos,
        cookie_coda_name : cookieKitName,
        cookie_coda_addr : cookieKitAddress,
        host_protocol: req.protocol,
        host_domain: req.headers.host
    });
});

router.get('/manual', function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = [];
    let cookieKitName = req.cookies.aikit_name || 'DeepCoBot';
    let cookieKitAddress = req.cookies.aikit_addr || '192.168.50.1';
    res.render('ai_site/manufacture', 
    {
        layout: "ai_site/layout/ai_layout",
        menu: "manufacture",
        coda_list : codaInfos,
        cookie_coda_name : cookieKitName,
        cookie_coda_addr : cookieKitAddress,
        host_protocol: req.protocol,
        host_domain: req.headers.host
    });
});

router.get('/firmware', function(req, res){
    // 접속할 CODA 목록 조회
    var codaInfos = [];
    let cookieKitName = req.cookies.aikit_name || 'DeepCoBot';
    let cookieKitAddress = req.cookies.aikit_addr || '192.168.50.1';
    res.render('ai_site/firmwareboard', 
    {
        layout: "ai_site/layout/ai_layout",
        menu: "firmware",
        coda_list : codaInfos,
        cookie_coda_name : cookieKitName,
        cookie_coda_addr : cookieKitAddress,
        host_protocol: req.protocol,
        host_domain: req.headers.host
    });
});

/**
 * CODA Kit 접속 목록 Api 호출
 */
async function codaNetworkList(req) {

    let codaList = [];

    let options;
    options = {
        url : _prop.Api.CodingControllerUrl + '/codanets',
        method : "GET",
        qs: {},
        json : true
    }
    
    let apiResponse = await _commonUtil.callAPI(options, req);

    if(apiResponse && apiResponse.coda_list) {
        for(let i in apiResponse.coda_list) {
            let codaInfo = apiResponse.coda_list[i];
            codaList.push(codaInfo);
        }
    }

    return codaList;
}

/**
 * 학습정보 가져오기
 * @param {*} req 
 * @param {*} res 
 * @returns db.json 에서 생성한 학습 정보
 */
 async function  lectureInfo(req, res, course_id){

    // callAPI 호출 시 사용할 옵션
    let options;
    
    // course_id 가 있을 경우 해당 과정에 연결된 내용만 가져온다.
    let courses_url = typeof(course_id) != 'undefined' ? "/courses/" + course_id : "/courses";
    let tempLoginInfo = typeof(req.cookies.tempLoginInfo) != 'undefined' ? Buffer.from(req.cookies.tempLoginInfo, "utf8").toString("base64") : "";
    options = {
        url : _prop.Api.CodingControllerUrl + courses_url,
        method : "GET",
        headers: {
            "tempLoginInfo" : tempLoginInfo
        },
        body: {            
        },
        json : true
    }
    let courses = await _commonUtil.callAPI(options, req);

    // course_id 가 있을 경우 해당 과정에 연결된 내용만 가져온다.
    let lessons_url = typeof(course_id) != 'undefined' ? "/lessons?course_id=" + course_id : "/lessons";
    options = {
        url : _prop.Api.CodingControllerUrl + lessons_url,
        method : "GET",
        body: {            
        },
        json : true
    }
    let lessons = await _commonUtil.callAPI(options, req);

    // course_id 가 있을 경우 해당 과정에 연결된 내용만 가져온다.
    let study_course_url = typeof(course_id) != 'undefined' ? "/study_course/" + course_id : "/study_course";
    options = {
        url : _prop.Api.CodingControllerUrl + study_course_url,
        method : "GET",
        body: {            
        },
        json : true
    }
    let study_course = await _commonUtil.callAPI(options, req);
    

    // course_id 가 있을 경우 해당 과정에 연결된 내용만 가져온다.
    let study_lesson_url = typeof(course_id) != 'undefined' ? "/study_lesson?course_id=" + course_id : "/study_lesson";
    options = {
        url : _prop.Api.CodingControllerUrl + study_lesson_url,
        method : "GET",
        body: {            
        },
        json : true
    }
    let study_lesson = await _commonUtil.callAPI(options, req);
    

    // 최종 전달할 내용 
    var studyInfo = [];

    // 임시로 사용할 course 리스트 정리
    // course_id를 이용할 경우 내부 배열값 없이 단일 {} 블럭으로 결과값이 나오기 때문에
    // 하단 코드를 공동으로 사용하기 위해 [] 배열로 묶어서 관리 하기 위함
    var course_list = [];
    
    // course 값이 단일 {} 일 경우 course_list 에 추가하여 배열 [] 코드로 통일 처리
    if(Array.isArray(courses)==false){
        course_list.push(courses);
    }
    else {
        course_list = courses;
    }

    // lesson 이 단일일 경우 배열에 넣어서 [] 코드로 통일 처리
    var lesson_list = [];
    if(Array.isArray(lessons)==false){
        lesson_list.push(lessons);
    }
    else {
        lesson_list = lessons;
    }

    // study 가 단일일 경우 배열에 넣어서 [] 코드로 통일 처리
    var study_course_list = [];
    if(Array.isArray(study_course)==false){
        study_course_list.push(study_course);
    }
    else {
        study_course_list = study_course;
    }

    

    // study 가 단일일 경우 배열에 넣어서 [] 코드로 통일 처리
    var study_lesson_list = [];
    if(Array.isArray(study_lesson)==false){
        study_lesson_list.push(study_lesson);
    }
    else {
        study_lesson_list = study_lesson;
    }
    


    // 상단에서 course_list 로 통일 하였기 때문에 
    // 단일 course 일 경우에도 처리 흐름은 동일하게 처리 가능
    for(course_idx in course_list){

        var course = course_list[course_idx];

        for(study_idx in study_course_list){
            var course_study = study_course_list[study_idx];

            if(course_study.id == course.id){

                
                // 연결된 lesson study 정보
                course_study.lessons = [];

                // 회차에 대한 수강 정보 연결
                for(study_lesson_idx in study_lesson_list){
                    
                    var lesson_study = study_lesson_list[study_lesson_idx];

                    // 수강정보 중 course_id에 해당 하는 정보 연결 처리
                    if(lesson_study.course_id==course.id){
                        course_study.lessons.push(lesson_study);
                    }
                }


                // 회차별 수강정보를 찾아오는 함수를 생성하여 추가해 둠
                // 추후 페이지 단에서 다음과 같은 방법으로 lesson 별 수강 정보를 가져올 수 있게 해줌
                // studyInfo.course.study.GetLesson(lesson.id)
                course_study.GetLesson = function(lesson_id){
                    for(les_idx in course.study.lessons){
                        var les = course.study.lessons[les_idx];
                        if(les.lesson_id == lesson_id){
                            return les;
                        }
                    }
                }

                course.study = course_study;
            }
        }

        if(!course.study) {
            course.study = { status: 'ing' };
        }

        


        
        // for(study_idx in study_lesson_list){
        //     var course_study = study_lesson_list[study_idx];

        //     
        //     if(course_study.course_id == course.id){
                
        //         // 회차별 수강정보를 찾아오는 함수를 생성하여 추가해 둠
        //         // 추후 페이지 단에서 다음과 같은 방법으로 lesson 별 수강 정보를 가져올 수 있게 해줌
        //         // studyInfo.course.study.GetLesson(lesson.id)
        //         course_study.GetLesson = function(lesson_id){
                    
        //             for(les_idx in course.study.lesson){
        //                 var les = course.study.lesson[les_idx];
        //                 if(les.lesson_id == lesson_id){
        //                     return les;
        //                 }
        //             }
        //         }

        //         // 생성된 course 별 study 정보를 course.study 로 접근 가능하게 연결 처리
        //         course.study = course_study;                
        //     }
        // }


        // 과정별 연결된 회차 전체 카운트
        var lesson_count = 0;

        // 과정별 연결된 회차 전체 시간 값을 계산한다.
        var lesson_time = 0;

        for(lesson_idx in lesson_list){

            // 회차 전체 목록에 대해 처리하며, 시간 정보값 정리
            // study.GetLesson 처럼 함수 처리로 변경해도 됨
            // 회차 시간 정보 만들기
            var lesson = lesson_list[lesson_idx];
            var les_time = lesson.time;
            var les_hour = parseInt(les_time / 3600);
            var les_min = parseInt((les_time % 3600) / 60);
            var les_sec = parseInt((les_time % 3600) % 60);
            
            var les_time_string = "";


            // 시간 정보에 대해서는 화면에 보여주는 방식으로 정리 하였음
            // 00:00:00 방식으로 처리 되어 있음

            // 시간 정보
            if(isNaN(les_hour) == false && les_hour > 0){
                les_time_string += les_hour;
            }
            

            // 분 정보
            var les_min_str = les_min;

            if(les_min < 10 ) {
                les_min_str = "0" + les_min;
            }
            les_time_string += les_time_string.length > 0 ? ":" + les_min_str  : les_min_str ;
            
            
            // 초 정보
            var les_sec_str = les_sec;
            if(les_sec < 10 ) {
                les_sec_str = "0" + les_sec;
            }
            les_time_string += les_time_string.length > 0 ? ":" + les_sec_str  : les_sec_str ;
            

            // 회차 시간 정보 할당
            lesson.time_info = {
                "hour" : les_hour,
                "min" : les_min,
                "sec" : les_sec,
                "time_string" : les_time_string
            }

            // 회차에 대한 수강 정보 연결
            // for(study_idx in study_list){
            //     var stu = study_list[study_idx];
            //     if(stu.course_id == course.id){
            //         for(les_idx in stu.lesson)
            //         {
            //             var les = stu.lesson[les_idx];
            //             if(les.lesson_id == lesson.id){
            //                 lesson.study = les;
            //             }
            //         }
            //     }                
            // }

            

            
            
            // 연결된 회차별 - 회차 전체 시간을 더한다.
            // 
            if(lesson_list[lesson_idx].course_id == course_list[course_idx].id){
                lesson_count++;
                lesson_time += lesson_list[lesson_idx].time;
            }

            
        }

        // 강좌-회차 전체 카운트
        // 강좌-회차 전체 시간 값 정리
        // 강좌 전체에 대한 시간 정보는 0h 0m 방식으로 되어 있음
        course.lesson_count = lesson_count;
        course.lessons = lesson_list;
        var total_min = parseInt(lesson_time / 60);
        var sec = parseInt(lesson_time % 60);
        var hour = parseInt(total_min / 60);
        var min = parseInt(total_min % 60);
        var time = "";
        if(isNaN(hour) == false && hour > 0){
            time += hour + "h"
        }
        if(isNaN(min) == false && min > 0){
            time += time.length > 0 ? " " + min + "m" : min + "m";
        }


        course.time_info = {
            "hour" : hour, 
            "min" : min,
            "time_string" : time
        }

        
        // 수강정보
        // for(study_idx in study_list){
            
        //     if(study_list[study_idx].course_id == course_list[course_idx].id){                
        //         //data.study = study_list[study_idx];
        //         course.study = study_list[study_idx];
        //     }
        // }


        // 과정정보
        var data = {
            course : course
        }

        studyInfo.push(data);
    };
    
    //console.log(JSON.stringify(studyInfo));

    return studyInfo;
}



module.exports = router;