const seatonload = () => {

    let moviename = JSON.parse(sessionStorage.getItem("moviename"));
    let cinemaid = JSON.parse(sessionStorage.getItem("time"));
    let seatdata = JSON.parse(sessionStorage.getItem("seatdata"));
    let localseat = JSON.parse(localStorage.getItem("seat"));

    // console.log(moviename);
    // console.log(cinemaid);
    // console.log(seatdata);
    // console.log(localseat);
    
    let Sdata = localseat.filter((v) => v.cid === cinemaid && v.time == seatdata);

    // console.log(Sdata);

   
    let sprint = '<div class="cinemaData">'
        Sdata.map((v)=>{
     
            for (let i = 0; i < v.seat.length; i++) {
                sprint += '<button class="btn btn-primary" id="seatbtn" onclick="Bookseat(' + v.sid + ')">' + v.seat[i] + '</button>';
            };
        
        })
     
    sprint += '</div>'
    document.getElementById("seat").innerHTML = sprint;

  
}


const Bookseat = (sid,i) =>{

    // document.getElementById('seat'+ i).innerHTML = 1; 

    let localseat = JSON.parse(localStorage.getItem("seat"));

    seatData = localseat.filter((v) => sid === v.sid);

    console.log(seatData);

    seatData.map((v) => v.seat[i]= 1)    

}





window.onload =seatonload;