(function() {
  var heroSwiper = document.querySelector('.hero-swiper');
  if (!heroSwiper) return;

  function playActiveVideo(swiper) {
    var isDesktop = window.innerWidth >= 769;
    if (!isDesktop) return;

    heroSwiper.querySelectorAll('.hero-video-bg[data-video]').forEach(function(video) {
      video.pause();
      video.currentTime = 0;
    });

    var activeSlide = swiper ? swiper.slides[swiper.activeIndex] : heroSwiper.querySelector('.swiper-slide-active');
    if (activeSlide) {
      var video = activeSlide.querySelector('.hero-video-bg[data-video]');
      if (video) {
        video.currentTime = 0;
        video.play().catch(function() {});
      }
    }
  }

  var swiperInstance = new Swiper('.hero-swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.hero-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev'
    },
    grabCursor: true,
    keyboard: {
      enabled: true
    },
    mousewheel: {
      forceToAxis: true
    },
    on: {
      init: function() {
        playActiveVideo(this);
      },
      slideChangeTransitionEnd: function() {
        playActiveVideo(this);
      }
    }
  });

  window.addEventListener('resize', function() {
    playActiveVideo(swiperInstance);
  });
})();
