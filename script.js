// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
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
            
            // Close modal
            const modal = document.getElementById('contact-modal');
            modal.style.display = 'none';
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        })
        .catch(function(error) {
            alert('Sorry, there was an error sending your message. Please try again.');
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        });
    });
}); 