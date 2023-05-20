let movieRef = document.getElementById("movieForm");

const handlemovieData =() =>{

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

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if (localmovie) {
        localmovie.push({
            mid: rno,
            name: mName,
            desc:mDesc,
            time:[mTime],
            poster:mposter,
            // cid:cid,
        });
        localStorage.setItem("movie", JSON.stringify(localmovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            mid: rno,
            name: mName,
            desc:mDesc,
            time:[mTime],
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

    // let time = document.getElementsByName("movietime");

    // for (let i = 0; i < time.length; i++) {
    //     arr.splice(time: time[i ,0].value)
    // }
    // console.log(arr);    

    event.preventDefault()

}


window.onload = handleonload();

movieRef.addEventListener("submit",handlemovieData)
movieRef.addEventListener("submit",handleinsert);