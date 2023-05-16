let submitRef = document.getElementById("login-form");

const handlesubmit = () =>{

    let email= document.getElementById("email").value;
    let pasw = document.getElementById("password").value;

    console.log(email , pasw);

    if(email=== 'abc@gmail.com' && pasw=== '123'){
        alert("Admin page login successfully");
        window.location = "../admin/adhome-page.html";
    }
    // else if(email !== 'abc@gmail.com'){
    //     alert("Invaild E-mail");
    // }else if(pasw !== '125'){
    //     alert("Invaild Password");
    // }

    // if(email=== 'abc@gmail.com' && pasw=== '123'){
    //     alert("Admin page login successfully");
    //     window.location = "../admin/adhome-page.html";
    // }else if(email === email){
    //     window.location = "../user/userhome-page.html"
    // }else if(pasw === pasw){
    //     window.location = "../user/userhome-page.html"
    // }


    // if("Rarr" === email && "Rarr" === pasw){
    //     window.location = "../user/userhome-page.html"
    // }else{
    //     alert("sorry");
    // }

    // let localdata = JSON.parse(localStorage.getItem("Rarr"));

    // localdata.map((value) => {
    //     if (value.Uemail === email.value && value.Upasw === pasw.value) {
    //         // alert('user Login successfully');
    //         window.location = "../user/userhome-page.html"
    //     } else if (value.Uemail !== email.value) {
    //         alert('Enter valid Email Id');
    //     } else if (value.Upasw !== pasw.value) {
    //         alert('Enter valid Password');
    //     }
    // })

   
    event.preventDefault();

}

submitRef.addEventListener("submit",handlesubmit);