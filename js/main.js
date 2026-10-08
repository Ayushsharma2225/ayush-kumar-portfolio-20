/**
 * ============================================================================
 * PORTFOLIO MAIN JAVASCRIPT
 * First-Year B.Tech CSE (AI & ML) Student Portfolio
 * JECRC University, Jaipur
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initTypingEffect();
  initScrollSpy();
  initSkillsFilter();
  initProjectsFilter();
  initContactForm();
  initCopyEmail();
  initBackToTop();
});

/**
 * 1. THEME TOGGLE (Dark / Light mode)
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (!themeIcon) return;

  if (theme === 'light') {
    // Show Moon icon for switching to dark
    themeIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    `;
    themeIcon.setAttribute('title', 'Switch to Dark Mode');
  } else {
    // Show Sun icon for switching to light
    themeIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    `;
    themeIcon.setAttribute('title', 'Switch to Light Mode');
  }
}

/**
 * 2. MOBILE NAVIGATION
 */
function initMobileNav() {
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navLinks = document.getElementById('nav-links');
  const navLinksList = document.querySelectorAll('.nav-link');

  if (!mobileToggleBtn || !navLinks) return;

  mobileToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    mobileToggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when clicking any link
  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (!mobileToggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 3. TYPING EFFECT IN HERO
 */
function initTypingEffect() {
  const typingElement = document.getElementById('hero-typing-role');
  if (!typingElement) return;

  const roles = [
    'Aspiring AI & ML Engineer',
    'First-Year Tech Explorer',
    'C / C++ & Python Developer',
    'Curious Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 45;
  const pauseTime = 1800;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeRole, delay);
  }

  typeRole();
}

/**
 * 4. ACTIVE NAVIGATION LINK ON SCROLL (ScrollSpy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * 5. SKILLS FILTERING
 */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 6. PROJECTS FILTERING
 */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 7. CONTACT FORM HANDLER
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('⚠️ Please fill in all required fields.', 'warning');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast('⚠️ Please enter a valid email address.', 'warning');
      return;
    }

    // Success response
    showToast('✨ Thank you! Your message has been received.', 'success');
    contactForm.reset();
  });
}

/**
 * 8. COPY EMAIL FEATURE
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailVal = document.getElementById('contact-email-val');

  if (!copyBtn || !emailVal) return;

  copyBtn.addEventListener('click', () => {
    const textToCopy = emailVal.getAttribute('data-email') || emailVal.textContent.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      showToast('📋 Email copied to clipboard!', 'info');
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    }).catch(() => {
      showToast('Failed to copy. Please copy manually.', 'warning');
    });
  });
}

/**
 * 9. BACK TO TOP BUTTON
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * UTILITY: TOAST NOTIFICATION
 */
function showToast(message, type = 'info') {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
