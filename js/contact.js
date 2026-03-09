(function() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  const faqItems = document.querySelectorAll('.faq-item');

  // Contact form submit
  if (form && successMsg) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      successMsg.classList.remove('hidden');
      form.reset();
      setTimeout(function() {
        successMsg.classList.add('hidden');
      }, 5000);
    });
  }

  // FAQ accordion
  if (faqItems.length > 0) {
    faqItems.forEach(function(item) {
      var btn = item.querySelector('.faq-q');
      if (btn) {
        btn.addEventListener('click', function() {
          var isOpen = item.classList.contains('open');
          faqItems.forEach(function(i) { i.classList.remove('open'); });
          if (!isOpen) {
            item.classList.add('open');
          }
        });
      }
    });
  }
})();
