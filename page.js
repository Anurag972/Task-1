document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const recipient = document.getElementById('recipient').value;
        const account = document.getElementById('account').value;
        const amount = document.getElementById('amount').value;

      
        const paymentData = {
            recipient: recipient,
            account: account,
            amount: amount
        };
        localStorage.setItem('paymentData', JSON.stringify(paymentData));

    
        console.log('Payment Data:', paymentData);

        alert('Payment transfer is successful!');

        document.getElementById('payment-form').reset();
    });

   
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

      
        const contactData = {
            name: name,
            email: email,
            message: message
        };
        localStorage.setItem('contactData', JSON.stringify(contactData));

        
        console.log('Contact Data:', contactData);

        alert('Thank you for contacting us!');

     
        document.getElementById('contact-form').reset();
    });

   
    document.querySelector('.hero button').addEventListener('click', function() {
        window.location.href = '#payment';
    });

  
    function adjustLayout() {
        const heroSection = document.querySelector('.hero');
        if (window.innerWidth < 768) {
            heroSection.style.padding = '20px';
        } else {
            heroSection.style.padding = '50px';
        }
    }

    window.addEventListener('resize', adjustLayout);
    adjustLayout(); 
});





    


