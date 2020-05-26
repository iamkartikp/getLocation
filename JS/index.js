const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username.value=='username' && password.value=='password') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid Login')
    }
})
