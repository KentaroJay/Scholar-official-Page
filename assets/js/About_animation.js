$(function () {
    $("#aboutScholar__link-wrapper").hover(function () {
        $('#aboutScholar__link').hover(function(){
            $("#aboutScholar__slideDowns").slideDown(700);
        })
    },function(){
        $("#aboutScholar__slideDowns").slideUp(700);
    });
    var $animation = $(".icon-animation");

    $animation.on("click", function () {
      if ($(this).hasClass("is-open")) {
        $(this).removeClass("is-open");
        $(this).find(".hamburger-bar-title").slideUp();
        $("#header-circleToSquare").animate(
          {
            "border-radius": "50%",
            width: "0px",
            height: "0px",
            top: "30px",
            right: "30px",
            borderRightWidth: "0px",
            borderLeftWidth: "0px",
            borderBottomWidth: "0px",
            borderTopWidth: "0px",
          },
          {
            duration: 100,
            easing: "swing",
          }
        );
        $(this)
          .find(".hamburger-bar-title-wrapper")
          .html(
            '<span style="position: relative; top: 41px; left: 3px; height:20px; display:none; background: none;" class="hamburger-bar-title">Menu</span>'
          );
        $(this).find(".hamburger-bar-title").slideDown();
        $("#header-circleToSquare__links").empty();
      } else {
        $(this).addClass("is-open");
        $(this).find(".hamburger-bar-title").slideUp();
        $("#header-circleToSquare").animate(
          {
            "border-radius": "0px",
            width: "240px",
            height: "500px",
            top: "0px",
            right: "0",
            borderRightWidth: "1px",
            borderLeftWidth: "1px",
            borderBottomWidth: "1px",
            borderTopWidth: "1px",
          },
          {
            duration: 150,
            easing: "swing",
          }
        );
        $(this)
          .find(".hamburger-bar-title-wrapper")
          .html(
            '<span style="position: relative; top: 41px; left: 3px; height:20px; display:none; background: none;" class="hamburger-bar-title">Close</span>'
          );
        $(this).find(".hamburger-bar-title").slideDown();
        $("#header-circleToSquare__links").append(
          '<ul><li id="firstList"><a href="https://du-scholar.tk/">-ホーム</a></li><li><a href="https://du-scholar.tk/Pages/About.html">-Scholarについて</a></li><ul><li><a href="https://du-scholar.tk/Pages/About.html">-団体理念</a></li><li><a href="https://du-scholar.tk/Pages/About.html">-活動内容</a></li><li><a href="https://du-scholar.tk/Pages/About.html">-代表挨拶</a></li></ul><li><a href="https://du-scholar.tk/Pages/About.html">-メンバー紹介</a></li><li><a href="https://du-scholar.tk/Pages/ForStudent.html">-学生の皆様へ</a></li><li><a href="https://du-scholar.tk/Pages/ForCorporation.html">-企業の皆様へ</a></li></ul><a href="https://twitter.com/scholar_do"><i class="fab fa-twitter-square" target="_blank"></i></a><div class="button"><div class="eff"></div><a href="https://du-scholar.tk/Pages/Contact.html"> お問い合わせ</a></div>'
        );
        $("#header-circleToSquare__links").find("li").hide();
        $("#header-circleToSquare__links").find("i").hide();
        $("#header-circleToSquare__links").find(".button").hide();
        setTimeout(function () {
          $("#header-circleToSquare__links").find("li").slideDown();
          $("#header-circleToSquare__links").find("i").slideDown();
          $("#header-circleToSquare__links").find(".button").slideDown();
        }, 150);
      }
    });
  });
