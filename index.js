const movediv = document.getElementById("movediv");
let user = document.getElementById("user");
let pass = document.getElementById("pass");

function hide() {
    const originalDiv = document.querySelector(".register");
    originalDiv.style.display = "none";

    movediv.style.display = "block";
}

function login() {
    let checkuser = document.getElementById("loginUser").value;
    let checkpass = document.getElementById("loginPass").value;
    let result = document.getElementById("res");

    if (user.value === checkuser && pass.value === checkpass) {
        result.innerHTML = "Happy to see you";
    } else {
        result.innerHTML = "Username or password wrong";
    }
}
