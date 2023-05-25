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
    console.log(mData);

    let print;

    mData.map((v,i) =>{
       print += '<option>' +v.name+ '</option>'

    });

    document.getElementById("inOption").innerHTML = print;

}

const handlemovieTime = () =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let optTime = document.getElementById("inOption").value;
    console.log(optTime);


    let mTime = localmovie.filter((v) => v.mid === optTime);
    console.log(mTime);

    let print;

    localmovie.map((v,i) =>{
        print += '<option>' +v.time+ '</option>'
    });

    document.getElementById("timeOption").innerHTML = print;
     
}

window.onload = handleonload;