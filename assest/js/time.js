const timeonload = () => {

    let cinemaid = JSON.parse(sessionStorage.getItem("time"));
    let moviename = JSON.parse(sessionStorage.getItem("moviename"));
    let localmovie = JSON.parse(localStorage.getItem("movie"));

    console.log(cinemaid);
    // console.log(moviename);
    // console.log(localmovie);

    let Tdata = localmovie.filter((v) => v.cid == cinemaid&& v.name == moviename);

    console.log(Tdata);

    Tdata.map((v) =>{

        let tprint = '<div class = "data">'
            tprint += '<a href="../user/seatBook.html" class ="data" onclick="handleseat()">'
            tprint += '<div class="name">' + 'Time :'+'</div>' + '<br>'
                tprint += '<div class="Cname">' + v.time + '</div>' + '<br>'
            tprint += '</a>'
        tprint += '</div>'

        document.getElementById("time").innerHTML=tprint;

    });

    

}


const handleseat =(seatdata) =>{

    sessionStorage.setItem("seatdata",JSON.stringify(seatdata));

    // console.log(seatdata);
    

}


window.onload = timeonload;