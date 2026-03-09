(function() {
  const header = document.getElementById('mainHeader');
  const hamburger = document.getElementById('hamburger');
  const desktopNav = document.getElementById('desktopNav');

  // Scroll effect for header
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  if (hamburger && desktopNav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      desktopNav.classList.toggle('open');
      document.body.style.overflow = desktopNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a link (for mobile) - but not for dropdown triggers
    desktopNav.querySelectorAll('a').forEach(function(link) {
      if (link.getAttribute('href') === '#' && link.closest('.nav-item.has-dropdown')) return;
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        desktopNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Mobile: toggle dropdown on click
    desktopNav.querySelectorAll('.nav-item.has-dropdown').forEach(function(item) {
      var link = item.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            item.classList.toggle('mobile-open');
          }
        });
      }
    });
  }
})();
