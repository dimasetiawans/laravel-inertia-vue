// Plain JS, Vue-agnostic helpers you can call from your layout

export function setupSbAdmin({
  sidebarSelector = '#accordionSidebar',
  toggleBtnsSelector = '[data-action="sidebar-toggle"]',
  scrollTopBtnSelector = '#scrollToTop',
  contentWrapperSelector = '#content-wrapper',
  localStorageKey = 'sb2.sidebar.toggled'
} = {}) {
  const body = document.body;
  const sidebar = document.querySelector(sidebarSelector);
  const contentWrapper = document.querySelector(contentWrapperSelector);
  const scrollTopBtn = document.querySelector(scrollTopBtnSelector);

  // --- Sidebar toggle state (persist in localStorage)
  const initial = localStorage.getItem(localStorageKey) === '1';
  setSidebarToggled(initial);

  // Bind toggle buttons
  document.querySelectorAll(toggleBtnsSelector).forEach(btn => {
    btn.addEventListener('click', () => {
      const toggled = !body.classList.contains('sidebar-toggled');
      setSidebarToggled(toggled);
      localStorage.setItem(localStorageKey, toggled ? '1' : '0');
    });
  });

  // Lock scroll on fixed sidebar when hovering (replicates SB Admin 2)
  if (sidebar) {
    sidebar.addEventListener('wheel', (e) => {
      if (window.innerWidth > 768 && body.classList.contains('fixed-nav')) {
        e.preventDefault();
        sidebar.scrollTop += e.deltaY;
      }
    }, { passive: false });
  }

  // Scroll-to-top visibility
  const onScroll = () => {
    if (!scrollTopBtn) return;
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Helpers
  function setSidebarToggled(isOn) {
    body.classList.toggle('sidebar-toggled', isOn);
    if (sidebar) sidebar.classList.toggle('toggled', isOn);
  }

  // Optional: collapse open submenus when toggled (Bootstrap 5 collapse API via data attrs)
  // If you built nested accordions, you can close them here manually if needed.
}
