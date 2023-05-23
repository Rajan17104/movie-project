// const handleonload = () =>{

//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//      localdata.map((v)=>{

//         let movieRef = document.getElementById("movieName");

//         let movieElem = document.createElement("div");
//         let movieTax = document.createTextNode(v.name);
//         movieElem.appendChild(movieTax);
//         movieRef.appendChild(movieElem);


        
//         let locationref = document.getElementById("location");

//         let locationElem = document.createElement("div");
//         let locationTax = document.createTextNode(v.location);
//         locationElem.appendChild(locationTax);
//         locationref .appendChild(locationElem);



//         let facilitesRef = document.getElementById("facilites");

//         let facilitesElem = document.createElement("div");
//         let facilitesTax = document.createTextNode(v.facilites);
//         facilitesElem.appendChild(facilitesTax);
//         facilitesRef.appendChild(facilitesElem);
        

//     });

// }

// const search = () =>{

//     let input = document.getElementById("search").value;

//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//    let data = localdata.filter((v)=>{
//         v.name.includes(input);

//         console.log(data);
//     });

//     // document.getElementById("print") = data;
//     print();

//     console.log('sdhdh');

// }

// const print = () =>{

//     document.getElementById("print") = input;

// }



// window.onload = handleonload


let mfrm = document.getElementById("moviefrm");

let update = false;
let uid = null;

const moviefrm = () => {

    console.log("llll123");
    let name = document.getElementById("mname").value;
    let desc = document.getElementById("mdesc").value;
    let file = document.getElementById("myfile").value;
    let cinemaname=document.getElementById("cinemaopt").value;

    console.log(name, desc, file,cinemaname);


    event.preventDefault();

}
const handleonload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) => {
        let opt = document.createElement("option")
        opt.setAttribute("value", v.name);
        let opttxt = document.createTextNode(v.name);

        let optselect = document.getElementById("cinemaopt");
        optselect.appendChild(opt);
        opt.appendChild(opttxt);

    });

    let localdatamovie = JSON.parse(localStorage.getItem("movie"));

    if(localdatamovie){
        localdatamovie.map((a) =>{
            displaymovie(a.name, a.desc,  a.time, a.poster,a.mid);
            // document.getElementById("table").style .display ='inline-block';
            // document.getElementById("frmdata").style .display ='block';
        })
    }

}

const handleinsert = () => {

    let arr = [];
    let mname = document.getElementById("mname").value;
    let mdesc = document.getElementById("mdesc").value;
    let mposterpath = document.getElementById("myfile").value;
    // let timename = document.getElementById("time").value;
    let op=document.getElementById("cinemaopt").value;
    console.log(mname, mdesc, mposterpath,op);
    let rno = Math.floor(Math.random() * 1000);
    console.log(rno);

   
    let localdatamovie = JSON.parse(localStorage.getItem("movie"));


    let time = document.getElementsByName("Timename");

    for (let i = 0; i < time.length; i++) {

        arr.push(time[i].value)
    }
    console.log(arr);

    if (localdatamovie) {
        localdatamovie.push({
            mid: rno,
            name: mname,
            desc: mdesc,
            time: arr,
            poster: mposterpath,


        });
        localStorage.setItem("movie", JSON.stringify(localdatamovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            mid: rno,
            name: mname,
            desc: mdesc,
            time: arr,
            poster: mposterpath,

        }]));


    }
    displaymovie(mname,mdesc,op,mposterpath,arr,rno);



    event.preventDefault();

}

const addtime = () => {

    let addtimeinput = document.createElement("input");
    addtimeinput.setAttribute("placeholder", "Time");
    addtimeinput.setAttribute("name", "Timename");
    addtimeinput.setAttribute("type", "time")

    let timeadd = document.getElementById("timeadd");
    timeadd.appendChild(addtimeinput);
    let innerdiv = document.createElement("div");


    let rno = Math.floor(Math.random() * 1000);
    console.log(rno);
    innerdiv.setAttribute("id", "row" + rno);

    let addbtn = document.createElement("button");
    let addtxt = document.createTextNode("+");
    addbtn.appendChild(addtxt);
    timeadd.appendChild(addbtn);
    addbtn.setAttribute("type", "button");
    addbtn.setAttribute("onclick", "addtime()");

    let removebtn = document.createElement("button");
    let removetxt = document.createTextNode("-");
    removebtn.appendChild(removetxt);
    timeadd.appendChild(removebtn);
    removebtn.setAttribute("type", "button");
    removebtn.setAttribute("onclick", "timeremove(" + rno + ")");

    innerdiv.appendChild(addtimeinput);
    innerdiv.appendChild(addbtn);
    innerdiv.appendChild(removebtn);
    timeadd.appendChild(innerdiv);

    event.preventDefault();
}

const timeremove = (rno) => {

    console.log("neft");
    let rnoref = document.getElementById("row" + rno);
    rnoref.remove();


    let timenamedom = document.getElementsByName("Timename");

    // let localdatamovie = JSON.parse(localStorage.getItem("movie"));


    for (let i = 0; i < timenamedom.length; i++) {

        arr.splice(timenamedom[i, 0].value);
    }
    console.log(arr);
    event.preventDefault();
}
// ---------------------------------------------------------------
const displaymovie=(mname,mdesc,op,mposterpath,timename,rno)=>{

    let tr = document.createElement("tr");
    tr.setAttribute("id","row" + rno);


    let tdmn = document.createElement("td");
    let tdmd = document.createElement("td");
    let tdcn = document.createElement("td");
    let tdmt = document.createElement("td");
    let tdmimg = document.createElement("td");
    let tdac=document.createElement("td");
    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleEdit(" + rno + ")");
    let button2 = document.createElement("button");
    button2.setAttribute("onclick", "handleremove(" + rno + ")");

    let mntxt=document.createTextNode(mname);
    let mdtxt=document.createTextNode(mdesc);
    let cntxt=document.createTextNode(op);
    let mttxt=document.createTextNode(timename);
    let imgtxt=document.createTextNode(mposterpath);
    let btn1txt=document.createTextNode("Edit");
    let btn2txt=document.createTextNode("Delete");


    tr.appendChild(tdmn);
    tr.appendChild(tdmd);
    tr.appendChild(tdcn);
    tr.appendChild(tdmt);
    tr.appendChild(tdmimg);
    tr.appendChild(tdac);
    tdmn.appendChild(mntxt);
    tdmd.appendChild(mdtxt);
    tdcn.appendChild(cntxt);
    tdmt.appendChild(mttxt);
    tdmimg.appendChild(imgtxt);
    tdac.appendChild(button1);
    tdac.appendChild(button2);
    button1.appendChild(btn1txt);
    button2.appendChild(btn2txt);



    let tableref = document.getElementById("Tabledata");


    tableref.appendChild(tr);


}
const handleEdit=(rno)=>{

    let localdatamovie = JSON.parse(localStorage.getItem("movie"));
    let updata = localdatamovie.filter((v, i) => v.mid === rno)

    let timefrm=document.getElementById("timeadd");
    let mtime=document.getElementsByName("Timename");

    while(timefrm.firstChild){
        timefrm.removeChild(timefrm.firstChild);
    }
    for(let i=0; i <updata[0].time.length;i++){
        addtime();
    }
    for(let i=0; i <updata[0].time.length;i++){
        mtime[i].value=updata[0].time[i];
    }

    document.getElementById("mname").value = updata[0].name
    document.getElementById("mdesc").value = updata[0].desc
    document.getElementById("time").value = updata[0].time
    document.getElementById("myfile").value = updata[0].poster

    update = true;
    uid = rno;
    
}

const handleremove=(rno)=>{
    let localdatamovie = JSON.parse(localStorage.getItem("movie"));
    let trref = document.getElementById("row" + rno);
    trref.remove();

    localdatamovie.map((v, i) => {
        if (v.mid === rno){
            localdatamovie.splice(i, 1);
            localStorage.setItem("movie", JSON.stringify(localdatamovie));
        }
    });

    event.preventDefault();
}
const handleupdate = (uid) => {

    let localdatamovie = JSON.parse(localStorage.getItem("movie"));
    let mname = document.getElementById("mname").value;
    let mdesc = document.getElementById("mdesc").value;
    let mposterpath = document.getElementById("myfile").value;
    let timename = document.getElementById("time").value;
    let cinemaname=document.getElementById("cinemaopt").value;
   
    let updatevalue = localdatamovie.map((a) => {
        console.log(a);
        if (a.mid === uid) {
            return {
                mid: uid,
                name: mname,
                desc: mdesc,
                time: timename,
                poster: mposterpath,

          }
        } else {
            return a;
        }
    });

    localdatamovie[uid]=updatevalue;
    localStorage.setItem("movie", JSON.stringify(updatevalue));
    console.log(updatevalue);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = mname
    tr.children[1].innerHTML = mdesc
    tr.children[2].innerHTML = timename
    tr.children[3].innerHTML = mposterpath

   event.preventDefault();


}
const handledes = () => {
    if(update){
        handleupdate(); 
    }else{
        handleinsert();
    }
    event.preventDefault();
}


window.onload = handleonload;


mfrm.addEventListener("submit", moviefrm);
mfrm.addEventListener("submit", handledes);