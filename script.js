document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const continueBtn = document.querySelector('.continue-btn');

    emailInput.addEventListener('focus', function() {
        this.style.border = '1px solid #344afb';
        this.parentElement.style['box-shadow'] = '0 0 0 3px rgba(52, 74, 171, 0.1)';
    });

    emailInput.addEventListener('blur', function() {
        this.style.border = '1px solid #e0e0e0';
        this.parentElement.style['box-shadow'] = 'none';
    });

    emailInput.addEventListener('input', function() {
        if (this.value.length > 0 && this.value.includes('@')) {
            continueBtn.style.backgroundColor = '#3183CE';
        } else {
            continueBtn.style.backgroundColor = '#4297E1';
        }
    });

    continueBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Here you would typically make an API call
        console.log('Email submitted:', email);
    });
});
