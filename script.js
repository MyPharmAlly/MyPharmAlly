// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      navbarMenu.classList.toggle('show');
    });
  }

  // Form validations for login, signup, prescription upload, contact forms
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();
      if (!email || !password) {
        e.preventDefault();
        alert('Please enter both email and password.');
      }
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      const fullname = signupForm.fullname.value.trim();
      const email = signupForm.email.value.trim();
      const password = signupForm.password.value.trim();
      const confirmPassword = signupForm.confirmPassword.value.trim();

      if (!fullname || !email || !password || !confirmPassword) {
        e.preventDefault();
        alert('Please fill in all the fields.');
        return;
      }
      if (password.length < 6) {
        e.preventDefault();
        alert('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match.');
        return;
      }
    });
  }

  const prescriptionForm = document.getElementById('prescriptionForm');
  if (prescriptionForm) {
    prescriptionForm.addEventListener('submit', e => {
      const fileInput = prescriptionForm.prescriptionUpload;
      if (!fileInput.files.length) {
        e.preventDefault();
        alert('Please upload a prescription file.');
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields before submitting.');
      }
    });
  }
});
