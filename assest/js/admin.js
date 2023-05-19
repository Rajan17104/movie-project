let cinemaformRef = document.getElementById("cinemaForm")

let update = false;
let uid = null;

const handleinsert = () => {
    let cName = document.getElementById("cinemaName").value
    let cLocation = document.getElementById("cinemalocation").value
    let cFacilites = document.getElementById("cinemafacilites").value
    
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let rno = Math.floor(Math.random() * 10);

    if (localdata) {
        localdata.push({
            cid: rno,
            name: cName,
            location: cLocation,
            facilites: cFacilites
        });
        localStorage.setItem("cinema", JSON.stringify(localdata));
    } else {
        localStorage.setItem("cinema", JSON.stringify([{
            cid: rno,
            name: cName,
            location: cLocation,
            facilites: cFacilites
        }]));
      

    }

    handlecinemaData(cName, cLocation, cFacilites, rno);

    document.getElementById("table").style .display ='inline-block'

    event.preventDefault();
}

const handlecinemaData = (cName, cLocation, cFacilites, rno) => {

    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rno)

    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("onclick", "handleupdate(" + rno + ")")

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleRemove(" + rno + ")")
    let tdval = document.createTextNode(cName);
    let tdval1 = document.createTextNode(cLocation)
    let tdval2 = document.createTextNode(cFacilites)

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata")


    td.appendChild(tdval);
    tr.appendChild(td);

    td1.appendChild(tdval1);
    tr.appendChild(td1);

    td2.appendChild(tdval2);
    tr.appendChild(td2);


    button.appendChild(btn1);
    button1.appendChild(btn2);
    td3.appendChild(button);
    td3.appendChild(button1);
    tr.appendChild(td3)

    tableref.appendChild(tr);

    // event.preventDefault();
}


const handleRemove = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let trref = document.getElementById("row" + rno)
    trref.remove()

    localdata.map((v, i) => {
        if (v.cid === rno) {
            localdata.splice(i, 1);
            localStorage.setItem("cinema", JSON.stringify(localdata));
        }
    })
  
    event.preventDefault();
}



const handleupdate = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let Fdata = localdata.filter((v, i) => v.cid === rno)

    document.getElementById("cinemaName").value = Fdata[0].name
    document.getElementById("cinemalocation").value = Fdata[0].location
    document.getElementById("cinemafacilites").value = Fdata[0].facilites

    update = true;
     uid = rno;

    //  event.preventDefault();
}


const handledes = () => {
    if(update){
        handleupdateData(); 
    }else{
        handleinsert();
    }
    event.preventDefault();
}



const handleupdateData = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
   
    let newname = document.getElementById("cinemaName").value;
    let newlocation= document.getElementById("cinemalocation").value;
    let newfacilites = document.getElementById("cinemafacilites").value;
   
    let uData = localdata.map((a) => {
        console.log(a);
        if (a.cid === uid) {
            return {
                cid: uid,
                name: newname,
                location: newlocation,
                facilites: newfacilites
            }
        } else {
            return a;
        }
    })
    localdata[uid]=uData
    localStorage.setItem("cinema", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newlocation
    tr.children[2].innerHTML = newfacilites

   event.preventDefault();


}


const handleonload = () =>{
   
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if(localdata){
        localdata.map((a) =>{
            handlecinemaData(a.name , a.location,  a.facilites ,a.id);

            document.getElementById("table").style .display ='inline-block'
        })
    }


}


window.onload=handleonload();

cinemaformRef.addEventListener("submit", handledes)