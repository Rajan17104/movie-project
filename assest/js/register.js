let submitRef = document.getElementById("register-form");

// let reg = [];

const handlesubmit = () =>{

let username = document.getElementById("name").value;
let useremail = document.getElementById("email").value;
let userpasw = document.getElementById("password").value;
let userdate = document.getElementById("date").value;

console.log(username,useremail,userpasw,userdate);

let rno = Math.floor(Math.random()*1000);

let localdata = JSON.parse(localStorage.getItem("user"));

console.log(localdata);

if(localdata){
    localdata.push({
        id:rno,
        name:username,
        email:useremail,
        password:userpasw,
        date:userdate
    });
    localStorage.setItem("user",JSON.stringify(localdata));
}else{
    localStorage.setItem("user",JSON.stringify([{
        id:rno,
        name:username,
        email:useremail,
        password:userpasw,
        date:userdate
    }]));
}


if(submitRef != ""){
    window.location = "../user/index.html"
}else{
    alert("Please Enter a Details");
}


// let key =localStorage.getItem(key) ;
// console.log(key);


event.preventDefault();

}

submitRef.addEventListener("submit",handlesubmit);

