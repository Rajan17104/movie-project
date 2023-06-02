const bookonload =() =>{

    let localmovie = JSON.parse(localStorage.getItem("movie"));

    let movieName = JSON.parse(sessionStorage.getItem("moviename"));

    let Mdata = localmovie.filter((v) => v.name === movieName);

    let arr =[];

    Mdata.map((v) =>{
        arr.push(v.cid);
        // console.log(arr);

        let mprint = '<div class = "data">'

            mprint += '<div class="Cname">' + 'Movie name :' + v.name + '</div>' + '<br>'
                   
        mprint += '</div>'

        document.getElementById("movie").innerHTML = mprint;        

        let localdata = JSON.parse(localStorage.getItem("cinema"));

        let cprint = '<div class = "adata">'

        localdata.map((v) =>{
            for(let i=0; i<arr.length; i++){

                if(v.cid === parseInt(arr[i])){
                    cprint += '<a href="../user/time.html" class ="data" onclick="handletime('+v.cid+')">'
                        cprint += '<div class="Cname">' + 'name :' + v.name + '</div>' + '<br>'
                        cprint += '<div class="Cname">' + 'location :' + v.location + '</div>' + '<br>'
                        cprint += '<div class="Cname">' + 'facilites :' + v.facilites + '</div>'+'<br>'
                        cprint += '<div class="Cname">' + '</div>'+'<br>'
                    cprint += '</a>'
                }
            }   
        })

        cprint += '</div>'

        document.getElementById("cinema").innerHTML=cprint

    });

}

const handletime =(timedata) =>{

    sessionStorage.setItem("time",JSON.stringify(timedata));

    // console.log(timedata);
    

}




window.onload = bookonload;