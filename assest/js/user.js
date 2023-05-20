const handleonload = () =>{

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) =>{

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

    let input = document.getElementById("search");

    let filter = input.v.toUpperCase();

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.filter((v)=>{
        // if(input === v.name){
            document.getElementById("print").innerHTML = input = v.name;
        // }

        let movie = input.includes("search");

        document.getElementById("filter").innerHTML = movie;
    });

   

  

}



window.onload = handleonload