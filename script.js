const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projectCards = [...document.querySelectorAll('.project-card')];
const sections = [...document.querySelectorAll('main section[id]')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function setMenu(open) {
  siteNav.classList.toggle('is-open', open);
  menuToggle.classList.toggle('is-active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenu(!siteNav.classList.contains('is-open'));
});

navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -45px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
  revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-42% 0px -50%', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

document.querySelectorAll('.gallery-thumb').forEach((button) => {
  button.addEventListener('click', () => {
    const caption = button.dataset.caption || 'Project screenshot';
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.showModal();
  });
});

function closeLightbox() {
  lightbox.close();
  lightboxImage.removeAttribute('src');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener('close', () => lightboxImage.removeAttribute('src'));

document.getElementById('currentYear').textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
if (hero && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    hero.style.setProperty('--pointer-x', `${x}px`);
    hero.style.setProperty('--pointer-y', `${y}px`);
    const orb = hero.querySelector('.hero-orb');
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
}
