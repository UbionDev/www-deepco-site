var express = require('express');
var router = express.Router();
var fs = require('fs');
var mime = require('mime');

router.post('/codeResult/popup', function(req, res){
    let { in_code } = req.body;
    res.render('block_coding/code_result_popup', 
    {
        inCode : in_code
    });
});

router.get('/dataResult/popup', function(req, res){
    res.render('block_coding/data_result_popup', 
    {
    });
});

router.get('/img/uploadview', function(req, res){
    
    res.render('block_coding/imageUploadView', 
    {
        layout: "ai_site/layout/blank_layout"
    });
});

router.post('/img/show', async (req, res) => {
    let { fileroot } = req.body;
    var testFolder= '/home/pi/WebCoding-main/Web.Front/public/img/' + fileroot;
    var file_list;
    file_list = fs.readdirSync(testFolder);
    
    res.json(file_list);
});

router.post('/file/upload', async (req, res) => {

    let fileList = [];

    let filesObject = req.files ? req.files : null;

    for( let key in filesObject ){

        let files = filesObject[key];

        let filesLength = files.length || 0;

        if( files && filesLength < 1 ){
            let fileObj = files;
            files = [];
            files.push( fileObj );
        }

        for( let i in files ){

            let file = files[i];

            if(file) {

                let originalname = file.name;
                let size = file.size;
                let mimetype = mime.lookup(originalname);

                console.log(i+"=========================================");
                console.log("[original name]: "+originalname);
                console.log("[file size]: "+size);
                console.log('[mimetype]: '+mimetype);
                console.log("===========================================");

                let targetDir = "/home/pi/autonomousCar/block/result";
                let write_file_path = targetDir + "/" + originalname;
                console.log('[File Path]: '+write_file_path);
                fs.writeFile( write_file_path, file.data, function(err){ 
                    if (err === null) { 
                        console.log('File Write Success');
                    } else { 
                        throw "File Write Error";
                    }
                });

                let fileObj = {
                    fieldname : key,                      //upload name
                    originalname : originalname,          //원본 파일명
                    size : size,                          //파일 사이즈
                    mimetype : mimetype,                  //파일 mimetype
                    
                };

                fileList.push( fileObj );

            }

        }

    }

    res.json(fileList);

});

router.post('/file/base64upload', async (req, res) => {
    function decodeBase64Image(dataString) 
    {
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        var response = {};

        if (matches.length !== 3) 
        {
            return new Error('Invalid input string');
        }

        response.type = matches[1];
        response.data = new Buffer(matches[2], 'base64');

        return response;
    }
    
    let { base64Data } = req.body;

    var imageBuffer = decodeBase64Image(base64Data);
    
    let targetDir = "/home/pi/autonomousCar/block/result";
    let write_file_path = targetDir + "/base64upload.jpg";

    fs.writeFile(write_file_path, imageBuffer.data, function(err) {
        console.log(err);
    });
    
    res.json("base64upload.jpg");
});

router.post('/syncFolder/initialize', function(req, res){
    let { init_folder } = req.body;
    let dataFileArray = [], folder_path = "";
    if(init_folder == "cam") {
        dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.cameraDir + "/" );
        folder_path = _prop.Resources.blockDir + _prop.Resources.cameraDir + "/";
    }
    if(init_folder == "training") {
        //dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.DataOutputDir + _prop.Resources.DataCurrentDir + "/" );
        //* Kit User 별 Driving Data Directory 준비하기
        let parent_path = _prop.Resources.blockDir + _prop.Resources.DataOutputDir + "/";  // /home/pi/autonomousCar/block/data/
        let child_path = JSON.parse(req.cookies.tempLoginInfo).loginId;
        folder_path += parent_path;
        folder_path += child_path;
        let command = "";
        try {
            let stats = fs.statSync(folder_path);
            if(stats) {  // User Folder 삭제
                command = "cd "+parent_path+" && rm -rf "+child_path+" && mkdir "+child_path;
                _commonUtil.executeSyncCmd(command);
            }
        } catch(error) {
            console.log("["+folder_path+"]: " + error.code);
            command = "cd "+parent_path+" && mkdir "+child_path;
            _commonUtil.executeSyncCmd(command);
        }
        //*/
    }
    if(init_folder == "result") {
        dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.resultDir + "/" );
        folder_path = _prop.Resources.blockDir + _prop.Resources.resultDir + "/";
    }
    if(dataFileArray != null && dataFileArray.length > 0) {
        for(let i in dataFileArray) {
            if(dataFileArray[i].endsWith(".jpg")) {
                // 하위 폴더의 파일은 제외하고 현재 폴더의 파일만 가져오기
                try {
                    let stats = fs.statSync(folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1));
                    if(stats) {  // 파일 삭제
                        fs.unlinkSync(folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1));
                    }

                } catch(error) {
                    console.log("["+folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1)+"]: " + error.code);
                }
            }
        }
    }

    res.status(200);
    res.end('Success');
});

router.get('/camera/pictures', function(req, res){
    let { pictures_folder } = req.query;

    let dataFileArray = [], imgFileList = [];
    let folder_path = "";
    if(pictures_folder == "cam") {
        dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.cameraDir + "/" );
        folder_path = _prop.Resources.blockDir + _prop.Resources.cameraDir + "/";
    }
    if(pictures_folder == "training") {
        //dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.DataOutputDir + _prop.Resources.DataCurrentDir + "/" );
        let parent_path = _prop.Resources.blockDir + _prop.Resources.DataOutputDir + "/";
        let child_path = JSON.parse(req.cookies.tempLoginInfo).loginId + "/" + _prop.Resources.DataCurrentDir + "/";
        folder_path += parent_path;
        folder_path += child_path;
        dataFileArray = _commonUtil.getFiles(folder_path);
    }
    if(pictures_folder == "result") {
        dataFileArray = _commonUtil.getFiles( _prop.Resources.blockDir + _prop.Resources.resultDir + "/" );
        folder_path = _prop.Resources.blockDir + _prop.Resources.resultDir + "/";
    }

    if(dataFileArray != null && dataFileArray.length > 0) {
        for(let i in dataFileArray) {
            if(dataFileArray[i].endsWith(".jpg") && !(dataFileArray[i].endsWith("-checkpoint.jpg"))) {
                console.log( folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1) );
                // 하위 폴더의 파일은 제외하고 현재 폴더의 파일만 가져오기
                try {
                    let stats = fs.statSync(folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1));
                    if(stats) {
                        imgFileList.push(dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1));
                    }

                } catch(error) {
                    console.log("["+folder_path + dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1)+"]: " + error.code);
                }
                
            }
        }
    }

    res.json(imgFileList);
});

router.get('/training/img/view', function(req, res){
    let dataFileArray = _commonUtil.getFiles( _prop.Resources.DataOutputDir + _prop.Resources.DataCurrentDir + "/" );
    let imgFileList = [];
    if(dataFileArray != null && dataFileArray.length > 0) {
        for(let i in dataFileArray) {
            if(dataFileArray[i].endsWith(".jpg") && !(dataFileArray[i].endsWith("-checkpoint.jpg"))) {
                console.log( dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1) );
                let stats = fs.statSync(dataFileArray[i]);
                if(stats) {
                    imgFileList.push(dataFileArray[i].substring(dataFileArray[i].lastIndexOf("/")+1));
                }
            }
        }
    }
    res.render('block_coding/training_img_gallery', 
    {
        file_list : imgFileList
    });
});

router.get('/images/training/:file_name', function(req, res){
    let { file_name } = req.params;
    let imgPath = _prop.Resources.DataOutputDir + _prop.Resources.DataCurrentDir;
        imgPath += "/" + file_name;
        console.log('[get file]: '+imgPath);
    let mimeType = mime.getType(imgPath);
    fs.readFile(imgPath, function(error, data){
        if(error) {
            console.log(error.toString());
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type' : mimeType });
            res.end(data);
        }
    });
});

router.delete('/training/data', async (req, res) => {
    let result = _commonUtil.deleteDataCmd();
    res.json(result);
});

router.post('/blocks/terminateProc', async (req, res) => {
    //let { pid } = req.body;
    let result = _commonUtil.terminateProcByPID();

    res.end(result);
});

router.get('/keyboard/driving', async (req, res) => {
    let { first_driving, key_code, record_yn } = req.query;
    try {
        let param = {};
        param.first_driving = first_driving;
        param.key_code = key_code;
        param.record_yn = record_yn;
        let result = _commonUtil.keyboardDrivingCmd(param);
        res.json(result);

    } catch (error) {
        res.end(error.toString());
    }
});

router.get('/webssh2/terminal/:host', (req, res) => {
    let sshHostIp = req.params.host;
    let referDomain = '', wrIndex = '0';
    referDomain = req.protocol + "://" + req.headers.host + "/";
    if(req.query.index) { wrIndex = req.query.index; }
    res.render('common/terminal', 
    {
        layout: "ai_site/layout/blank_layout",
        ssh_host_ip: sshHostIp,
        refer_domain: referDomain,
        wr_index: wrIndex
    });
});

module.exports = router;