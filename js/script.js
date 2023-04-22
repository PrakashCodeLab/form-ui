// Get the form element
const form = document.querySelector('.form__card');

// Get the form inputs
const emailInput = document.getElementById('email');
const passcodeInput = document.getElementById('passcode');

// Listen for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting
  
  // Check if the email and password fields are not empty
  if (emailInput.value.trim() === '' || passcodeInput.value.trim() === '') {
    alert('Please enter your email and password.'); // Show an error message
  } else {
    // Submit the form
    
    console.log('form submitted')
    
  }
});
