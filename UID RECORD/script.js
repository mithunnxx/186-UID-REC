const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}

form.addEventListener('submit', function(e) {
  let valid = true;

  // Email validation
  if (!validateEmail(emailInput.value.trim())) {
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Phone validation
  if (!validatePhone(phoneInput.value.trim())) {
    phoneError.style.display = 'block';
    valid = false;
  } else {
    phoneError.style.display = 'none';
  }

  if (!valid) {
    e.preventDefault();
  }
});
