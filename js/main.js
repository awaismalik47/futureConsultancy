(function() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Visit Visa carousel (Visa Assistance style)
  var visitVisaEl = document.querySelector('.visit-visa-swiper');
  if (visitVisaEl && typeof Swiper !== 'undefined') {
    new Swiper('.visit-visa-swiper', {
      slidesPerView: 1,
      spaceBetween: 28,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.visit-visa-pagination',
        clickable: true
      },
      breakpoints: {
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }
    });
  }
})();
