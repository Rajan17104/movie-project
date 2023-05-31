const bookonload =() =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    let movieName = JSON.parse(sessionStorage.getItem("moviename"));


    let Mdata = localmovie.filter((v) => v.name === movieName);

    console.log(Mdata);

    Mdata.map((v) => {

        let marr =[];

        marr.push(v.cid);
        console.log(marr);

        let carr =[];
         
        carr.push(localdata);
        console.log(carr);


    })

    // document.getElementById("bookDisplay").innerHTML= marr[0].Mdata;
    event.preventDefault();
}





window.onload = bookonload;