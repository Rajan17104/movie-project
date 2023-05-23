let movieRef = document.getElementById("movieForm");


let update = false;
let uid = null;


const handleData =() => {

    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;
    let mTime =document.getElementById("movietime").value;


    console.log(mName,mDesc,mTime);

}


const handleonload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) =>{

        let optRef = document.getElementById("cinema-option");

        let optElem = document.createElement("option");
        let optTax = document.createTextNode(v.name);

        optElem.appendChild(optTax);

        optElem.setAttribute("value",v.name);
        
        optRef.appendChild(optElem);

    });

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if(localmovie){
        localmovie.map((a) =>{
            handlemovieData(a.name , a.desc, a.opt, a.time ,a.poster, a.mid);

            document.getElementById("table").style .display ='inline-block'
        })
    }

}


const handleinsert = () =>{

    let  arr = [];

    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;
    let mOpt = document.getElementById("cinema-option").value;
    let mTime =document.getElementById("movietime").value;
    let mposter =document.getElementById("movieposter").value;
  
    console.log(mOpt);

    let rno = Math.floor(Math.random() * 10);
    
    let time = document.getElementsByName("movietime");

    for(let i=0; i<time.length; i++){
        arr.push(time[i].value);
    }


    console.log(arr); 

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if (localmovie) {
        localmovie.push({
            mid: rno,
            name: mName,
            desc:mDesc,
            opt:mOpt,
            time:arr,
            poster:mposter,
        });
        localStorage.setItem("movie", JSON.stringify(localmovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            mid: rno,
            name: mName,
            desc:mDesc,
            opt:mOpt,
            time:arr,
            poster:mposter,
        }]));
    }

    handlemovieData(mName,mDesc,mOpt,arr,mposter,rno);

    document.getElementById("table").style .display ='inline-block'

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


const handlemovieData =(mName,mDesc,mOpt,mTime,mposter,rno) => {

    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rno);

    let movieNameE = document.createElement("td");
    let movieDescE = document.createElement("td");
    let movieOptionE = document.createElement("td");
    let movieTimeE = document.createElement("td");
    let moviePosterE = document.createElement("td");
    let movieActionE =document.createElement("td");

    let button = document.createElement("button");
    button.setAttribute("onclick", "handleupdate(" + rno + ")")

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleRemove(" + rno + ")")
    
    let movieNameT = document.createTextNode(mName);
    let movieDescT = document.createTextNode(mDesc)
    let movieOptionT = document.createTextNode(mOpt)
    let movieTimeT = document.createTextNode(mTime)
    let moviePosterT = document.createTextNode(mposter)

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata");


    movieNameE.appendChild(movieNameT);
    tr.appendChild(movieNameE);

    movieDescE.appendChild(movieDescT);
    tr.appendChild(movieDescE);

    movieOptionE.appendChild(movieOptionT);
    tr.appendChild(movieOptionE);

    movieTimeE.appendChild(movieTimeT);
    tr.appendChild(movieTimeE);

    moviePosterE.appendChild(moviePosterT);
    tr.appendChild(moviePosterE);

    button.appendChild(btn1);
    button1.appendChild(btn2);

    movieActionE.appendChild(button);
    movieActionE.appendChild(button1);

    tr.appendChild(movieActionE)

    tableref.appendChild(tr);

    document.getElementById("table").style.display="block";

    // event.preventDefault();

}



const handleRemove = (rno) => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    let trref = document.getElementById("row" + rno)
    trref.remove()

    localmovie.map((v, i) => {
        if (v.mid === rno) {
            localmovie.splice(i, 1);
            localStorage.setItem("movie", JSON.stringify(localmovie));
        }
    });
  
    event.preventDefault();

}



const handleupdate = (rno,upd) => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    let Fdata = localmovie.filter((v, i) => v.mid === rno)

    document.getElementById("moviename").value = Fdata[0].name
    document.getElementById("moviedesc").value = Fdata[0].desc
    document.getElementById("movietime").value = Fdata[0].opt
    document.getElementById("movietime").value = Fdata[0].time
    document.getElementById("movieposter").value = Fdata[0].poster

    update = true;
     
    uid = rno;

    let fromtime = document.getElementById("")

    let Movietime = document.getElementsByName("movietime");



   

    event.preventDefault();
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

    let localmovie = JSON.parse(localStorage.getItem("movie"));
   
    let newname = document.getElementById("moviename").value;
    let newdesc= document.getElementById("moviedesc").value;
    let newopt = document.getElementById("cinema-option").value;
    let newtime = document.getElementById("movietime").value;
    let newposter = document.getElementById("movieposter").value;

   
    let uData = localmovie.map((a) => {
        console.log(a);
        if (a.mid === uid) {
            return {
                mid: uid,
                name: newname,
                desc: newdesc,
                opt:newopt,
                time: newtime,
                poster:newposter
            }
        } else {
            return a;
        }
    });

    localmovie[uid]=uData

    localStorage.setItem("movie", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newdesc
    tr.children[2].innerHTML =  newopt
    tr.children[3].innerHTML = newtime
    tr.children[4].innerHTML = newposter

   event.preventDefault();


}

window.onload = handleonload();

movieRef.addEventListener("submit",handleData);
movieRef.addEventListener("submit",handledes);