var syncFolderName;
function initSyncData(initFolderName, jsonText) {
	
	var params = new FormData();
	params.append('init_folder', initFolderName);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/common/syncFolder/initialize', false);  // Asyncronous: flase
	xhr.send(params);

	if(xhr.status === 200) {
		//console.log(xhr.responseText);
		syncFolderName = initFolderName;
		window.localStorage.removeItem('syncDatas');
		setSyncDataToStorage(jsonText);
	}

}

function setSyncDataToStorage(jsonText) {
	var dataList = [];
	if(syncFolderName == 'cam') {
		dataList.push('picture1.jpg');
		window.localStorage.setItem('syncDatas', JSON.stringify(dataList));
	}
	if(syncFolderName == 'training') {
		window.localStorage.setItem('syncDatas', jsonText);
	}
	if(syncFolderName == 'result') {
		dataList.push('result_picture.jpg');
		window.localStorage.setItem('syncDatas', JSON.stringify(dataList));
	}
}

function scpFromKitToWeb(termIdx, commandMessage) {
	var termFrm = document.getElementById('termFrm'+termIdx).contentWindow;
	termFrm.postMessage(commandMessage, kitDomainRootUrl+':2222');
}

function checkSyncDataStatus($pictureDiv, syncFolderName, userFolder) {
	var dataList = JSON.parse(window.localStorage.getItem('syncDatas'));
	
	if(!syncDataFlag) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/common/camera/pictures?pictures_folder='+syncFolderName, false);  // Asyncronous: flase
		xhr.send(null);
		//console.log('checkSyncDataStatus', syncFolderName);
		if(xhr.status === 200) {
			var completeList = JSON.parse(xhr.responseText);
			$pictureDiv.empty();
			console.log(dataList.length, completeList.length);
			for(var dIdx in dataList) {
				for(var cIdx in completeList) {
					var syncUrl = '';
					if(syncFolderName == 'cam') { syncUrl += '/cam'; }
					if(syncFolderName == 'training') { syncUrl += '/data' + userFolder; }
					if(syncFolderName == 'result') { syncUrl += '/result/cam'; }

					if(completeList[cIdx] == dataList[dIdx]) {
						syncUrl += '/' + dataList[dIdx];
						$pictureDiv.append(`<img class="img-fluid mb-1  me-1" src="${syncUrl}" />`);
						continue;
					}
				}
			}
			if(completeList.length == dataList.length) {
				syncDataFlag = true;
			} else {
				setTimeout(function(){
					checkSyncDataStatus($pictureDiv, syncFolderName, userFolder);
				}, 1000);
			}
		}
	}
}

var syncDataFlag = false;
var setSyncDataTimer = function($pictureDiv, syncFolderName, userFolder) {
	//console.log('setSyncDataTimer', syncFolderName);
	setTimeout(function(){
		checkSyncDataStatus($pictureDiv, syncFolderName, userFolder);
	}, 1000);
}