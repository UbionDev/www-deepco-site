$(document).ready(function() {


  //Navigation location active
  $('.navbar-nav').each(function(){
    var that = $(this).find('a[href="'+ location.href.split('/').pop() +'"]').parent('li');
    that.addClass('active');
  });

});