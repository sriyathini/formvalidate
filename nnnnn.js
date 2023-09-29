const  nameError = document.getElementById("error1");
const  emailError = document.getElementById("error2");
const  passwordError = document.getElementById("error3");
const  cpasswordError = document.getElementById("error4");
const  numberError = document.getElementById("error5");
const  male = document.querySelector('.male');
const  female = document.querySelector('.female');
const  genderError = document.getElementById("error6");
//const  html = document.querySelector('.html');
//const  css = document.querySelector('.css');
const  courseError = document.getElementById("error7");
const  submitError = document.getElementById("error8");

function validateusername(){
 let username = document.getElementById("username").value;
if(username===""){
        nameError.innerHTML="enter the username";
        return false;
    }
    if(!username.match(/^[a-zA-z]+$/)){
        nameError.innerHTML="enter the valid username";
        return false;
    }
    nameError.innerHTML="";
    return true;
}

function validateEmail(){
    let email=document.getElementById("email").value;
    if(email===""){
        emailError.innerHTML="enter the email";
        return false;
    }
    if(!email.match("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
        emailError.innerHTML="enter the valid email";
        return false;
    }
    emailError.innerHTML=""
    return true;

}

function validatepassword(){
    let password=document.getElementById("password").value;
    if(password===""){
        passwordError.innerHTML="enter the password";
        return false;
    }
    if(password.length<6){
        passwordError.innerHTML="enter the maximum six charectets";
        return false;
    }
    passwordError.innerHTML=""
    return true;

}

function validatecpassword(){
    let cpassword=document.getElementById("cpassword").value;
    let password=document.getElementById("password").value;
    if(cpassword===""){
        cpasswordError.innerHTML="enter the password";
        return false;
    }
    if(cpassword !== password){
        cpasswordError.innerHTML="enter the same passsword";
        return false;
    }
    passwordError.innerHTML=""
    return true;

}

function validatenumber(){
    let number=document.getElementById("number").value;
    if(number===""){
        numberError.innerHTML="enter the mobile number";
        return false;
    }
    if(number.length<10){
        numberError.innerHTML="enter the valid mobile number";
        return false;
    }
    numberError.innerHTML=""
    return true;

}

function validategender(){
    //let m = document.querySelector('.male');
    //let f = document.querySelector('.female');
    if(!male.checked && !female.checked){
        genderError.innerHTML="please select anyone male or female";
        return false;
    }
    genderError.innerHTML=""
    return true;
}


function validatecourse(){
    let html= document.getElementById("html").checked;
    let css= document.getElementById("css").checked;
   if((html == "")&&(css == "")){
        courseError.innerHTML = "please select the any one";
        return false;
    }
    courseError.innerHTML = "";
    return true;
}
/*
function mm(){
    var checkbox = document.getElementById('mm');
    var error7 = document.getElementById('error7');
    if(checkbox.checked==true){
        Text.style.display=block;
    }
    else{
        Text.style.display ="any one";
    }
}*/

function validateform(){
    if(validateusername() || validateEmail() || validatepassword() || validatecpassword() ||validatenumber() || validategender() ||validatecourse()){
        submitError.style.display=block;
        submitError.innerHTML="enter the details";
        return false;
    }
}