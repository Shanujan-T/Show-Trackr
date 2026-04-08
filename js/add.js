function addShow() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message");
    
    let firstLetter = name[0];

    if (name === "") {
        message.innerText = "Please enter a TV Show name";
        message.style.border="2px solid red";
        message.style.backgroundColor="#d9dee5";

        setTimeout(function() {
        message.innerText = "" ;
        message.style.border="";
        message.style.backgroundColor="";
    }, 2000);
    }
    else if (!isNaN(firstLetter) || !firstLetter.match(/[a-zA-Z]/)) {
        message.innerText = "Invalid TV Show name";
        message.style.border="2px solid red";
        message.style.backgroundColor="#d9dee5";

        setTimeout(function() {
        message.innerText = "" ;
        message.style.border="";
        message.style.backgroundColor="";
    }, 2000);
    }

    else {
        message.innerText = name + "has been added";
        message.style.border="2px solid green";
        message.style.backgroundColor="#d9dee5";

        setTimeout(function() {
        message.innerText = "" ;
        message.style.border="";
        message.style.backgroundColor="";
    }, 2000);
    }

    
    

    clearInputs();
}

function clearInputs() {
    const name = document.getElementById("name").value="";
}