document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const button = document.querySelector('.btn');

    button.addEventListener('click', function(event) {
        event.preventDefault(); 

       
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        
        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

        
    });
});