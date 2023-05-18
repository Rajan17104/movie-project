let cinemaformRef = document.getElementById("cinemaForm")

let update = false;
let uid = null;
// let cinemaarr = []

const displaycinema = (cinemaname, cinemalocaton, cinemafacilites, cid) => {

    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+cid)

    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("onclick", "handleEdit(" + cid + ")")

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleremove(" + cid + ")")
    let tdvle = document.createTextNode(cinemaname);
    let tdvle1 = document.createTextNode(cinemalocaton)
    let tdvle2 = document.createTextNode(cinemafacilites)

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata")


    td.appendChild(tdvle);
    tr.appendChild(td);

    td1.appendChild(tdvle1);
    tr.appendChild(td1);

    td2.appendChild(tdvle2);
    tr.appendChild(td2);


    button.appendChild(btn1);
    button1.appendChild(btn2);
    td3.appendChild(button);
    td3.appendChild(button1);
    tr.appendChild(td3)

    tableref.appendChild(tr);
}
const handleEdit = (cid) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let updata = localdata.filter((v, i) => v.id === cid)

    document.getElementById("cinemaName").value = updata[0].name
    document.getElementById("cinemalocation").value = updata[0].locaton
    document.getElementById("cinemafacilites").value = updata[0].facilites

    update = true;
     uid = cid;
}
    
const handleremove = (cid) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let trref = document.getElementById("row" + cid)
    trref.remove()

    localdata.map((v, i) => {
        if (v.id === cid) {
            localdata.splice(i, 1);
            localStorage.setItem("cinema", JSON.stringify(localdata));
        }
    })
  
}
const handleupdate = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let newname = document.getElementById("cinemaName").value;
    let newlocaton = document.getElementById("cinemalocation").value;
    let newfacilites = document.getElementById("cinemafacilites").value;
   
    let updatevalue = localdata.map((a) => {
        console.log(a);
        if (a.id === uid) {
            return {
                id: uid,
                name: newname,
                locaton: newlocaton,
                facilites: newfacilites
            }
        } else {
            return a;
        }
    })
    localdata[uid]=updatevalue
    localStorage.setItem("cinema", JSON.stringify(updatevalue));
    console.log(updatevalue);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newlocaton
    tr.children[2].innerHTML = newfacilites

   event.preventDefault();


}

const handledes = () => {
    if(update){
        handleupdate(); 
    }else{
        handlecinema();
    }
    event.preventDefault();
}

const handlecinema = () => {
    let cinemaname = document.getElementById("cinemaName").value
    let cinemalocaton = document.getElementById("cinemalocation").value
    let cinemafacilites = document.getElementById("cinemafacilites").value
    // console.log(cinemaname,cinemalocaton,cinemafacilites);
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let cid = Math.floor(Math.random() * 10);

    if (localdata) {
        localdata.push({
            id: cid,
            name: cinemaname,
            locaton: cinemalocaton,
            facilites: cinemafacilites
        });
        localStorage.setItem("cinema", JSON.stringify(localdata));
    } else {
        localStorage.setItem("cinema", JSON.stringify([{
            id: cid,
            name: cinemaname,
            locaton: cinemalocaton,
            facilites: cinemafacilites
        }]));
      
        // localStorage.setItem("cinema", JSON.stringify(cinemaarr));
    }

    displaycinema(cinemaname, cinemalocaton, cinemafacilites, cid);
    document.getElementById("table").style .display ='inline-block'
    event.preventDefault();
}


const handnoleload = () =>{
   
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if(localdata){
        localdata.map((a) =>{
            displaycinema(a.name , a.locaton,  a.facilites ,a.id);
            document.getElementById("table").style .display ='inline-block'
            document.getElementById("data").style .display ='block'
        })
    }
}
window.onload=handnoleload();

cinemaformRef.addEventListener("submit", handledes)