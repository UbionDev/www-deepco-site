var express = require('express');
var router = express.Router();

/**
 * Coda Kit 접속 목록 조회
 */
router.get('/coda/netList', async (req, res) => {
    try {
        let { kit_name } = req.query;

        let options;
        options = {
            url : _prop.Api.CodingControllerUrl + '/codanets',
            method : "GET",
            qs: {
                kit_name : kit_name
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

/**
 * Coda Kit 접속 정보 등록
 */
router.get('/coda/netRegister', async (req, res) => {
    try {

        let { kit_name, kit_address } = req.query;
        console.log('[Register Name]: ' + kit_name);
        console.log('[Register Addr]: ' + kit_address);

        let options;
        options = {
            url : _prop.Api.CodingControllerUrl + '/codanets',
            method : "POST",
            body: {
                kit_name : kit_name,
                kit_address : kit_address
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