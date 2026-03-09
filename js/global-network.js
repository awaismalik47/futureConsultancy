(function() {
  const el = document.querySelector('.global-network-swiper');
  if (!el) return;

  new Swiper('.global-network-swiper', {
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    grabCursor: true
  });
})();
