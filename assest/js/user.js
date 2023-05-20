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

    let localdata = JSON.parse(localStorage.getItem("cinema"));

   let data = localdata.filter((v)=>{
        v.name.includes(input);

        console.log(data);
    });

    // document.getElementById("print") = data;
    print();

    console.log('sdhdh');

}

const print = () =>{

    document.getElementById("print") = input;

}



window.onload = handleonload