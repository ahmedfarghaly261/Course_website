
// Hardcoded admin and user credentials
const adminUsername = 'admin@gmail';
const adminPassword = '123';
const userUsername = 'user@gmail';
const userPassword = '321';

function valid() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === adminUsername && passwordInput === adminPassword) {
        // Show admin panel
        window.location.href = "/admin/admin.html"
    } else if (usernameInput === userUsername && passwordInput === userPassword) {
        // Show user panel
        window.location.href = "/index.html"
    } else {
        alert('Invalid username or password');
    }
}