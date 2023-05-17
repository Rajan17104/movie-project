let submitRef = document.getElementById("login-form");

const handlesubmit = () =>{

    let email= document.getElementById("email").value;
    let pasw = document.getElementById("password").value;
    let localdata = JSON.parse(localStorage.getItem("user"));

    console.log(email , pasw);

    if(email=== 'abc@gmail.com' && pasw=== '123'){
        alert("Admin page login successfully");
        window.location = "../admin/adhome-page.html";
    }else{
   

        localdata.map((value) => {
            if (value.email === email && value.password === pasw) {
                // alert('user Login successfully');
                window.location = "../user/userhome-page.html"
            }
        });
    
    }
    // else if(email !== 'abc@gmail.com'){
    //     alert("Invaild E-mail");
    // }else if(pasw !== '125'){
    //     alert("Invaild Password");
    // }


    // if("Rarr" === email && "Rarr" === pasw){
    //     window.location = "../user/userhome-page.html"
    // }else{
    //     alert("sorry");
    // }

   
   
    event.preventDefault();

}
// else if (value.email !== email) {
//     alert('Enter valid Email Id');
// } else if (value.pasw !== pasw) {
//     alert('Enter valid Password');
// }
submitRef.addEventListener("submit",handlesubmit);