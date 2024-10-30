// Toggle password visibility
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    // Check the current type of password input
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Update toggle button text
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Form validation (basic)
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for testing
    const username = document.getElementById('username').value.trim();
    const password = passwordField.value.trim();

    if (username === '' || password === '') {
        alert('Please enter both a username and password.');
    } else {
        // Here you would typically send data to the backend
        alert('Logging in...');
    }
});
