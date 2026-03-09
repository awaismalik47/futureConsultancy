(function() {
  var heroSwiper = document.querySelector('.hero-swiper');
  if (!heroSwiper) return;

  new Swiper('.hero-swiper', {
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
    }
  });
})();
