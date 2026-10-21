function getEventListener(childObj) {
    //* 폴더 보기 영역 resize call listen
    childObj.addEventListener("setDirFrameHeight", function(e) {  console.log('setDirFrameHeight', e);
        var kitDirFrameHeight = e.folder_zone;
        if($('#kitFrmDir').length > 0) {
            kitDirFrameHeight = parseInt(kitDirFrameHeight) + 10;
            $('#kitFrmDir').height(kitDirFrameHeight);
        }
        setTimeout(function(){ childObj.sendMessage("continueFileListView", { 'continue_idx' : e.continue_idx }) }, 5000);
    });
    //*/

    //* 폴더 보기 영역 resize call listen
    childObj.addEventListener("showOriginDataEvent", function(e) {  console.log('showOriginDataEvent', e);
        
        if($('#kitFrmDir').length > 0) {
            parent.showOriginDataEvent(e);
        }
    });
    //*/

    /* 프로젝트 리스트 조회 call listen
    childObj.addEventListener("updateAiProjects", function(e) {  console.log('updateAiProjects', e);
        //console.log('updateAiProjects', e);
        var recvProjectList = e;
        if( $('#folderList').length > 0 ) {
            $('#folderList').empty();
            for(var i = recvProjectList.length - 1; i >= 0 ; i--) {
                var addOpText = `<option value="${recvProjectList[i].project_name}">${recvProjectList[i].project_name}</option>`
                $("#folderList").append(addOpText);
            }
        }
    });
    //*/

    //* 데이터 수집 폴더 변경
    childObj.addEventListener("updateClassNames", function(e) {  console.log('updateClassNames', e);
        
        if($('#kitFrmDir').length > 0) {
            parent.getUploadPopupData('names', e);
        }

    });
    //*/

    //* 데이터 수집 폴더 보기
    childObj.addEventListener("viewUploadImg", function(e) {  console.log('viewUploadImg', e);
        
        if($('#kitFrmDir').length > 0) {
            parent.getUploadPopupData('images', e);
        }

    });
    //*/

    //* camera 사진 폴더 보기
    childObj.addEventListener("viewTakePicture", function(e) {  console.log('viewTakePicture', e);
        
        if($('#kitFrmDir').length > 0) {
            parent.getUploadPopupData('pictures', e);
        }

    });
    //*/

    //* 프로젝트 폴더 조회 call listen
    childObj.addEventListener("recvProjectFolderList", function(e) {  console.log('recvProjectFolderList', e);

        var project_list = [];
        var existKitDir = false;
        var recvProjectFolderList = e;
        for(var i in recvProjectFolderList) {
            if( $('#projectId').data('project_name') == recvProjectFolderList[i].folder_name ) {
                existKitDir = true;
            }
            project_list.push({
                project_idx: parseInt(i)+1,
                project_name: recvProjectFolderList[i].folder_name
            });
        }
        //* 프로젝트 folder 추가
        if(!existKitDir) {

            project_list.push({
                project_idx: recvProjectFolderList.length+1,
                project_name: $('#projectId').data('project_name')
            });
            
            var project_param = {
                project_idx: recvProjectFolderList.length+1,
                project_name: $('#projectId').data('project_name'),
                project_list: JSON.stringify(project_list)
            };

            childObj.sendMessage("addProjectFolder", project_param);
        }
        

    });
    //*/

    //* 프로젝트 내부 class info 조회 listen
    childObj.addEventListener("projectClassInfo", function(e) {  console.log('projectClassInfo', e);

    });
    //*/

    //* 키트 servo middle 조회 listen
    childObj.addEventListener("getServoMiddle", function(e) {  console.log('getServoMiddle', e);
        
    });
    //*/

    //* 키트 servo middle 조회 call listen
    childObj.addEventListener("recvServoMiddle", function(e) {  console.log('recvServoMiddle', e);
        var servo_middle = e.servo_middle;
        if(servo_middle) { setWorkspaceServoMiddle(servo_middle); }
    });
    //*/

    //* Model Predict python 파일 저장 listen
    childObj.addEventListener("readyPredictPy", function(e) {  console.log('readyPredictPy', e);
        if($('#ifrPredict').length > 0) {
            readyPredictView();
            //$('#ifrPredict').get(0).contentWindow.flaskPredictToTerminal();
        }
    });
    //*/

    return childObj;
}