const handleonload = () =>{

    let localdata = JSON.parse(localStorage.getItem("cinema"));

     localdata.map((v)=>{

        let movieRef = document.getElementById("movieName");

        let movieElem = document.createElement("div");
        let movieTax = document.createTextNode(v.name);
        movieElem.appendChild(movieTax);
        movieRef.appendChild(movieElem);


        
        let locationref = document.getElementById("location");

        let locationElem = document.createElement("div");
        let locationTax = document.createTextNode(v.location);
        locationElem.appendChild(locationTax);
        locationref .appendChild(locationElem);



        let facilitesRef = document.getElementById("facilites");

        let facilitesElem = document.createElement("div");
        let facilitesTax = document.createTextNode(v.facilites);
        facilitesElem.appendChild(facilitesTax);
        facilitesRef.appendChild(facilitesElem);
        

    });

}

const search = () =>{

    let input = document.getElementById("search").value;

    input = input.toLowerCase();

    let x =document.getElementsByClassName('name');

    for(i=0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display='none';
        }else{
            x[i].style.display="list-item"
        }   
    }

}

const print = () =>{

    document.getElementById("print") = input;

}



window.onload = handleonload

