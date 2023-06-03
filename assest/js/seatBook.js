let seat =[];


const seatonload = () => {

    // let moviename = JSON.parse(sessionStorage.getItem("moviename"));
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
                sprint += '<button class="btn" id="btn-'+i+'" onclick="Bookseat(' + v.price + ','+i+')">' + [i+1] + '</button>';
            };
        
        })

        
     
    sprint += '</div>'
    document.getElementById("seat").innerHTML = sprint;

    Sdata.map((v)=>{
     
        for (let i = 0; i < v.seat.length; i++) {
            if( v.seat[i] == 1){
                document.getElementById("btn-"+i).disabled=true;
                document.getElementById("btn-"+i).style.backgroundColor="green";
            }
        };
    
    })

  
}


const Bookseat = (price,i) =>{

    seat.push(i);
    
    console.log(seat);

    console.log(price , i);

    document.getElementById("price").innerHTML= "Pay :"+  price * seat.length;

    document.getElementById("btn-"+i).disabled=true;

    document.getElementById("btn-"+i).style.backgroundColor="green";



}

const pay = () =>{

    let moviedata = JSON.parse(sessionStorage.getItem("moviedata"));
    let movieName = JSON.parse(sessionStorage.getItem("moviename"));
    let cinemaid = JSON.parse(sessionStorage.getItem("time"));
    let seatdata = JSON.parse(sessionStorage.getItem("seatdata"));
    let localseat = JSON.parse(localStorage.getItem("seat"));

        
    let Sdata = localseat.filter((v) => v.cid === cinemaid && v.time == seatdata);

    if(Sdata !=null){
        Sdata[0].seat.map((v,i) =>{
            seat.map((s) =>{
                if(i === s){
                    Sdata[0].seat[i] = 1; 
                }
            })        
        })
        console.log(Sdata);

    }


    let uData = localseat.map((a) => {
        console.log(a);
        if (a.sid === localseat.sid) {
            return {
                sid:seatdata,
                cid:moviedata,
                mid: movieName,  
                time:cinemaid,
                seat:localseat,
            } 
            
            
        } else {
            return a;
        }

    });

    localseat[localseat.sid]=uData;

    localStorage.setItem("seat", JSON.stringify(uData));
    console.log(uData);
    event.preventDefault();

    window.location="../user/successful.html"

}

window.onload =seatonload;