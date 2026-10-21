var express = require('express');
var router = express.Router();
var keycloak_util = require(_base + '/common/keycloak/keycloak_util.js');


var blockController = require('./block_coding/block_controller');
//var learnController = require('./learn/learn_controller');
var siteController = require('./ai_site/site_index');
var codingController = require('./ai_site/coding_index');
var keycloakController = require('./keycloak/keycloak_controller');

//* Kit Firmware Version 관리용 Api
//  apt 빌드 서버에서 kit 업데이트 소스 빌드 후, 호출.
//  car 사이트에서 firmware 버전 목록 조회.
var kitFirmwareController = require('./coda_kit/firmware_controller');
//*/

//* Kit 접속 네트워크 관리용 Api
var kitNetController = require('./coda_kit/net_controller');
//*/

//  사용자 권한 설정
router.use('/common', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER']));
router.use('/lesson', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER']));
router.use('/blocks', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_USER']));
router.use('/lecture', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_USER']));
router.use('/project', keycloak_util.hasAnyRole(['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_USER']));

router.use('/', blockController);
//router.use('/', learnController);
router.use('/', siteController);
router.use('/', codingController);
router.use('/', keycloakController);

//* Kit Firmware Version 관리용 Api
router.use('/', kitFirmwareController);
//*/

//* Kit 접속 네트워크 관리용 Api
router.use('/', kitNetController);
//*/

// router.get('/test', async (req, res) => {
//     return res.json({test:"123"});
// });

module.exports = router;
