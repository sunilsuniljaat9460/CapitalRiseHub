document.addEventListener('DOMContentLoaded', function () {
  // Dark Mode Toggle
  const toggle = document.getElementById('darkModeToggle');
  toggle?.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
  });

  // Loading Spinner
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      loader.style.display = 'none';
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg', 'bg-white/80', 'backdrop-blur-md');
      } else {
        navbar.classList.remove('shadow-lg', 'bg-white/80', 'backdrop-blur-md');
      }
    });
  }

  // Subscribe Form
  const form = document.querySelector('#subscribe-form');
  const emailInput = form?.querySelector('input[type="email"]');
  const messageBox = document.querySelector('#form-message');
  const submitBtn = form?.querySelector('button');

  form?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput?.value.trim();
    if (!emailInput || !messageBox || !submitBtn) return;

    // Reset message
    messageBox.textContent = '';
    messageBox.className = 'text-sm mt-2 text-center';

    if (email === '') {
      messageBox.textContent = "⚠️ Please enter your email address.";
      messageBox.classList.add('text-yellow-600');
      emailInput.focus();
    } else if (!validateEmail(email)) {
      messageBox.textContent = "❌ Invalid email format.";
      messageBox.classList.add('text-red-600');
    } else {
      messageBox.textContent = "✅ Thank you for subscribing!";
      messageBox.classList.add('text-green-600');
      emailInput.value = '';
      submitBtn.disabled = true;
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu');

  if (menuBtn && menuList) {
    menuBtn.addEventListener('click', () => {
      menuList.classList.toggle('hidden');
    });
  }
});
