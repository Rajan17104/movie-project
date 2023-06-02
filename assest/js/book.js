// const bookonload = () => {

//     let localmovie = JSON.parse(localStorage.getItem("movie"));
//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//     let movieName = JSON.parse(sessionStorage.getItem("moviename"));

//     let Mdata = localmovie.filter((v) => v.name === movieName);

//     // console.log(Mdata);

//     Mdata.map((v) => {

//         let marr = [];

//         marr.push(v.cid);
//         console.log(marr);
        
//         let mprint = '<div class = "cinemaData">'

//         mprint += '<div class="Cname">' + 'Movie name :' + v.name + '</div>' + '<br>'
           
//         mprint += '</div>'
//         document.getElementById("movie").innerHTML = mprint;


//         let carr = [];

//         carr.push(localdata);
//         // console.log(carr);

//         carr.map((a) => {
//             a.map((b) => {
//                 let carr1 = [];
//                 carr1.push(b.cid);
//                 // console.log(b.cid);

//                 for(let i=0; i<marr.length; i++){

//                 if (b.cid === parseInt(v.cid)) {
//                     console.log(parseInt(v.cid));

//                     let localdata = JSON.parse(localStorage.getItem("cinema"));

//                     let Cdata = localdata.filter((cv) => cv.cid === parseInt(v.cid));

//                     console.log(Cdata);
                    
//                     let cprint = '<div class = "cinemaData">'

//                         Cdata.map((v) => {
//                             // cprint += '<div class="data">'
//                             // cprint += '<a href="../user/cinemaDetails.html" class ="data" onclick="handleCinemaDetails(' + v.cid + ')">'
//                             cprint += '<div class="Cname">' + 'name :' + v.name + '</div>' + '<br>'
//                             cprint += '<div class="Cname">' + 'location :' + v.location + '</div>' + '<br>'
//                             cprint += '<div class="Cname">' + 'facilites :' + v.facilites + '</div>'
//                             // cprint += '</div>'
//                             // cprint += '</a>'

//                         });

//                     cprint += '</div>'
//                     // document.getElementById("cinema").innerHTML = Cdara
//                     document.getElementById("cinema").innerHTML = cprint;

//                 };       
//                 }
//             });
//         });

//     });

//     // document.getElementById("bookDisplay").innerHTML= marr[0].Mdata;
//     event.preventDefault();
// }


const bookonload =() =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    let movieName = JSON.parse(sessionStorage.getItem("moviename"));

    let Mdata = localmovie.filter((v) => v.name === movieName);

    let arr =[];

    Mdata.map((v) =>{
        arr.push(v.cid);
        console.log(arr);

        let mprint = '<div class = "cinemaData">'

            mprint += '<div class="Cname">' + 'Movie name :' + v.name + '</div>' + '<br>'
                   
        mprint += '</div>'
        document.getElementById("movie").innerHTML = mprint;        

        let localdata = JSON.parse(localStorage.getItem("cinema"));

        let cprint = '<div class = "cinemaData">'

        localdata.map((v) =>{
            for(let i=0; i<arr.length; i++){

                if(v.cid === parseInt(arr[i])){
                    cprint += '<div class="Cname">' + 'name :' + v.name + '</div>' + '<br>'
                    cprint += '<div class="Cname">' + 'location :' + v.location + '</div>' + '<br>'
                    cprint += '<div class="Cname">' + 'facilites :' + v.facilites + '</div>'+'<br>'
                    cprint += '<div class="Cname">' + '</div>'+'<br>'
                }

            }   
        })

        cprint += '</div>'

        document.getElementById("cinema").innerHTML=cprint

    });

}




window.onload = bookonload;