var usernameInput = document.querySelector(".usernameinput");
var emailInput = document.querySelector(".emailinput");

var username = document.querySelector(".username");
var email = document.querySelector(".email");

var submit = document.querySelector(".submitbutton");

function change(){
    username.innerHTML = usernameInput.value;
    email.innerHTML = emailInput.value;
}