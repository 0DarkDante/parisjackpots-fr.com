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
  

// cookie

document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.querySelector('.cookie-consent');
  const btnApprove = document.querySelector('.btn-approve');
  const btnDecline = document.querySelector('.btn-decline');
  const cookieKey = 'user_cookie_consent';

  // Перевіряємо чи користувач вже вибрав
  const consent = localStorage.getItem(cookieKey);

  if (!consent) {
    // Показуємо попап
    setTimeout(() => {
      cookiePopup.classList.add('active');
    }, 800); // затримка для кращого UX
  }

  // Обробка кнопки "Прийняти"
  btnApprove.addEventListener('click', () => {
    localStorage.setItem(cookieKey, 'approved');
    hidePopup();
  });

  // Обробка кнопки "Відхилити"
  btnDecline.addEventListener('click', () => {
    localStorage.setItem(cookieKey, 'declined');
    hidePopup();
  });

  function hidePopup() {
    cookiePopup.classList.remove('active');
  }
});

// age

document.addEventListener('DOMContentLoaded', () => {
  const ageGate = document.querySelector('.age-gate');
  const confirmBox = document.querySelector('.age-gate__confirm');
  const deniedBox = document.querySelector('.age-gate__denied');
  const btnConfirm = document.querySelector('.btn-confirm');
  const btnDeny = document.querySelector('.btn-deny');
  const storageKey = 'age_verification_passed';

  // Якщо користувач вже підтвердив вік раніше — приховуємо перевірку
  if (localStorage.getItem(storageKey) === 'true') {
    ageGate.style.display = 'none';
  }

  btnConfirm.addEventListener('click', () => {
    localStorage.setItem(storageKey, 'true');
    ageGate.style.display = 'none';
  });

  btnDeny.addEventListener('click', () => {
    confirmBox.style.display = 'none';
    deniedBox.classList.remove('hidden');
  });
});
