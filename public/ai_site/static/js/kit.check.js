var checkKitWiFiStatus = function() {
    try {
        var termFrm = document.getElementById('termFrmTemp').contentWindow;
        termFrm.postMessage('wifiStatus', kitDomainRootUrl + ':2222');

    } catch(error) {
        notFoundKit();
    }
}

var rebootKitToTerminal = function() {
    try {
        var termFrm = document.getElementById('termFrmTemp').contentWindow;
        termFrm.postMessage('rebootKit', kitDomainRootUrl + ':2222');

    } catch(error) {
        notFoundKit();
    }
}

var shutdownShToTerminal = function() {
    try {
        var termFrm = document.getElementById('termFrmTemp').contentWindow;
        termFrm.postMessage('shutdownSh', kitDomainRootUrl + ':2222');

    } catch(error) {
        notFoundKit();
    }
}

var notFoundKit = function() {
    console.log('Kit NOT Connect.');
    if(wifiStatusTimer) { clearInterval(wifiStatusTimer); }
    $('span.wifi_wrap > i.wifi').remove();
    $('span.wifi_wrap').eq(1).append(`<i class="wifi none"></i>`);
    //alert('연결된 Kit를 찾을 수 없습니다.\nKit 연결을 확인 하세요.');
}

var wifiStatusTimer;
var setKitWiFiStatusTimer = function() {
    if(wifiStatusTimer) { clearInterval(wifiStatusTimer); }
    wifiStatusTimer = setInterval(function(){
        checkKitWiFiStatus();
    }, 10000);
}

$(document).ready(function(){
    //setKitWiFiStatusTimer();

    $(document).on("click", "#btn_reboot", function() {
        rebootKitToTerminal();
    });
    $(document).on("click", "#btn_shutdown", function() {
        shutdownShToTerminal();
    });
});

window.addEventListener('message', function(e) {
	//console.log(e.data);
	try {
		
		var splitDataArr = e.data.split('|');
		var termCmd = '', termIdx = '', wifiStatusText = '';
		if( splitDataArr && splitDataArr.length > 1 ) {
			termCmd = splitDataArr[0];
			termIdx = splitDataArr[1];
			//imgRootFolderName = splitDataArr[2];
			wifiStatusText = splitDataArr[3];
		}
		if( termCmd == 'kitWiFiStatus' ) {
			//console.log('kitWiFiStatus', JSON.parse(wifiStatusText));
			var wifiStatusInfo = JSON.parse(wifiStatusText);
            if( wifiStatusInfo.isTimeout == 'Y' ) {
                notFoundKit();
            }
			if( wifiStatusInfo.isConnected == 'N' ) {
				location.href = kitDomainRootUrl;
			}
			//* Rssi icon 
			// [ -100 : None Signal ] 
			// [ -100 > Rssi > -70 : Weak Signal ] 
			// [ -70 > Rssi > -40 : Medium Signal ] 
			// [ -40 > Rssi >= 0 : Strong Signal ]
            //*/
            var rssiClass = '', posVal = 0;
            posVal = Math.abs(wifiStatusInfo.rssi);
            if(posVal == 100) { rssiClass = 'none'; }
            else if( 70 < posVal && posVal < 100 ) { rssiClass = 'weak'; }
            else if( 40 < posVal && posVal < 70 ) { rssiClass = 'medium'; }
            else if( 0 <= posVal && posVal < 40 ) { rssiClass = 'full'; }
            else { rssiClass = 'loading'; }
            $('span.wifi_wrap > i.wifi').remove();
            $('span.wifi_wrap').eq(1).append(`<i class="wifi ${rssiClass}"></i>`);
		}
	
	} catch(error) {
		console.log('Kit Not Response');
		//* Rssi icon 
		// [ -100 : None Signal ]
		//*/
        $('span.wifi_wrap > i.wifi').remove();
        $('span.wifi_wrap').eq(1).append(`<i class="wifi loading"></i>`);
	}
});