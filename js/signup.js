let users = [];

function signupButton() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isNameValid || !isEmailValid || !isPasswordValid) {
        return;
    }

    users.push({name, email, password});

    window.alert("Signup Completed");

    redirectLogin();
}

function redirectLogin() {
    window.location.href = "login.html";
}

function validateName() {
    const name = document.getElementById("signupName").value.trim();
    const message = document.getElementById("signupnameError");

    const nameRegex =  /^[A-Za-z]{6,}$/;

    if (!nameRegex.test(name)) {
        message.innerText = "The Name should not contain numbers or symbols and must be larger than 5 charaters";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("signupEmail").value.trim();
    const message = document.getElementById("signupemailError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        message.innerText = "Invalid email format";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("signupPassword").value.trim();
    const message = document.getElementById("signuppasswordError");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8}$/;

    if (!passwordRegex.test(password)) {
        message.innerText = "Password must be exactly 8 charaters with uppercase, lowercase, number & symbol.";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}