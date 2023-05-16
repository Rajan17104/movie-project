let submitRef = document.getElementById("register-form");

let reg = [];

const handlesubmit = () =>{

let name = document.getElementById("name").value;
let Uemail = document.getElementById("email").value;
let Upasw = document.getElementById("password").value;
let date = document.getElementById("date").value;

console.log(name,Uemail,Upasw,date);

let localdata = JSON.parse(localStorage.getItem("Rarr"));

console.log(localdata);

if(localdata){
    localdata.push(Uemail,Upasw);
    localStorage.setItem("Rarr",JSON.stringify(localdata));
}else{
    reg.push(Uemail,Upasw);
    localStorage.setItem("Rarr",JSON.stringify(reg));
}


if(submitRef != ""){
    window.location = "../index.html"
}else{
    alert("Please Enter a Details");
}


// let key =localStorage.getItem(key) ;
// console.log(key);


event.preventDefault();

}

submitRef.addEventListener("submit",handlesubmit);

