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
})

$(function() {
// ボタンをクリックしたら発動
  $('.area1 button').click(function() {
   
    // class'showUp'をdiv要素に追加
    $('.comment1-2').slideDown();

 });
});

$(function() {
    // ボタンをクリックしたら発動
      $('.area2 button').click(function() {
       
        // class'showUp'をdiv要素に追加
        $('.comment2-2').slideDown();
 });
});

$(function() {
    // ボタンをクリックしたら発動
      $('.area3 button').click(function() {
       
        // class'showUp'をdiv要素に追加
        $('.comment3-2').slideDown();
 });
});