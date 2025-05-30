// Loading behavior
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formStatusMessage = document.getElementById('form-status-message');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // Function to display error message
    function displayError(element, message) {
        element.textContent = message;
        element.style.color = 'red'; // Style for error messages
    }
    
    // Function to clear error message
    function clearError(element) {
        element.textContent = '';
    }
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors and status messages
        clearError(nameError);
        clearError(emailError);
        clearError(messageError);
        formStatusMessage.textContent = '';
        formStatusMessage.style.color = '';
        
        let isValid = true;
        
        // Validate inputs
        if (nameInput.value.trim() === '') {
            displayError(nameError, 'Name is required');
            isValid = false;
        }
        
        if (emailInput.value.trim() === '') {
            displayError(emailError, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailError, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            displayError(messageError, 'Message is required');
            isValid = false;
        }
        
        if (!isValid) {
            formStatusMessage.textContent = 'Please fix the errors above.';
            formStatusMessage.style.color = 'red';
            return; // Stop if validation fails
        }
        
        // Get form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        formStatusMessage.textContent = 'Sending your message...';
        formStatusMessage.style.color = 'orange';
        
        // Send email using EmailJS
        emailjs.send("hamza_portfolio_mail", "template_owp6fuj", {
            name: name,
            from_email: email,
            message: message,
            to_name: "Hamza Amir",
            to_email: "hamzaamir7651@gmail.com"
        })
        .then(function() {
            // Clear form
            contactForm.reset();
            
            // Close modal after a delay or provide a close button
            // For now, we'll just update the status message and clear inputs
            
            formStatusMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatusMessage.style.color = 'green';
            
            // Optional: Auto-close modal after a few seconds
            setTimeout(() => {
                const modal = document.getElementById('contact-modal');
                modal.style.display = 'none';
            }, 5000); // Close after 5 seconds
            
        }, function(error) {
            formStatusMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            formStatusMessage.style.color = 'red';
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            // Reset button state after a short delay to show status message
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1000); // Delay reset by 1 second
        });
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Active Navigation State
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 