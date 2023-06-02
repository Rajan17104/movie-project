const seatonload = () => {

    let moviename = JSON.parse(sessionStorage.getItem("moviename"));
    let cinemaid = JSON.parse(sessionStorage.getItem("time"));
    let seatdata = JSON.parse(sessionStorage.getItem("seatdata"));
    let localseat = JSON.parse(localStorage.getItem("seat"));

    console.log(moviename);
    console.log(cinemaid);
    console.log(seatdata);
    console.log(localseat);
    
    let Sdata = localseat.filter((v) => v.cid === cinemaid);

    console.log(Sdata);

    Sdata.map((v,i) =>{

        for(let i=0; i < v.seat.length; i++){
            sprint = '<div class = "data">'
                // sprint += `<div class="data">Seat :<button/>${v.seat}</button></div>`;
                sprint += '<div class="data">Seat :<button/>'+v.seat+'</button></div>';
            sprint += '</div>'
        };

        document.getElementById("seat").innerHTML = sprint;

    });
   

};


window.onload =seatonload;