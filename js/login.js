var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        console.log('username', username);
        console.log('password', password);
        if (username === 'jokawaki' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User not found!';
        errorBox.style = 'display: block';
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
