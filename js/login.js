const users = [
    {email:"user1@gmail.com", password:"12345"},
    {email:"user2@gmail.com", password:"12345"},
    {email:"user3@gmail.com", password:"12345"},
    {email:"user4@gmail.com", password:"12345"},
    {email:"user5@gmail.com", password:"12345"}
];

function loginButton() {
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;

    let validation = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password){
            validation = true;
            break;
        }
    }
    if (validation){
        alert("Login Successful");
    } else {
        alert("Login Failed")
    }
}

function redirectSignup() {
    window.location.href = "signup.html";
}