// Robust scroll-reveal used by every Kidus page.
// Works whether the page scrolls on window OR an inner overflow:auto container
// (the preview host scrolls an inner div, where IntersectionObserver / animation-timeline
// do not reliably resolve).
//
// IMPORTANT: reveal is applied via a CSS class (.kc-revealed) with !important rather than
// imperative inline styles. The pages are React (DC) components — a re-render resets inline
// styles back to the hidden state, which previously left content stuck invisible. A class
// that React does not manage survives re-renders, and !important overrides both the
// stylesheet hidden rule and any inline opacity:0. Above-the-fold items show immediately so
// the page is never blank, and a failsafe reveals anything still hidden.
(function () {
  function ensureStyle() {
    if (document.getElementById('kc-reveal-style')) return;
    var st = document.createElement('style');
    st.id = 'kc-reveal-style';
    st.textContent = '.kc-revealed{opacity:1 !important;transform:none !important;transition-delay:0s !important;}'
      + '.kc-revealed.kc-snap{transition:none !important;}';
    (document.head || document.documentElement).appendChild(st);
  }

  function init(rootEl) {
    ensureStyle();
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

    function reveal(el) {
      el.dataset.kcShown = '1';
      el.classList.add('kc-revealed');
      // After the fade has had time to play, lock the element visible with no transition,
      // so a later React re-render can't restart a delayed transition and leave it stuck.
      setTimeout(function () { el.classList.add('kc-snap'); }, 1100);
    }

    function check(limitFactor) {
      var limit = vh() * (limitFactor || 0.92);
      var list = els();
      for (var i = 0; i < list.length; i++) {
        var el = list[i];
        if (el.classList.contains('kc-revealed')) continue;
        if (el.getBoundingClientRect().top < limit) reveal(el);
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

    // Re-checks in case fonts/layout shift positions, or a React re-render occurs after mount.
    var timers = [
      setTimeout(function () { check(); }, 400),
      setTimeout(function () { check(); }, 1200),
      // Final failsafe: reveal anything in/near the viewport so nothing is ever stuck hidden.
      setTimeout(function () { check(1.15); }, 2200)
    ];

    return function cleanup() {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      if (scroller) scroller.removeEventListener('scroll', handler);
      timers.forEach(function (t) { clearTimeout(t); });
    };
  }

  window.kcInitReveal = init;
})();
