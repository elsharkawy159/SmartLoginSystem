var signUpname = document.getElementById("signUpname");
var signUpEmail = document.getElementById("signUpEmail");
var termscheck = document.getElementById("termscheck");
var signUpbtn = document.getElementById("signUpbtn");
var success = document.querySelector("#success")

var nameLenth;
var validRegex;

function signUp() {
    ValidateName(signUpname)
    ValidateEmail(signUpEmail) //Email Validation

    
}

//Name Validation
function ValidateName(signUpname) {

    var nameLenth = signUpname.value.length;

    if (nameLenth <= 2) {
        document.querySelector("#namecheck").classList.remove("d-none");
    }else{
        ValidateEmail(signUpEmail) //Email Validation
        document.querySelector("#namecheck").classList.add("d-none");
    }
    }

    
// Email Validation 
function ValidateEmail(signUpEmail) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (signUpEmail.value.match(validRegex)){
        ValidateCheckbox(termscheck) // Sign up
        document.querySelector("#emailcheck").classList.add("d-none");
    }else{

        document.querySelector("#emailcheck").classList.remove("d-none");

    }
    }


//Checkbox Validation
function ValidateCheckbox(termscheck) {

    if (termscheck.checked == false) { //Checkbox Validation
        document.querySelector("#TandC").classList.add("text-danger" , "fw-bold");

    }else{
        
        localStorage.setItem("name", signUpname.value);
        localStorage.setItem("email", signUpEmail.value);
        localStorage.setItem("password", signUpPassword.value);
        success.classList.remove("d-none")
        document.querySelector("#TandC").classList.remove("text-danger" , "fw-bold");
        redirect ()
    }
    }

    function redirect () {
        setTimeout(myURL, 2000);
        var redirect = document.getElementById("redirect");
        redirect.classList.remove("d-none")
     }
     function myURL() {
        document.location.href = '../index.html';
     }