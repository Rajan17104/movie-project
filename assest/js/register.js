let submitRef = document.getElementById("register-form");

const handlesubmit = () =>{

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pasw = document.getElementById("password").value;
let date = document.getElementById("date").value;

console.log(name,email,pasw,date);

 window.location = "../user/userhome-page.html";

event.preventDefault();

}


submitRef.addEventListener("submit",handlesubmit);