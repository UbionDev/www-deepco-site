var express = require('express');
var router = express.Router();

router.get('/blocks/workspace', function(req, res){
    let { index } = req.query;
    
    _prop.Coda = {
        WebSSH2Domain : {
            RootUrl : "",
            HostName : ""
        }
    };
    _prop.Coda.WebSSH2Domain.HostName = req.cookies.aikit_addr || _prop.Api.WebSSH2Domain.HostName;
    _prop.Coda.WebSSH2Domain.RootUrl = 'http://' + _prop.Coda.WebSSH2Domain.HostName;

    res.render('ai_site/coding/workspace', 
    {
        layout: "ai_site/layout/blank_layout",
        index : index 
    });
});

router.post('/codeResult/popup', function(req, res){
    let { in_code } = req.body;
    res.render('block_coding/code_result_popup', 
    {
        inCode : in_code
    });
});

router.get('/blocks/runcoding', async (req, res) => {

    let { code, keyboard_yn, camera_yn, record_yn, save_npz_yn, save_model_yn, pltimshow_yn } = req.query;

    let param = {};
    param.contents = code;
    param.keyboard_yn = keyboard_yn;
    param.camera_yn = camera_yn;
    param.record_yn = record_yn;
    param.save_npz_yn = save_npz_yn;
    param.save_model_yn = save_model_yn;
    param.pltimshow_yn = pltimshow_yn;

    let result = _commonUtil.BlockCodingResult(param);

    res.json(result);

});

router.get('/blocks/keyboard', async (req, res) => {
    res.render('block_coding/keyboard_input_popup', {});
});

router.get('/blocks/coding', async (req, res) => {
    let options;
    /*
    options = {
        url : _prop.Api.CodingContentUrl + "/gcodingcontent",
        method : "POST",
        body: {
            lecture_id : "CD0000000001",
            course_id : "4"
        },
        json : true
    }
    let codingContents = await _commonUtil.callAPI(options, req);
    //console.log(codingContents);
    //*/
    res.render('block_coding/coding_view', {});
});

router.post('/projects/:project_id/contents', async (req, res) => {
    let project_id = rq.params.project_id;
    let { content_desc_list, content_len, coding_desc_list } = req.body;

    let options;
    options = {
        url : _prop.Api.CodingControllerUrl + '/projects/'+project_id + '/contents',
        method : "POST",
        body: {
            content_desc_list : content_desc_list,
            content_len : content_len,
            coding_desc_list : coding_desc_list
        },
        json : true
    }

    let apiResponse = await _commonUtil.callAPI(options, req);

    res.json(apiResponse);

});

router.patch('/projects/:project_id/contents/:content_id', async (req, res) => {
    let project_id = rq.params.project_id;
    let content_id = rq.params.content_id;
    let { content_desc_list, content_len, coding_desc_list } = req.body;

    let options;
    options = {
        url : _prop.Api.CodingControllerUrl + '/projects/'+project_id + '/contents/' + content_id,
        method : "PATCH",
        body: {
            content_desc_list : content_desc_list,
            content_len : content_len,
            coding_desc_list : coding_desc_list
        },
        json : true
    }

    let apiResponse = await _commonUtil.callAPI(options, req);

    res.json(apiResponse);

});

module.exports = router;