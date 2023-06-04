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

        tprint = '<div class="sdata">';
         Tdata.map((v)=>{
            for (let i = 0; i < v.time.length; i++) {
                tprint += '<div class = "data">'
                    tprint += '<div class="name">' + 'Time :'+'</div>'+'<b';
                    tprint += `<div class="data"><a href="../user/seatBook.html" class="btn" onclick="handleseat('${v.time[i]}')" />${v.time[i]}</a>`;
                tprint += '</div>';
            }
        });
        tprint += '</div>';

        document.getElementById("time").innerHTML=tprint;

    });

    

}


const handleseat =(seatdata) =>{

    sessionStorage.setItem("seatdata",JSON.stringify(seatdata));

    // console.log(seatdata);
    

}


window.onload = timeonload;