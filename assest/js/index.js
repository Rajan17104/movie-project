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
            }else if (value.email !== email) {
                    alert('Enter valid E-Mail id');
            } else if (value.pasw !== pasw) {
                    alert('Enter valid Password');
            }
        });

    }

    event.preventDefault();

}

submitRef.addEventListener("submit",handlesubmit); 