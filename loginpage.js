document.getElementById('login-form').addEventListener('submit', function(event) { // listner event for login form
    event.preventDefault();

    var username = document.getElementById('username').value; // get user id from input field
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') { // if statement to compare to string
        alert('You are logged in.');
        window.location.href = 'Website.html'; // redirect to account page
    } else { // if invalid username or password
        alert('Invalid username or password. Please try again.');
    }

});