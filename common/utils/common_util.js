var fs = require('fs');
var APIRequest = require('request-promise');
var childProcess = require('child_process');
var kill = require('tree-kill');
const { SSL_OP_CRYPTOPRO_TLSEXT_BUG } = require('constants');

var childProcessOption = {
    encoding: 'utf8'
,   timeout: 10000	//msec
,   maxBuffer: 200*1024
,   killSignal: 'SIGTERM'
,   cwd: null
,   env: null
};

module.exports = {

    callAPI: (options, req) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    //  headers가 선언 안되었다면 선언
                    if(!options.headers) {
                        options.headers = {};
                    }

                    options.headers.authorization = 'Bearer ' + req.cookies.aikit_at;

                    let response = await APIRequest(options);
                    resolve(response);
        
                } catch (error) {
                    reject(error);
                }
            }
        )

    },

    getFiles : function (dir, fileArray){
		fileArray = fileArray || new Array();

		try {

			let files = fs.readdirSync(dir);
			for (let i in files){
				let name = dir + files[i];
				if (fs.statSync(name).isDirectory()){
					this.getFiles(name + "/", fileArray);
				} else {
					fileArray.push(name);
				}
			}
			
		} catch (error) {
			
		}

	    return fileArray;
	},

    executeSyncCmd : function( command ){
		
		var excuteResult;
		try{
			excuteResult = childProcess.execSync( command, childProcessOption );
		} catch( err ){
			excuteResult = err.stderr;
			console.error( "executeSyncCmd : " + err, __filename );
			
		}
		
		return excuteResult;
		
	},

    terminateProcByPID : function() {
        try {
            console.log("terminated ================================================");
            console.log(_pyProc);
            kill(_pyProc.pid);

        } catch(error) {
            console.log(error.toString());
        }
        return "ok";
    },
    
    Codingresult : function(contents){

		try{
            let rootPath = '/home/pi/';
			var filename = "main.py";
			
			var command = "";
			var result = "";
			
            if( contents ){
				contents = contents.replace(/\\/gi, "\\\\");
				contents = contents.replace(/'/gi, "'\\''");
				contents = contents.replace(/"/gi, "\\\"");
			} else {
				contents = "";
			}

            command = "echo '"+ contents +"' > "+ rootPath + filename;

            console.log(command);
			
			let excuteResult = this.executeSyncCmd( command );
            
			command = "python " + rootPath + filename;

			let commandArray = command.split(" ");
			let firstCommand = commandArray[0];
			commandArray.splice(0, 1);
			let secondCommandArray = commandArray;

            //console.log("firstCommand : " + firstCommand);
            //console.log("secondCommandArray : " + secondCommandArray);
			
			result = childProcess.spawnSync( firstCommand, secondCommandArray );

			let returndata = {};

			//var str1 = result.stdout.toString();
            //var len1 = str1.length;
            //var str2 = result.stderr.toString();
            //var len2 = str2.length;

            //console.log("result.stdout : " + str1);
            //console.log("result.stdout.len : " + len1);
            //console.log("result.stderr : " + str2);
            //console.log("result.stderr.len : " + len2);

            returndata.type = "text";

            if(result.stderr.toString() == ""){
                returndata.text = result.stdout.toString();
                return returndata;
            }
            else if(result.stderr.toString() != ""){
                returndata.text = result.stderr.toString();
                return returndata;
            }
		}
		catch(err){
			console.error(err);
			return err.toString();
		}
		
		
	},
    
    BlockCodingResult : function(param){

        try {
            let contents = param.contents;
            let camera_yn = param.camera_yn;
            let record_yn = param.record_yn;
            let save_npz_yn = param.save_npz_yn;
            let save_model_yn = param.save_model_yn;
            let pltimshow_yn = param.pltimshow_yn;

            let rootPath = '/home/pi/autonomousCar/block/';
			var filename = "main.py";
			
			var command = "";
			var result = "";

            var defaultImportModule = "";
            defaultImportModule += "import time \r\n";
            defaultImportModule += "import config as cfg \r\n";
            //defaultImportModule += "import camera as cam \r\n";
            //defaultImportModule += "import cv2 \r\n";
            //defaultImportModule += "import csv \r\n";
            //defaultImportModule += "import RPi.GPIO as GPIO \r\n";
            //defaultImportModule += "from gpiozero import LED \r\n";
		
			
            if( contents ){
				contents = contents.replace(/\\/gi, "\\\\");
				contents = contents.replace(/'/gi, "'\\''");
				contents = contents.replace(/"/gi, "\\\"");
			} else {
				contents = "";
			}

            contents = defaultImportModule + contents;

            if(camera_yn == "Y") { contents += "\r\n" + "  print('\\''takePictures'\\'');" }
            if(record_yn == "Y") { contents += "\r\n" + "  print('\\''dataPictures'\\'');" }
            if(save_npz_yn == "Y") { contents += "\r\n" + "  print('\\''savedNpzData'\\'');" }
            if(save_model_yn == "Y") { contents += "\r\n" + "  print('\\''savedTensorFlowModel'\\'');" }
            if(pltimshow_yn == "Y") {
                let imgIdx = 0;
                let splitContentsArr = contents.split("\n");
                console.log("[splitContentsArr]: " + splitContentsArr.length);

                contents = "";
                for(let i in splitContentsArr) {
                    //console.log("========================================================================");
                    //console.log(splitContentsArr[i]);
                    
                    if(splitContentsArr[i] && splitContentsArr[i].includes("plt.imshow")) {
                        console.log("plt.imshow() =====> plt.savefig() ");
                        splitContentsArr[i] += "\nplt.savefig('\\''/home/pi/WebCoding-main/Web.Front/public/img/runimg/runimg"+imgIdx+".png'\\'');";
                        imgIdx++;
                    }

                    contents += splitContentsArr[i] + "\n";
                }
                contents += "  print('\\''imShow'\\'');"
            }
            contents += "\r\n" + "  print('\\''.Program End.'\\'');";
            /*
            command = "echo '"+ contents +"' > "+ rootPath + filename;

            console.log(command);
			
			let excuteResult = this.executeSyncCmd( command );
            
			command = "python " + rootPath + filename;

			let commandArray = command.split(" ");
			let firstCommand = commandArray[0];
			commandArray.splice(0, 1);
			let secondCommandArray = commandArray;

            
            //result = childProcess.spawnSync( firstCommand, secondCommandArray );
            result = childProcess.spawn( firstCommand, secondCommandArray );

            //console.log(result);
            _pyProc.pid = result.pid;
            console.log("================================================");
            console.log(_pyProc);

            
            if(result.stderr.toString() == ""){
                returndata.text = result.stdout.toString();
                return returndata;
            }
            else if(result.stderr.toString() != ""){
                returndata.text = result.stderr.toString();
                return returndata;
            }
            
            result.stdout.on('data', function(data){
                console.log("================================================");
                let buf = Buffer.from(data);
                console.log(buf.toString('utf8'));
            });
            result.stderr.on('data', function(data){
                console.log("================================================");
                let buf = Buffer.from(data);
                console.log(buf.toString('utf8'));
            });
            //*/

            let returndata = {};

            returndata.type = "text";
            returndata.text = contents;

            return returndata;

        } catch(err){
			console.error(err);
			return err.toString();
		}
    },

    keyboardDrivingCmd : function(param){

        var command = "";
        var result = "";

        try {
            /*
            let rootPath = '/home/pi/autonomousCar/block/';
			//let filename = "driving_program.py";
            let filename = "driving_code.py";

            command = "python " + rootPath + filename + " "+param.key_code;
            console.log(command);

            //result = this.executeSyncCmd( command );
            let commandArray = command.split(" ");
			let firstCommand = commandArray[0];
			commandArray.splice(0, 1);
			let secondCommandArray = commandArray;

            //result = childProcess.spawnSync( firstCommand, secondCommandArray );
            result = childProcess.spawn( firstCommand, secondCommandArray );
            //*/
            
            let returndata = { resCode: '00', resMsg: 'Success' };

            /*
            result.stdout.on('data', function(data){
                console.log("================================================");
                let buf = Buffer.from(data);
                console.log(buf.toString('utf8'));
            });
            result.stderr.on('data', function(data){
                console.log("================================================");
                let buf = Buffer.from(data);
                console.log(buf.toString('utf8'));
            });
            //*/

            //*  W=87, A=65, S=83, D=68, R=82, Q=81
            let direction = "stop";
            if(param.key_code == "87") { direction = "forward"; }
            if(param.key_code == "65") { direction = "left"; }
            if(param.key_code == "68") { direction = "right"; }

            let options = {};
            options.url = "http://192.168.50.1:5000/motor";
            options.method = "GET";
            options.qs = {
                'direction' : direction,
                'record' : param.record_yn
            };

            if( parseInt(param.first_driving) > 0 ) {

                APIRequest(options)
                .then(function(piRes) {
                    console.log('motor ' + direction);
                    console.log('record ' + param.record_yn);
                    _prop.Api.IsNotDriving = true;
                })
                .catch(function(error) {
                    console.log(error.toString());
                });

            } else {

                if(_prop.Api.IsNotDriving) {

                    _prop.Api.IsNotDriving = false;
                
                    APIRequest(options)
                    .then(function(piRes) {
                        console.log('motor ' + direction);
                        console.log('record ' + param.record_yn);
                        _prop.Api.IsNotDriving = true;
                    })
                    .catch(function(error) {
                        console.log(error.toString());
                    });
    
                }

            }
            //*/
            return returndata;

        } catch(err){
			console.error(err);
			return err.toString();
		}

    },
    
    deleteDataCmd : function(){

        var command = "";
        var result = "";

        try {
            
            // training data delete
            command = "rm -rf " + _prop.Resources.DataOutputDir + _prop.Resources.DataCurrentDir + "/*";
            result = this.executeSyncCmd( command );

            // log data delete
            command = "rm -rf " + _prop.Resources.logOutputDir + "*";
            result = this.executeSyncCmd( command );

            return result;

        } catch(err){
			console.error(err);
			return err.toString();
		}
    },

    getProjectsJsonInfo : function(){

        let result = {};

        try {
            let jsonInfoPath = _prop.Resources.blockDir + "/project/";   // 임시 project json 경로
            let jsonInfoFile = "project.manage.json";

            let resultText = fs.readFileSync(jsonInfoPath+jsonInfoFile);
            result = JSON.parse(resultText).info;
            
            return result;

        } catch( err ) {
            console.log(err.toString());
            return result;
        }

    },
    
}
