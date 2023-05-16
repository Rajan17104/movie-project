let submitRef = document.getElementById("login-form");


const handlesubmit = () =>{

    let email= document.getElementById("email").value;
    let pasw = document.getElementById("password").value;

    console.log(email , pasw);

    if(email=== 'abc@gmail.com' && pasw=== '123'){
        alert("Admin page login successfully");
        window.location = "../admin/adhome-page.html";
    }else if(email !== 'abc@gmail.com'){
        alert("Invaild E-mail");
    }else if(pasw !== '125'){
        alert("Invaild Password")
    }

    event.preventDefault();

}

submitRef.addEventListener("submit",handlesubmit);