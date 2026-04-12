user = [];

function signupButton() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let user = {name, email, password};

    console.log(user);

    alert("Signup Completed");

    redirectLogin();
}

function redirectLogin() {
    window.location.href = "login.html";
}

function validateName() {
    let name = document.getElementById("signupName").value;
    
    if (name.length <= 5 || /[^a-zA-Z]/.test(name)) {
        document.getElementById("signupnameError").innerText = "Name should not contain numbers or symbols and must be larger than 5 charaters ";
    } else {
        document.getElementById("signupnameError").innerText = "";
    }
}

function validateEmail() {
    let email = document.getElementById("signupEmail").value.trim();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
        document.getElementById("signupemailError").innerText = "Enter valid email";
    } else {
        document.getElementById("signupemailError").innerText = "";
    }
}

function validatePassword() {
    let password = document.getElementById("signupPassword").value.trim();
    let pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8}$/;

    if (!password.match(pattern)) {
        document.getElementById("signuppasswordError").innerText = "Password must be 8 characters with numbers,symbols and  one capital case";
    } else {
        document.getElementById("signuppasswordError").innerText = "";
    }
}

