var express = require('express');

var router = express.Router();

router.get('/learn', async (req, res) => {

    var lecture_id = req.query.lecture_id ? req.query.lecture_id : "CD0000000001";
    var course_id = req.query.course_id ? req.query.course_id : 1;

    var usr_id = req.query.usr_id;
    var site = req.query.site;

    const options = {
        url: _prop.Api.CodingContentUrl + '/gcodingcontent',
        method: 'POST',
        body: {
            lecture_id : lecture_id,
            course_id : course_id
        },
        json: true
    };

    let apiResponse = await _commonUtil.callAPI(options, req);

    const options2 = {
        url: _prop.Api.CodingContentUrl + '/gcodinguserinfo',
        method: 'POST',
        body: {
            usr_id : usr_id,
            site : site
        },
        json: true
    };

    let apiResponse2 = await _commonUtil.callAPI(options2, req);

    res.render('learn/learn_view', {
        content_data : apiResponse.data.contents[0],
        bookmark_data : apiResponse.data.bookmark,
        course_list : apiResponse.data.course,
        lectureinfo : apiResponse.data.LCInfo[0],
        lecture_id : lecture_id,
        course_id : course_id,
        usr_key: apiResponse2.data[0].usr_key,
        usr_id: usr_id,
        site: site,
    });

});

router.get('/write', async (req, res) => {

    res.render('learn/learn_write', {

    });

});

router.get('/write2', async (req, res) => {

    res.render('learn/learn_write2', {

    });

});

router.get('/testview', async (req, res) => {

    res.render('learn/learn_view_test', {

    });

});

router.get('/wanaecaview', async (req, res) => {
    
    var apply_id = req.query.apply_id;
    var pid = req.query.pid;
    var p_contents = req.query.p_contents;
    var p_title = req.query.p_title;
    var p_type = req.query.p_type; 
    var answer = req.query.answer; 
    var tutor_feedback = req.query.tutor_feedback; 
    var returnUrl = req.query.returnUrl; 


    res.render('learn/wanaeca_view', {
        apply_id : apply_id,
        pid : pid,
        p_contents : p_contents,
        p_title : p_title,
        p_type : p_type,
        answer : answer,
        tutor_feedback : tutor_feedback,
        returnUrl : returnUrl

    });

});

router.get('/wanaecaresult', async (req, res) => {

    var apply_id = req.query.apply_id;
    var pid = req.query.pid;
    var p_contents = req.query.p_contents;
    var p_title = req.query.p_title;
    var p_type = req.query.p_type; 
    var answer = req.query.answer; 
    var tutor_feedback = req.query.tutor_feedback; 
    var returnUrl = req.query.returnUrl; 


    res.render('learn/wanaeca_result', {
        apply_id : apply_id,
        pid : pid,
        p_contents : p_contents,
        p_title : p_title,
        p_type : p_type,
        answer : answer,
        tutor_feedback : tutor_feedback,
        returnUrl : returnUrl
    });

});

router.get('/raspberry', async (req, res) => {

    res.render('learn/raspberry_view', {
        
    });

});

router.get('/raspberrycoding', async (req, res) => {

    var contents = req.query.code;

    let result = _commonUtil.Codingresult(contents);

    res.json(result);

});

module.exports = router;