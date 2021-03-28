    // ハンバーガーメニュー設定
    $(function() {
        $('.navToggle').click(function() {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $('.sp-nav').addClass('active');
            } else {
                $('.sp-nav').removeClass('active');
            }
        });
    });

    // スムーズスクロール
    // ハンバーガーメニューページ内リンク
    $(function(){
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");

        $('.navToggle').removeClass('active');
        $(".sp-nav").removeClass('active');

        return false;
        });
    });
// end ハンバーガーメニュー設定
