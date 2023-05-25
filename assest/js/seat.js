let submitRef = document.getElementById("seatForm");



const handleonload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) =>{

        let optRef = document.getElementById("cinema-option");

        let optElem = document.createElement("option");
        let optTax = document.createTextNode(v.name);

        optElem.appendChild(optTax);

        optElem.setAttribute("value",v.cid);
  
        
        optRef.appendChild(optElem);

    });

};


const handlemovie = () =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let opt = document.getElementById("cinema-option").value;
    console.log(opt);

    let mData = localmovie.filter((v,i) => v.cid === opt);
    console.log(mData[0].time);

    let print;

    mData.map((v,i) =>{
       print += '<option value=' + v.mid + '>' +v.name+ '</option>'

    });

    document.getElementById("inOption").innerHTML = print;

}

const handlemovieTime = () =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let optTime = document.getElementById("inOption").value;
    console.log(optTime);


    let mTime = localmovie.filter((v) => v.mid === parseInt(optTime));
    console.log(mTime);

    let print = '';

    mTime.map((v,i) =>{
        print += '<option>' +v.time+ '</option>'
    });

    document.getElementById("timeOption").innerHTML = print;
     
}

const handlesubmit = () => {

    // let rno = Math.floor(Math.random() * 10000);

    let seat = document.getElementById("seat").value;

    console.log(seat);

    event.preventDefault();

    let localseat = document.getElementById("seat");

    if(localseat){
        localmovie.push({
            
        })
    }

}

window.onload = handleonload;   

submitRef.addEventListener("submit",handlesubmit)