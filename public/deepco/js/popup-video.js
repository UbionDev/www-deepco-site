


/*유튜브API */
    // IFrame Player API 코드를 비동기식으로 로드.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var idAry = [], urlAry = [], objAry = [];
    //플레이어를 만들어줄 아이디값을 넣을 배열, 각 동영상 url을 넣을 배열, 플레이어 객체를 넣을 배열.
    $(".ytPlayer").each(function (i) {
        var vod_W = $(this).innerWidth();
        var vod_H = (vod_W * 0.561863173);
        $(this).css('min-height', vod_H);//동영상 넓이에 따른 높이값 맞추기
        $(this).attr("id", "player" + i);//아이디 값 추가
        idAry.push("player" + i); //아이디 값 배열에 넣기
        urlAry.push($(this).data("url")); //동영상 url 넣기
    });

    function onYouTubeIframeAPIReady() { //iframe 만들어주는 함수
        for (var i = 0; i < $(".ytPlayer").length; i++) { //동영상을 원하는 만큼 만들어주기 위해.
            var player;
            var playerId = idAry[i];
            player = new YT.Player(playerId, {
                videoId: urlAry[i],
                // width:"vod_W",
                // height:"vod_H",
                playerVars: {
                    rel: 0,
                    showinfo: .0,
                    autoplay: 0,
                    modestbranding: 1 //YouTube 로고 표기
                }
            });
            objAry.push(player);
            //변수 player에 각 동영상마다 만들어진 객체를 objAry 배열에 넣어준다.
            //그래야 후에 원하는 동영상 제어를 할 수 있다.
           
        }
    }
    //objAry[0].playVideo();//조건에 맞게 동영상을 제어
    var i = 0; 
    // 재생
    function playVideo(i) {
        objAry[i].playVideo();
    }
    // 종료
    function stopVideo(i) {
        objAry[i].stopVideo();
    }