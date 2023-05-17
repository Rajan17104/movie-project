let cinemaRef = document.getElementById("main");


let admin =[];

const handleCinema = () =>{

    document.getElementById("data").style.display="block";
    
    let val = document.getElementById("cinemaForm").value;
    
    console.log(val);


    event.preventDefault();

};


// cinemaRef.addEventListener("onclick",handleCinema);
cinemaRef.addEventListener("submit",handleCinema);