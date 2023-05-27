let movieRef = document.getElementById("movieForm");

let  arr = [];
let update = false;
let uid = null;


// const handleData =() => {

//     let mName =document.getElementById("moviename").value;
//     let mDesc =document.getElementById("moviedesc").value;
//     let mOpt = document.getElementById("cinema-option").value;
//     let mTime =document.getElementsByName("movietime").value;
//     let mposter =document.getElementById("movieposter").value;


//     console.log(mName,mDesc,mOpt,mTime,mposter);

//     event.preventDefault();

// }


const handleonload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) =>{

        let optRef = document.getElementById("cinema-option");

        let optElem = document.createElement("option");
        let optTax = document.createTextNode(v.name);

        optElem.appendChild(optTax);

        optElem.setAttribute("value",v.name);
        optElem.setAttribute("value",v.cid);
        
        optRef.appendChild(optElem);

    });

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if(localmovie){
        localmovie.map((a) =>{
            
            handlemovieData(a.name , a.desc, a.opt, a.time ,a.poster, a.mid);

            document.getElementById("table").style .display ='block'
        })
    }
    

}


const handleinsert = () =>{

    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;
    let mOpt = document.getElementById("cinema-option").value;
    // let mTime =document.getElementById("movietime").value;
    let mposter =document.getElementById("movieposter");

    let filepath = mposter.files[0].name;
    let path ='../assest/image/' + filepath;

    console.log(mposter);

    console.log(filepath);
  
    console.log(mOpt);

    let rno = Math.floor(Math.random() * 10000);
    
    let time = document.getElementsByName("movietime");

    for(let i=0; i<time.length; i++){
        arr.push(time[i].value);
    }

    console.log(arr); 

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if (localmovie) {
        localmovie.push({
            mid: rno,
            cid: mOpt,
            name: mName,
            desc:mDesc,
            opt:mOpt,
            time:arr,
            poster:path,
        });
        localStorage.setItem("movie", JSON.stringify(localmovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            mid: rno,
            cid: mOpt,
            name: mName,
            desc:mDesc,
            opt:mOpt,
            time:arr,
            poster:path,
        }]));
    }

    handlemovieData(mName,mDesc,mOpt,arr,path,rno);

    document.getElementById("table").style .display ='block';

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

    event.preventDefault();

}


const handlemovieData =(mName,mDesc,mOpt,mTime,path,rno) => {

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
    let moviePosterT = document.createTextNode(path);

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata");

    let img = document.createElement("img");
    img.setAttribute("src" ,path)

    let td5div = document.createElement("div");
    td5div.setAttribute("id","divtd6");
    td5div.appendChild(img);
    
  
    tr.appendChild(moviePosterE)

    movieNameE.appendChild(movieNameT);
    tr.appendChild(movieNameE);

    movieDescE.appendChild(movieDescT);
    tr.appendChild(movieDescE);

    movieOptionE.appendChild(movieOptionT);
    tr.appendChild(movieOptionE);

    movieTimeE.appendChild(movieTimeT);
    tr.appendChild(movieTimeE);

    moviePosterE.appendChild(td5div);
    tr.appendChild(moviePosterE);

    button.appendChild(btn1);
    button1.appendChild(btn2);

    movieActionE.appendChild(button);
    movieActionE.appendChild(button1);

    tr.appendChild(movieActionE);

    tableref.appendChild(tr);

    document.getElementById("table").style.display="block";

    event.preventDefault();

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



const handleupdate = (rno) => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    update = true;
    uid = rno;
 
    let Fdata = localmovie.filter((v, i) => v.mid === rno)

    let timefrom = document.getElementById("timeData");

    while(timefrom.firstChild){
        timefrom.firstChild.remove();
    }

    for(let i=0; i<Fdata[0].time.length;i++){
        addTime();
    }

    let movietime = document.getElementsByName("movietime");

    for(let i=0; i<Fdata[0].time.length;i++){
        movietime[i].value=Fdata[0].time[i];
    }

    document.getElementById("moviename").value = Fdata[0].name
    document.getElementById("moviedesc").value = Fdata[0].desc
    document.getElementById("cinema-option").value = Fdata[0].opt
    // document.getElementsByName("movietime") = Fdata[0].time
    // document.getElementById("movieposter") = Fdata[0].poster
 
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
   
    let newname = document.getElementById("moviename").value;
    let newdesc= document.getElementById("moviedesc").value;
    let newopt = document.getElementById("cinema-option").value;
    let newtime = document.getElementsByName("movietime");
    let newposter = document.getElementById("movieposter");

    let filepath = newposter.files[0].name;
    let path ='../assest/image/' + filepath;

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    console.log(newposter);
    console.log(filepath);
  
    for(let i=0; i<newtime.length; i++){
        arr.push(newtime[i].value);
   }
    let uData = localmovie.map((a) => {
        if (a.mid === uid) {
            return {
                mid: uid,
                cid:newopt,  
                name: newname,
                desc: newdesc,
                opt:newopt,
                time: arr,
                poster:path
            }
        } else {
            return a;
        }

    });

    localmovie[uid]=uData;

    localStorage.setItem("movie", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newdesc
    tr.children[2].innerHTML =  newopt
    tr.children[3].innerHTML = newtime
    tr.children[4].innerHTML = newposter


//    event.preventDefault();


}

window.onload = handleonload;

movieRef.addEventListener("submit",handledes);