var email = document.querySelector("#email");
var password = document.querySelector("#password");
var login = document.querySelector("#login");
var incorrect = document.querySelector("#incorrect");

var welcomeMsg = document.querySelector("#welcomeMsg");


var userEmail = localStorage.getItem("email");
var userPassword = localStorage.getItem("password");
var username = localStorage.getItem("name");


welcomeMsg.innerHTML += username;

function CheckAccount() {

if (email.value == userEmail && password.value == userPassword) {
    incorrect.classList.add("d-none")
    redirectLogin()
    
} else {
    incorrect.classList.remove("d-none")
}


}

function redirectLogin () {
    setTimeout(myURL, 500);

 }
 function myURL() {
    document.location.href = '../home.html';
 }