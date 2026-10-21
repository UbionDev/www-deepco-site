module.exports = {

    Resources : {
        FrontBaseUrl : "http://wdr.ubion.co.kr/CodingExercise/",
        codaUpdateDir : "/app/aimakers/Kit_Update",
        blockDir : "/home/pi/autonomousCar/block",
        cameraDir : "/cam",        // /home/pi/autonomousCar/block/cam/
        resultDir : "/result/cam",        // /home/pi/autonomousCar/block/result/cam/
        logOutputDir : "/logs",    // /home/pi/autonomousCar/block/logs/
        DataOutputDir : "/data",   // /home/pi/autonomousCar/block/data/
        DataCurrentDir : "/training"
    },

    Api : {
        CodeExecuteUrl : "http://doc.coding.wowpass.com",
        CodingControllerUrl : "http://localhost:3002",      // Kit 적용시 http://223.130.160.77:3002
        CodingContentUrl : "http://localhost:3002",      // 개발 서버 및 Kit 적용시 http://223.130.160.77:3002
        WebSSH2Domain : {
            RootUrl : "http://192.168.50.1",
            HostName : "192.168.50.1",
            Port : "2222"
        },
        IsNotDriving : false,
        tokenBufferTime : 30,
    },
    outerSite : {
        redirectUrl : "http://192.168.102.243:3000",
    },

}
