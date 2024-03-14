document.getElementById('register-form').addEventListener('submit', function(event) { // listner event for login form
    event.preventDefault();

    var username = document.getElementById('username').value; // get user id from input field
    var password = document.getElementById('password').value;

    alert('New account created, redirecting to login page.');
    window.location.href = 'loginpage.html'; // redirect to account page
});