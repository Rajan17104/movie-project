let movieRef = document.getElementById("movieForm");

let  arr = [];
let update = false;
let uid = null;


const handleData =() =>{

    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;
    let mTime =document.getElementById("movietime").value;


    console.log(mName,mDesc,mTime);

}

const handleonload = () =>{

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) =>{

        let optRef = document.getElementById("Cinema-option");

        let optElem = document.createElement("option");
        let optTax = document.createTextNode(v.name);

        optElem.appendChild(optTax);

        optElem.setAttribute("value",v.id);
        
        optRef.appendChild(optElem);

    });

}


const handleinsert = () =>{


    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;
    let mTime =document.getElementById("movietime").value;
    let mposter =document.getElementById("movieposter").value;
  
    let rno = Math.floor(Math.random() * 10);

    // let localdata = JSON.parse(localStorage.getItem("cinema"));

    // localdata.map((v)=>{
    //     console.log(v.cid);
        
    // });

    // let time = document.getElementsByName("movietime");

    
    let time = document.getElementsByName("movietime");

    for(let i=0; i<time.length; i++){
        arr.push(time[i].value);
    }


    console.log(arr); 

    event.preventDefault();
    



    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if (localmovie) {
        localmovie.push({
            mid: rno,
            name: mName,
            desc:mDesc,
            time:arr,
            poster:mposter,
            // cid:cid,
        });
        localStorage.setItem("movie", JSON.stringify(localmovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            mid: rno,
            name: mName,
            desc:mDesc,
            time:arr,
            poster:mposter,
            // cid:v.cid,
        }]));
      

    }
    event.preventDefault();

}


const addTime = () => {

    let rno = Math.floor(Math.random() * 1000);

    let timeForm = document.getElementById("timeData");

    let innerdiv =document.createElement("div");
    innerdiv.setAttribute("id", "row - " + rno); 

    let time = document.createElement("input");
    time.setAttribute("placeholder","Enter Time");
    time.setAttribute("name", "movietime");
    time.setAttribute("type","time");

    let addbtn =document.createElement("button");
    let addtxt=document.createTextNode("+");

    addbtn.appendChild(addtxt);
    addbtn.setAttribute("type","button")
    addbtn.setAttribute("onclick","addTime()")

    let removebtn = document.createElement("button");
    let removetxt = document.createTextNode("-");
    
    removebtn.appendChild(removetxt);
    removebtn.setAttribute("type", "button");
    removebtn.setAttribute("onclick", "removeTime(" + rno + ")");

    innerdiv.appendChild(time);
    innerdiv.appendChild(addbtn);
    innerdiv.appendChild(removebtn);

    timeForm.appendChild(innerdiv);

    event.preventDefault();
}

const removeTime = (rno) =>{

    let rnoref = document.getElementById("row - " + rno);
    rnoref.remove();

    let time = document.getElementsByName("movietime");

    for (let i = 0; i < time.length; i++) {
        arr.splice(time[i,0].value);
    }
    console.log(arr);    

    event.preventDefault()

}

const handlemovieData = (   ) => {

    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rno)

    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    
    let button = document.createElement("button");
    button.setAttribute("onclick", "handleupdate(" + rno + ")")

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleRemove(" + rno + ")")

    let tdval = document.createTextNode(mName);
    let tdval1 = document.createTextNode(mDesc)
    let tdval2 = document.createTextNode(mTime)
    let tdval3 = document.createTextNode(mposter)

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata")


    td.appendChild(tdval);
    tr.appendChild(td);

    td1.appendChild(tdval1);
    tr.appendChild(td1);

    td2.appendChild(tdval2);
    tr.appendChild(td2);

    td3.appendChild(tdval3);
    tr.appendChild(td3);

    button.appendChild(btn1);
    button1.appendChild(btn2);
    td4.appendChild(button);
    td4.appendChild(button1);
    tr.appendChild(td4)

    tableref.appendChild(tr);

    // event.preventDefault();
}


const handleRemove = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("movie"));
    let trref = document.getElementById("row" + rno)
    trref.remove()

    localdata.map((v, i) => {
        if (v.id === rno) {
            localdata.splice(i, 1);
            localStorage.setItem("movie", JSON.stringify(localdata));
        }
    })
  
    event.preventDefault();
}



const handleupdate = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("movie"));
    let Fdata = localdata.filter((v, i) => v.cid === rno)

    document.getElementById("moviename").value = Fdata[0].name
    document.getElementById("moviedesc").value = Fdata[0].description
    // document.getElementById("Cinema-option").value = Fdata[0].cinemaOption
    document.getElementById("timeData").value = Fdata[0].time
    document.getElementById("movieposter").value = Fdata[0].poster


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
    let localdata = JSON.parse(localStorage.getItem("movie"));
   
    let newname = document.getElementById("moviename").value;
    let newdesc= document.getElementById("moviedesc").value;
    // let newCinemaOption = document.getElementById("Cinema-option").value;
    let newtime = document.getElementById("timeData").value;
    let newposter = document.getElementById("movieposter").value;

   
    let uData = localdata.map((a) => {
        console.log(a);
        if (a.cid === uid) {
            return {
                mid: rno,
                name: mName,
                desc:mDesc,
                time:arr,
                poster:mposter,
            }
        } else {
            return a;
        }
    })
    localdata[uid]=uData
    localStorage.setItem("movie", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newdesc
    tr.children[2].innerHTML = newCinemaOption
    tr.children[3].innerHTML = newtime
    tr.children[4].innerHTML = newposter


   event.preventDefault();


}


const handleMonload = () =>{
   
    let localdata = JSON.parse(localStorage.getItem("movie"));

    if(localdata){
        localdata.map((a) =>{
            handlecinemaData(a.name , a.location,  a.facilites ,a.id);

            document.getElementById("table").style .display ='inline-block'
        })
    }


}


window.onload = handleonload();
window.onload = handleonload();

movieRef.addEventListener("submit",handleData)
movieRef.addEventListener("submit",handledes);