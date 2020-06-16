$(function() {
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

// ボタンをクリックしたら発動
  $('#area1 button').click(function() {

    // class'showUp'をdiv要素に追加
    $('#comment1').slideToggle();

 });
    // ボタンをクリックしたら発動
      $('#area2 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment2').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area3 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment3').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area4 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment4').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area5 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment5').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area6 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment6').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area7 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment7').slideToggle();
 });
    // ボタンをクリックしたら発動
      $('#area8 button').click(function() {

        // class'showUp'をdiv要素に追加
        $('#comment8').slideToggle();
 });

});
$(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }

  //通常のクリック時
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
})
