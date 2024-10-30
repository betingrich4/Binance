// Password visibility toggle for signup form
const toggleSignupPassword = document.getElementById('toggle-signup-password');
const signupPasswordField = document.getElementById('signup-password');

toggleSignupPassword.addEventListener('click', () => {
    const type = signupPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    signupPasswordField.setAttribute('type', type);
    toggleSignupPassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Password confirmation validation
const signupForm = document.getElementById('signup-form');
const confirmPasswordField = document.getElementById('confirm-password');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = signupPasswordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
    } else {
        alert('Account created successfully! Redirecting to login...');
        // Redirect to login page or process signup (backend integration needed here)
        window.location.href = 'login.html';
    }
});
