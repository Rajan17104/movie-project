const handlecinema =()=>{

    let localdata = JSON.parse(localStorage.getItem("cinema"));

    let cprint = '<div class = "cinemaData">'
        localdata.map((v) =>{
            cprint += '<div class="data">'
                cprint += '<div class="Cname">'+'name :'+v.name +'</div>'+'<br>'
                cprint += '<div class="Cname">'+'location :'+v.location +'</div>'+'<br>'
                cprint += '<div class="Cname">'+'facilites :'+v.facilites +'</div>'
            cprint += '</div>'
        });
    cprint += '</div>'
    
    document.getElementById("cinema").innerHTML=cprint;



    let localmovie = JSON.parse(localStorage.getItem("movie"));
        
    let mprint = '<div class = "movieData">'
        localmovie.map((v) =>{
            mprint += '<div class="data">'
                mprint += '<img src="'+ v.poster +'"'+'style="width:230px;height:270px"'+'>'+'</img>'
                mprint += '<div class="Mname">'+'name :'+v.name +'</div>'+'<br>'
                mprint += '<div class="Mname">'+'description :'+v.desc +'</div>'+'<br>'
                mprint += '<div class="Mname">'+'option :'+v.opt +'</div>'+'<br>'
                mprint += '<div class="Mname">'+'time :'+v.time +'</div>'+'<br>'
            mprint += '</div>'
        });
    mprint += '</div>'

    document.getElementById("movie").innerHTML=mprint



    let localseat = JSON.parse(localStorage.getItem("seat"));
   
    let sprint ='<div class = "seatdata">'
        localseat.map((v) =>{   
            sprint += '<div class="data">'
                sprint += '<div class="Sname">'+'seat :'+v.seat.length +'</div>'+'<br>'
            sprint += '</div>'
        })
    sprint += '</div>'

    document.getElementById("seat").innerHTML=sprint


}




let sessiondata = JSON.parse(sessionStorage.getItem("moviedata"));

sessionStorage.setItem("moviedata",JSON.stringify(sessiondata));


// const newcinemadata =(moviedata)=>{

//     sessionStorage.setItem("movedata",JSON.stringify(moviedata));

// }




const searchcinema = () =>{

    let input = document.getElementById("searchcinema").value;

    input = input.toLowerCase();

    let x =document.getElementsByClassName('Cname');

    for(i=0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display='none';
        }else{
            x[i].style.display="";
        }   
    }

}


const searchmovie =() =>{

    let input = document.getElementById("searchmovie").value;

    input = input.toLowerCase();

    let x =document.getElementsByClassName('Mname');

    for(i=0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display='none';
        }else{
            x[i].style.display="";
        }   
    }

}


window.onload = handlecinema;



