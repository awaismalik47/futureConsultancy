(function() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const statValues = statsSection.querySelectorAll('.stat-value[data-target]');
  const duration = 2000;
  let hasAnimated = false;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateValue(el, target, suffix, startTime) {
    const start = 0;
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(start + (target - start) * eased);
      el.textContent = current + (suffix || '');
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + (suffix || '');
      }
    }
    requestAnimationFrame(update);
  }

  function runCountUp() {
    if (hasAnimated) return;
    hasAnimated = true;
    const startTime = performance.now();
    statValues.forEach(function(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      animateValue(el, target, suffix, startTime);
    });
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        runCountUp();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
})();
