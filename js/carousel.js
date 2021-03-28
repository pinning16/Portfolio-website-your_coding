const carouselModule = (() => {
    return {
      configure: () => {
        const mySwiper = new Swiper('.swiper-container', {
          // ここからはオプションを記述していきます
          loop: true,
          slidesPerView: 4, // 何枚のスライドを表示するか（小数点も可能　※両端のコンテンツが欠ける）
          spaceBetween: 56,//  追加...スライド間の余白
          speed: 2800,//  スクロールのスピード
          centeredSlides: true, //スライドのスタートを左端（false）にするか真ん中（true）にするか
          autoplay: {
            delay: 2500,//　スライドのスピード

            stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
            disableOnInteraction: true, // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    

          },
         //   ページネーションとナビゲーションを表示
    //    pagination: {
    //      el: '.swiper-pagination',
    //    },
    //    navigation: {
    //      nextEl: '.swiper-button-next',
    //      prevEl: '.swiper-button-prev',
    //    },
       // ここまでを追加

// 画面幅に応じてスライド数を変え
        // ブレイクポイントを設定（1023px以下の時に適用されるオプション）
        breakpoints: {
         990: {
              slidesPerView: 1,
              spaceBetween: 0,  
              autoplay: {
                   delay: 3000,
                 },        
         }
       }

       // ここまで追加



        })
      }
    }
  })()
  
  carouselModule.configure()
