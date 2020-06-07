$('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});

$(function() {
    //600px以上の場合
    if (window.matchMedia( '(min-width: 425px)' ).matches) {
$('.slideanime').css('display','none');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.slideanime').each(function(){
  var targetPosition = $('.fold-text-wrapper').offset().top;
  if(topWindow > targetPosition - windowHeight + 200){
   $(this).slideDown();
  }
 });
});
    } else {

$('.fold-text-wrapper').click(function() {
    var $text = $(this).find('.contents-text');
    if($text.hasClass('open')) {
        $text.removeClass('open');
        $text.slideUp();
        $(this).find('span').text('+');
    } else {
        $text.addClass('open');
        $text.slideDown();
        $(this).find('span').text('－');
    }
});

    }

});    

