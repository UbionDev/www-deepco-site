$(document).ready(function() {
  //Navigation location active
  $('.navbar-nav').each(function(){
    var that = $(this).find('a[href="'+ location.href.split('/').pop() +'"]').parent('li');
    that.addClass('active') ;
  });

  //프로젝트 수정
  $('.card-project .more').mouseenter(function(){
    $(this).addClass('focus').next('.speech-bubble').show();
  });
  $('.card-project .more.focus').next('.speech-bubble').mouseleave(function(){
    $(this).hide();
    $(this).prev('.more').removeClass('focus');
  });
  $('.card-project').mouseleave(function(){
    $(this).children('.speech-bubble').hide();
    $(this).children('.more.focus').removeClass('focus');
  });


  //삭제 알럿
  function projectDelte(value){
    alert(value);
    return false;
  };
  $('button[data-bs-dismiss=alert]').click(function(){
    projectDelte('정말 삭제하시겠습니까?');
  });



});

