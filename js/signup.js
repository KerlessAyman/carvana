// Initialization for Email.js with your public key
emailjs.init('EDYoDyEDBmFKbv7MX'); // Redeem YOUR_PUBLIC_KEY with your public key

// Get the item for the form
const form = document.getElementById('registerForm');

// Add an event to submit the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect data from fields
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    
    const gender = document.querySelector('input[name="Gender"]:checked')?.value; // Get the specific sex
    const License = document.getElementById('License-Number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Check if your password matches
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Prepare data to send to Email.js
    const params = {
        fname: fname,
        mname: mname,
        lname: lname,
        email: email,
       
        gender: gender,
        License: License,
        password: password
    };

    // Send email using Email.js
    emailjs.send('service_zsc7371', 'template_pq3lq2g', params)
        .then(function(response) {
            alert('Registration Successful! Email Sent');
            console.log('Successful:', response);
        }, function(error) {
            alert('An error occurred while sending the email. Try again.');
            console.error('ERROR:', error);
        });
});