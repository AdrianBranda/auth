document.addEventListener('DOMContentLoaded', function() {
    const authContainer = document.getElementById('authContainer');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        authContainer.classList.add('active');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        authContainer.classList.remove('active');
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                window.location.href = 'dashboard.html';  
            } else {
                alert(data.error || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor');
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch('/auth/register', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registro exitoso. Por favor, inicia sesión.');
                authContainer.classList.remove('active');
            } else {
                alert(data.error || 'Error al registrarse');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor');
        }
    });
    if (showRegister && showLogin && authContainer) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            authContainer.classList.add('active');
        });

        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            authContainer.classList.remove('active');
        });
    } 
});