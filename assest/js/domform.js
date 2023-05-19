let regfrm = document.getElementById("regfrm");
let arr = [];

const formadd = () => {

    console.log("formadd");

    // let formdata = document.getElementById("formdata");
    let innerdiv = document.createElement("div");

    let rno = Math.floor(Math.random() * 1000);
    innerdiv.setAttribute("id", "row - " + rno);

    let fname = document.createElement("input");
    fname.setAttribute("placeholder", "ENTER FIRST NAME");
    fname.setAttribute("name", "fname");

    let lname = document.createElement("input");
    lname.setAttribute("placeholder", "ENTER LAST NAME");
    lname.setAttribute("name", "lname");

    let addbtn = document.createElement("button");
    let addtxt = document.createTextNode("+");

    addbtn.appendChild(addtxt);
    addbtn.setAttribute("type", "button");
    addbtn.setAttribute("onclick", "formadd()");



    let removebtn = document.createElement("button");
    let removetxt = document.createTextNode("-");
    removebtn.appendChild(removetxt);
    removebtn.setAttribute("type", "button");
    removebtn.setAttribute("onclick", "formremove(" + rno + ")");


    innerdiv.appendChild(fname);
    innerdiv.appendChild(lname);
    innerdiv.appendChild(addbtn);
    innerdiv.appendChild(removebtn);
    formdata.appendChild(innerdiv);



    event.preventDefault();

}

const formremove = (id) => {

    let rnoref = document.getElementById("row - " + id);
    rnoref.remove();

    let fname = document.getElementsByName("fname");
    let lname = document.getElementsByName("lname");

    for (let i = 0; i < fname.length; i++) {
        arr.splice({ fname: fname[i ,0].value, lname: lname[i,0].value })
    }
    console.log(arr);

    event.preventDefault();
}

const handlesubmit = () => {

    // console.log("submit");
    let fname = document.getElementsByName("fname");
    let lname = document.getElementsByName("lname");


    
        for (let i = 0; i < fname.length; i++) {
            arr.push({ fname: fname[i].value, lname: lname[i].value })
        }
    
    
    console.log(arr);



    event.preventDefault();
}


regfrm.addEventListener("submit", handlesubmit)