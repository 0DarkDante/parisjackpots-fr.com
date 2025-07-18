document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.contact-overlay');
    const openButtons = document.querySelectorAll('.contact-link');
    const closeButton = document.querySelector('.contact-close');
    const form = overlay.querySelector('.contact-form');

    openButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('active');
      });
    });

    closeButton.addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    // Закрити, якщо клікнули поза формою (на оверлеї)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Merci pour votre message !');
      form.reset();
      overlay.classList.remove('active');
    });
  });