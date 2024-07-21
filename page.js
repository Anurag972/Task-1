document.addEventListener('DOMContentLoaded', function() {
    // Payment form submission handler
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Payment transfer is successful!');
    });

    // Contact form submission handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });

    // Responsive adjustments
    function adjustLayout() {
        const heroSection = document.querySelector('.hero');
        if (window.innerWidth < 768) {
            heroSection.style.padding = '20px';
        } else {
            heroSection.style.padding = '50px';
        }
    }

    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Initial call
});
