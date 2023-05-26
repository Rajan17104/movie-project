let submitRef = document.getElementById("seatForm");


let seatarr = [];
let update = false;
let uid = null;


const handleonload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) => {

        let optRef = document.getElementById("cinema-option");

        let optElem = document.createElement("option");
        let optTax = document.createTextNode(v.name);

        optElem.appendChild(optTax);

        optElem.setAttribute("value", v.cid);


        optRef.appendChild(optElem);

    });

    let localseat = JSON.parse(localStorage.getItem("seat"));

    if (localseat) {
        localseat.map((val) => {

            let localdata = JSON.parse(localStorage.getItem("cinema"));
            let localmovie = JSON.parse(localStorage.getItem("movie"));

            let cdata = localdata.filter((v) => v.cid === val.cid)[0].name
            let mdata = localmovie.filter((v) => v.mid === val.mid)[0].name
            

            handleseatData(cdata, mdata, val.time, val.seat.length, val.seat); 

        })

        document.getElementById("table").style .display ='block'

    };

};


const handlemovie = () => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let opt = document.getElementById("cinema-option").value;
    console.log(opt);

    let mData = localmovie.filter((v, i) => v.cid === opt);
    console.log(mData[0].time);

    let print;

    mData.map((v, i) => {
        print += '<option value=' + v.mid + '>' + v.name + '</option>'
    });

    document.getElementById("movie-option").innerHTML = print;

}

const handlemovieTime = () => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    console.log(localmovie);

    let optTime = document.getElementById("movie-option").value;
    console.log(optTime);


    let mTime = localmovie.filter((v) => v.mid === parseInt(optTime));
    console.log(mTime);

    let print = '';

    mTime.map((v, i) => {
        print += '<option>' + v.time + '</option>'
    });

    document.getElementById("timeOption").innerHTML = print;

}



const handleinsert = () => {

    let localseat = JSON.parse(localStorage.getItem("seat"));

    console.log(localseat);

    let cinema = parseInt(document.getElementById("cinema-option").value);
    let movie = parseInt(document.getElementById("movie-option").value);
    let time = document.getElementById("timeOption").value;
    let seat = document.getElementById("seat").value;
    // let time = document.getElementById("timeOption").value;

    let rno = Math.floor(Math.random() * 10000);

    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let localmovie = JSON.parse(localStorage.getItem("movie"));

    let cinemaName;
    let MovieName;

    localdata.map((v) => {
        if (v.cid === cinema) {
            cinemaName = v.name;
        };
    });
    console.log(cinemaName);


    localmovie.map((v) => {
        if (v.mid === movie) {
            MovieName = v.name;
        };
    });
    console.log(MovieName);


    for (let i = 0; i < seat; i++) {
        seatarr.push(0);
    };

    if (localseat) {
        localseat.push({
            cid: cinema,
            mid: movie,
            sid: rno,
            time: time,
            seat: seatarr
        });
        localStorage.setItem("seat", JSON.stringify(localseat));
    } else {
        localStorage.setItem("seat", JSON.stringify([{
            cid: cinema,
            mid: movie,
            sid: rno,
            time: time,
            seat: seatarr
        }]));
    }

    handleseatData( cinemaName, MovieName, time, seat ,rno);

    event.preventDefault();
}


const handleseatData = ( cinemaoption, movieoption, time, seat ,rno) => {


    let tableref = document.getElementById("Tabledata");

    let tr = document.createElement("tr");
    tr.setAttribute("id", "row" + rno);

    let cinemaOptionE = document.createElement("td");
    let cinemaOptionT = document.createTextNode(cinemaoption)
    cinemaOptionE.appendChild(cinemaOptionT);
    tr.appendChild(cinemaOptionE);

    let movieOptionE = document.createElement("td");
    let movieOptionT = document.createTextNode(movieoption)
    movieOptionE.appendChild(movieOptionT);
    tr.appendChild(movieOptionE);

    let timeE = document.createElement("td");
    let timeT = document.createTextNode(time)
    timeE.appendChild(timeT);
    tr.appendChild(timeE);

    let seatE = document.createElement("td");
    let seatT = document.createTextNode(seat)
    seatE.appendChild(seatT);
    tr.appendChild(seatE);

    let seatActionE = document.createElement("td");

    let button = document.createElement("button");
    let btn1 = document.createTextNode("Edit");
    button.appendChild(btn1);
    button.setAttribute("onclick", "handleupdate(" + rno + ")")

    let button1 = document.createElement("button");
    let btn2 = document.createTextNode("Delete");
    button1.appendChild(btn2);
    button1.setAttribute("onclick", "handleRemove(" + rno + ")")

    seatActionE.appendChild(button);
    seatActionE.appendChild(button1);

    tableref.appendChild(tr);

    tr.appendChild(seatActionE)

    // document.getElementById("table").style.display="block";

    event.preventDefault();

}


const handleRemove = (rno) => {

    let localseat = JSON.parse(localStorage.getItem("seat"));

    let trref = document.getElementById("row" + rno)
    trref.remove()

    localdata.map((v, i) => {
        if (v.sid === rno) {
            localseat.splice(i, 1);
            localStorage.setItem("seat", JSON.stringify(localseat));
        }
    })
  
    event.preventDefault();


}


const handleupdate = (rno) => {

    console.log('da');

    let localseat = JSON.parse(localStorage.getItem("seat"));
 
    let Fdata = localseat.filter((v, i) => v.sid === rno);

    document.getElementById("cinema-option").value = Fdata[0].cid
    document.getElementById("movie-option").value = Fdata[0].mid
    document.getElementById("timeOption").value = Fdata[0].time
    document.getElementById("seat").value = Fdata[0].seat.length;
 
    update = true;
    uid = rno;

    // handlemovie();

    // document.getElementById("cinema-option").value = cid;

    // event.preventDefault();
}


const handledes = () => {

    if(update){
        handleupdateData(); 
    }else{
        handleinsert();
    }
    
    event.preventDefault();
    
}


const handleupdateData = () => {
   
    let newcinemaname = document.getElementById("cinema-option").value;
    let newmoviename= document.getElementById("movie-option").value;
    let newtime = document.getElementById("timeOption").value;
    let newseat = document.getElementsByName("seat").value;

    let localseat = JSON.parse(localStorage.getItem("seat"));

    let uData = localseat.map((a) => {
        console.log(a);
        if (a.sid === uid) {
            return {
                sid:uid,
                cid:newcinemaname,
                mid: newmoviename,  
                time:newtime,
                seat:newseat.length
            }
        } else {
            return a;
        }

    });

    localseat[uid]=uData;

    localStorage.setItem("movie", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newcinemaname;
    tr.children[1].innerHTML = newmoviename;
    tr.children[2].innerHTML =  newtime;
    tr.children[3].innerHTML = newseat.length;

   event.preventDefault();


}




window.onload = handleonload;

submitRef.addEventListener("submit", handledes);