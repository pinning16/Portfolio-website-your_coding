jQuery(document).ready(function() {

    //スムーズスクロール トップへ戻る
    $(function() {
        var pagetop = $('#js-scroll-top');
        //ボタン非表示
        pagetop.hide();
        //100pxスクロールしたらボタン表示
        $(window).scroll(function() {
            if($(this).scrollTop() > 690) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function() {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
    // end スムーズスクロール トップへ戻る
});
