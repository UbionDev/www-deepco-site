var express = require('express');
var router = express.Router();
var keycloak_util = require(_base + '/common/keycloak/keycloak_util.js');

router.get('/blocks/coding2', async (req, res, next) => {
    try {
        let { course_id, lesson_id } = req.query;
        let options;
        options = {
            url : _prop.Api.CodingControllerUrl + "/contents",
            method : "GET",
            qs: {
                lesson_id : lesson_id,
                course_id : course_id
            },
            json : true
        }
        let codingContents = await _commonUtil.callAPI(options, req);
        let content_id = 0, contentsSubList = [];
        if(codingContents.length > 0 && codingContents[0] && codingContents[0].content_desc_list) {
            content_id = codingContents[0].id;
            codingContents[0].content_desc_list = JSON.parse(codingContents[0].content_desc_list);
            for( let i in codingContents[0].content_desc_list ) {
                let contentSubItem = codingContents[0].content_desc_list[i];
                contentsSubList.push(contentSubItem);
            }  
        }

        //* 임시 project json 정보
        let rtnProjectList = [];
        //rtnProjectList = _commonUtil.getProjectsJsonInfo();
        //*/

        _prop.Coda = {
            WebSSH2Domain : {
                RootUrl : "",
                HostName : ""
            }
        };
        _prop.Coda.WebSSH2Domain.HostName = req.cookies.aikit_addr || _prop.Api.WebSSH2Domain.HostName;
        _prop.Coda.WebSSH2Domain.RootUrl = 'http://' + _prop.Coda.WebSSH2Domain.HostName;
        
        res.render('ai_site/coding/coding_view', 
        {
            layout: "ai_site/layout/coding_layout", 
            coding_type: "lessoncoding",
            course_id: course_id,
            lesson_id: lesson_id,
            content_id: content_id,
            content_desc_list: contentsSubList,
            host_protocol: req.protocol,
            host_domain: req.headers.host,
            projectList: rtnProjectList
        });
    } catch(error) {
        next(error);
    }
});

router.get('/blocks/mycoding', async (req, res) => {
    let { project_id } = req.query;
    if(!project_id) { project_id = 0; }
    let options;

    _prop.Coda = {
        WebSSH2Domain : {
            RootUrl : "",
            HostName : ""
        }
    };
    _prop.Coda.WebSSH2Domain.HostName = req.cookies.aikit_addr || _prop.Api.WebSSH2Domain.HostName;
    _prop.Coda.WebSSH2Domain.RootUrl = 'http://' + _prop.Coda.WebSSH2Domain.HostName;

    let projectName = "", isOwner = true;
    //* 내 프로젝트 조회
    options = {
        url : _prop.Api.CodingControllerUrl + '/my-projects',
        method : "GET",
        qs: {},
        json : true
    }

    let projectResponse = await _commonUtil.callAPI(options, req);
    let myProjectList = [];
    if(projectResponse.myProjectList && projectResponse.myProjectList.length > 0) {
        let curProject;
        for(let p in projectResponse.myProjectList) {
            if(projectResponse.myProjectList[p].id == project_id) {
                projectName = projectResponse.myProjectList[p].project_name;
                curProject = projectResponse.myProjectList[p];
            }
            myProjectList.push(projectResponse.myProjectList[p]);
        }

        if(res.locals.loginInfo) {
            if(res.locals.loginInfo.sub != curProject.reg_id) {
                isOwner = false;
            }

        } else {
            isOwner = false;
        }
    } else {
        isOwner = false;
    }
    //*/
    
    if(!isOwner) {
        res.render('error-msg', { message: "권한이 없는 사용자 입니다.", backURL: "/" });

    } else {

        //* 내 프로젝트 실습 코딩 조회
        options = {
            url : _prop.Api.CodingControllerUrl + "/projects/"+project_id+"/contents",
            method : "GET",
            qs: {},
            json : true
        }
        let codingContents = await _commonUtil.callAPI(options, req);
        
        let content_id = 0, contentsSubList = [];
        if(codingContents.length > 0 && codingContents[0] && codingContents[0].content_desc_list) {
            content_id = codingContents[0].id;
            codingContents[0].content_desc_list = JSON.parse(codingContents[0].content_desc_list);
            for( let i in codingContents[0].content_desc_list ) {
                let contentSubItem = codingContents[0].content_desc_list[i];
                contentsSubList.push(contentSubItem);
            }  
        }
        //*/
        res.render('block_coding/mycoding_view', 
        {
            layout: "ai_site/layout/coding_layout",
            coding_type: "mycoding",
            host_protocol: req.protocol,
            host_domain: req.headers.host,
            all_projects: myProjectList,
            project_id: project_id,
            project_name: projectName,
            content_id: content_id,
            content_desc_list: contentsSubList
        });
    }

});
    

router.get('/coding/workspace', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER']), async (req, res) => {
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

router.get('/mycoding/workspace', async (req, res) => {
    let { index } = req.query;
    
    _prop.Coda = {
        WebSSH2Domain : {
            RootUrl : "",
            HostName : ""
        }
    };
    _prop.Coda.WebSSH2Domain.HostName = req.cookies.aikit_addr || _prop.Api.WebSSH2Domain.HostName;
    _prop.Coda.WebSSH2Domain.RootUrl = 'http://' + _prop.Coda.WebSSH2Domain.HostName;

    res.render('block_coding/myworkspace', 
    {
        layout: "ai_site/layout/blank_layout",
        index : index 
    });
});

module.exports = router;