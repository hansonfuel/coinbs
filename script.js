document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
    const emailInput = document.getElementById('email');
    const continueBtn = document.querySelector('.continue-btn');

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        // Add your email validation logic here
        console.log('Email submitted:', email);
    });

    // Button click handlers for alternative sign-ins
    document.querySelectorAll('.signin-btn').forEach(button => {
        button.addEventListener('click', () => {
            const signinMethod = button.classList[1];
            console.log(`Signin with ${signinMethod}`);
            // Add your signin method logic here
        });
    });

    // Input focus and blur effects
    emailInput.addEventListener('focus', () => {
        emailInput.parentElement.style.border = '1px solid #0052ff';
    });

    emailInput.addEventListener('blur', () => {
        emailInput.parentElement.style.border = '1px solid #e0e0e0';
    });
});document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.querySelector('.continue-btn');
    const emailInput = document.getElementById('email');

    continueBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value;

        // Add your validation logic here
    });
});
