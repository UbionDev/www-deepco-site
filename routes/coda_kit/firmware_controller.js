var express = require('express');
var router = express.Router();

/**
 * Firmware 버전 목록 조회
 */
router.get('/firmwares/list', async (req, res) => {
    try {

        let optins;
        options = {
            url : _prop.Api.CodingControllerUrl + '/firmwares',
            method : "GET",
            qs: {},
            json : true
        }
        
        let apiResponse = await _commonUtil.callAPI(options, req);

        res.json(apiResponse);

    } catch(error) {
        res.status(500);
        res.end();
    }
});

/**
 * Firmware 버전 정보 등록
 */
router.get('/firmwares/register', async (req, res) => {
    try {

        let { firmware_version } = req.query;
        console.log('[Register Version]: ' + firmware_version);

        let optins;
        options = {
            url : _prop.Api.CodingControllerUrl + '/firmwares',
            method : "POST",
            body: {
                kit_version : "1.0",
                firmware_version : firmware_version,
                update_url : "http://file.aimakers.co.kr/joinc/devel/aimakers_v"+firmware_version+".sh"
            },
            json : true
        }
        
        let apiResponse = await _commonUtil.callAPI(options, req);

        res.json(apiResponse);

    } catch(error) {
        res.status(500);
        res.end();
    }
});

module.exports = router;