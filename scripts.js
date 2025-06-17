document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting immediately

  // Get input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  // Error message element
  const errorMessage = document.getElementById('error-message');
  
  // Validate the password match
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return; // Exit the function if there's an error
  }

  // Validate that fields are not empty
  if (username === "" || email === "" || password === "") {
    errorMessage.textContent = "Please fill out all fields!";
    return;
  }

  // Clear the error message and simulate a successful form submission
  errorMessage.textContent = "";
  alert("Form submitted successfully!");

  // You can add more logic here, like sending data to the server using fetch or AJAX
});
