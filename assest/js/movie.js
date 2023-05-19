let movieRef = document.getElementById("movieForm");


const handlemovieData =() =>{

    let mName =document.getElementById("moviename").value;
    let mDesc =document.getElementById("moviedesc").value;

    console.log(mName,mDesc);

}

const handleonload = () =>{

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    // console.log(localdata);

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

    let rno = Math.floor(Math.random() * 10);

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    if (localmovie) {
        localmovie.push({
            id: rno,
            name: mName,
            desc:mDesc
        });
        localStorage.setItem("movie", JSON.stringify(localmovie));
    } else {
        localStorage.setItem("movie", JSON.stringify([{
            id: rno,
            name: mName,
            desc:mDesc
        }]));
      

    }
    event.preventDefault();

}


window.onload = handleonload();

movieRef.addEventListener("submit",handlemovieData)
movieRef.addEventListener("submit",handleinsert)