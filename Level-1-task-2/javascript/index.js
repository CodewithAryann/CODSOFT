// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle mobile menu with smoother animation
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Add animation for smoother transition
    navbar.style.transition = 'transform 0.3s ease-in-out';
});

// Form validation with inline error messages and regular expressions
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formError = document.getElementById('form-error');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate name
    if (!validateName(nameInput.value.trim())) {
        showError(nameInput, 'Please enter a valid name (letters and spaces only)');
        return;
    } else {
        removeError(nameInput);
    }

    // Validate email format
    if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        return;
    } else {
        removeError(emailInput);
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        return;
    } else {
        removeError(messageInput);
    }

    // If all fields are filled and valid, submit the form
    this.submit();
});

function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.textContent = message;
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

// Custom scrollbar styling
document.addEventListener('DOMContentLoaded', () => {
    const scrollbarStyles = `
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    `;
    const style = document.createElement('style');
    style.innerHTML = scrollbarStyles;
    document.head.appendChild(style);
});

// Interactive animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop - window.innerHeight / 1.5) {
            section.classList.add('animate');
        }
    });
});
