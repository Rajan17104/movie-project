const handleOnload = () => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    let sessiondata = JSON.parse(sessionStorage.getItem("moviedata"));

    let movie = localmovie.filter((v) => v.mid === sessiondata);
    
    let print = '<div class="data">'
        movie.map((v) => {
            // print += '<img src="'+ v.poster +'"'+'style="width:230px;height:270px"'+'>'+'</img>'
            // print += '<div class="name">'+'time :'+v.time +'</div>'+'<br>'
            // print += '<div class="name">'+'name :'+v.name +'</div>'+'<br>'
            // print += '<div class="name">'+'description :'+v.desc +'</div>'+'<br>'
            // print += '<div class="name">'+'option :'+v.opt +'</div>'+'<br>'
        });
    print += '</div>';

    console.log('jgj');

    document.getElementById("movieData").innerHTML = print;

    // event.preventDefault();
};

window.onload = handleOnload();