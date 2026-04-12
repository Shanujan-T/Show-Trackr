let users = [
    {email:"user1@gmail.com", password:"12345"},
    {email:"user2@gmail.com", password:"12345"},
    {email:"user3@gmail.com", password:"12345"},
    {email:"user4@gmail.com", password:"12345"},
    {email:"user5@gmail.com", password:"12345"}
];

function loginButton() {
    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;
 
    if (email.includes("@") && email.includes(".") && password){
        alert("Login Successful");
    } else {
        alert("Login Failed")
    }
}

function redirectSignup() {
    window.location.href = "signup.html";
}