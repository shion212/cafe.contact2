$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});


$(function() {                       //run when the DOM is ready
  $("a").click(function() {  //use a class, since your ID gets mangled
    $(this).addClass("clicked");
    $('body').addClass("blue");
    setTimeout(function(){

      $('body').removeClass("blue");
    }, 2000);
    setTimeout(function(){

      $("a").removeClass("clicked");
    }, 4000);
  });
});


//ハンバーガー
$(document).ready(function () {

        $('.menu').click(function() {
            $('.overlay').toggleClass('anim');
            $(this).addClass('open')
        });

        $('.open').click(function(){
            $('.overlay').toggleClass('reverse-animation');
        })
});
