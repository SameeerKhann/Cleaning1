// Robust scroll-reveal used by every Kidus page.
// Works whether the page scrolls on window OR an inner overflow:auto container
// (the preview host scrolls an inner div, where IntersectionObserver / animation-timeline
// do not reliably resolve). Reveals by setting inline opacity/transform so it overrides
// both inline and stylesheet hidden states. Above-the-fold items show immediately.
(function () {
  function init(rootEl) {
    var root = rootEl || document.querySelector('[data-screen-label]') || document.body;

    function els() {
      return Array.prototype.slice.call(
        document.querySelectorAll('[data-reveal],[data-reveal-stagger]')
      );
    }

    function findScroller() {
      var el = root;
      while (el && el !== document.body && el !== document.documentElement) {
        var oy = getComputedStyle(el).overflowY;
        if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 4) return el;
        el = el.parentElement;
      }
      return null;
    }

    var scroller = findScroller();

    function vh() {
      return window.innerHeight || document.documentElement.clientHeight || 800;
    }

    function check() {
      var limit = vh() * 0.92;
      var list = els();
      for (var i = 0; i < list.length; i++) {
        var el = list[i];
        if (el.dataset.kcShown) continue;
        if (el.getBoundingClientRect().top < limit) {
          el.dataset.kcShown = '1';
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      }
    }

    // Reveal above-the-fold immediately so the page is never blank.
    requestAnimationFrame(function () {
      check();
      requestAnimationFrame(check);
    });

    var handler = function () { check(); };
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler, { passive: true });
    if (scroller) scroller.addEventListener('scroll', handler, { passive: true });

    // Safety: a few re-checks in case fonts/layout shift positions after load.
    var t1 = setTimeout(check, 400);
    var t2 = setTimeout(check, 1200);

    return function cleanup() {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      if (scroller) scroller.removeEventListener('scroll', handler);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }

  window.kcInitReveal = init;
})();
