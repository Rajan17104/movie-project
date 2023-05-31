const handleOnload = () => {

    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let Cinemadata = JSON.parse(sessionStorage.getItem("cinemadata"));

    let cinema = localdata.filter((v) => v.cid === Cinemadata);
    
    let cprint = '<div class="data">'
        cinema.map((v) => { 
            cprint += '<div class="Cname">'+'name :'+v.name +'</div>'+'<br>'
            cprint += '<div class="Cname">'+'location :'+v.location +'</div>'+'<br>'
            cprint += '<div class="Cname">'+'facilites :'+v.facilites +'</div>'
        });
    cprint += '</div>';

    console.log('jgj');

    document.getElementById("cinemaData").innerHTML = cprint;

    // event.preventDefault();
};

window.onload = handleOnload();