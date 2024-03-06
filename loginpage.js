document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('You are logged in.');
        window.location.href = 'Website.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

});