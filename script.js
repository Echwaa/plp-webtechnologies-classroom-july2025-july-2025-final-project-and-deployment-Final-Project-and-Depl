# JAVA SCRIPT 

// Image slider logic
const images = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
});

// Initialize slider
showSlide(currentIndex);

// Form validation logic
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill out all fields.';
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    form.reset();
  });
}
