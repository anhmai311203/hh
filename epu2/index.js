document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        
        if (emailValue === '') {
            alert('Vui lòng nhập địa chỉ email.');
            return;
        }

        if (passwordValue === '') {
            alert('Vui lòng nhập mật khẩu.');
            return;
        }

        alert('Đăng nhập thành công!');
    });
});