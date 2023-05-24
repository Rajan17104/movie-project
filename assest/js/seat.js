
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

    let opt = document.getElementById("cinema-option").value;
    console.log(opt);

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let mData = localmovie.filter((v,i) => v.cid === opt);
    console.log(mData);

    mData.map((v,i) =>{
        document.getElementById("inOption").innerHTML = v.name;

    });

}





window.onload = handleonload;