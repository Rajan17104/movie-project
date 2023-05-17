let cinemaFormRef = document.getElementById("cinemaForm");

let admin = [];

let uid = null;

let update = false;

const handleCinema = () => {

    document.getElementById("data").style.display = "block";

    event.preventDefault();

}

const handleCinemaData = () => {

    let cName = document.getElementById("cinemaName").value;
    let clocation = document.getElementById("cinemalocation").value;
    let cfacilites = document.getElementById("cinemafacilites").value;
    // console.log(exeName,exeCost);

    let rno = Math.floor(Math.random() * 100);
    // console.log(random);

    let trref = document.createElement("tr");
    trref.setAttribute("id", "row" + rno);

    let td1ref = document.createElement("td");
    let td2ref = document.createElement("td");
    let td3ref = document.createElement("td");
    let td4ref = document.createElement("td");

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleUpdate(" + rno + ")");

    let button2 = document.createElement("button");
    button2.setAttribute("onclick", "handleRemove(" + rno + ")");

    let td1Tax = document.createTextNode(cName);
    let td2Tax = document.createTextNode(clocation);
    let td3Tax = document.createTextNode(cfacilites);
    let btn1 = document.createTextNode("Update");
    let btn2 = document.createTextNode("Remove");

    td4ref.appendChild(button1);
    td4ref.appendChild(button2);

    td1ref.appendChild(td1Tax);
    td2ref.appendChild(td2Tax);
    td3ref.appendChild(td3Tax)
    button1.appendChild(btn1);
    button2.appendChild(btn2);

    trref.appendChild(td1ref);
    trref.appendChild(td2ref);
    trref.appendChild(td3ref);
    trref.appendChild(td4ref);

    let cinemaFormRef = document.getElementById("Tabledata");

    document.getElementById("table").style.display = "block"

    cinemaFormRef.appendChild(trref);

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if (localdata) {
        localdata.push({
            id: rno,
            name: cName,
            location: clocation,
            facilites: cfacilites
        });
        localStorage.setItem("cinema", JSON.stringify(localdata));
    } else {
        admin.push({
            id: rno,
            name: cName,
            location: clocation,
            facilites: cfacilites
        });
        localStorage.setItem("cinema", JSON.stringify(admin));
    }



    event.preventDefault();

}


const handleRemove = (rno) => {
    // console.log(rno);
    let trref = document.getElementById("row" + rno);

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    // console.log(trref);

    trref.remove();

    localdata.map((v, i) => {
        if (v.id === rno) {
            localdata.splice(i,1);
            localStorage.setItem("cinema", JSON.stringify(localdata));
        }
    });
  
    console.log(localdata);

    event.preventDefault();
};


const handleUpdate = (rno) =>{

    update = true;

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    let Fdata = localdata.filter((a,i) => a.id === rno);

    // console.log(Fdata);

    let upName= Fdata[0].name;
    let upLocation = Fdata[0].location;
    let upFacilites = Fdata[0].facilites;

    document.getElementById("cinemaName").value = upName;
    document.getElementById("cinemalocation").value = upLocation;
    document.getElementById("cinemafacilites").value = upFacilites;

    
    uid = rno;


    // console.log('sdfd');
    event.preventDefault();

}

const handleDes = () =>{

    if(update){
        handleupdateData();
    }else{
        handleCinemaData();
    }

    event.preventDefault();

}

const handleupdateData = () =>{

    console.log("Update call");
    
    let localdata = JSON.parse(localStorage.getItem("cinema"));

   let newName = document.getElementById("cinemaName").value;
   let newLocation = document.getElementById("cinemalocation").value;
   let newFacilites = document.getElementById("cinemafacilites").value;

    let newname = newName;
    let newlocation = newLocation;
    let newfacilites = newFacilites;

   console.log(newname , newlocation, newfacilites);

//    uid = rno;

    let uData = localdata.map((a) => {
        if(a.id === uid){
            return{
                id:uid,
                name:newname,
                location:newlocation,
                facilites:newfacilites
            }
        }else{
            return a;
        }

    })
    

    console.log(uData);

    localStorage.setItem("cinema", JSON.stringify(localdata));

    localdata[uid]= newName;
 
    update = false;



    let tr =document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname;
    tr.children[1].innerHTML = newlocation;   
    tr.children[2].innerHTML = newfacilites;
    

    event.preventDefault();

}

// cinemaFormRef.addEventListener("submit",handleinsert);
cinemaFormRef.addEventListener("submit", handleDes);

