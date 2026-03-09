// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// Form validation for enquiry page
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const fields = ['name', 'phone', 'email', 'date', 'time', 'service', 'message'];
        
        fields.forEach(field => {
            const input = document.getElementById(field);
            const formGroup = input.closest('.form-group');
            
            if (!input.value.trim()) {
                formGroup.classList.add('error');
                isValid = false;
            } else {
                formGroup.classList.remove('error');
            }
        });
        
        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailRegex.test(email.value)) {
            email.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        // Phone validation (simple)
        const phone = document.getElementById('phone');
        const phoneRegex = /^[\d\s\+\-]{10,}$/;
        if (phone.value && !phoneRegex.test(phone.value)) {
            phone.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            alert('Form submitted successfully! We will contact you shortly.');
            enquiryForm.reset();
        } else {
            alert('Please fill all required fields correctly.');
        }
    });
}

// Sticky navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});