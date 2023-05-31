const handleOnload = () => {

    let localmovie = JSON.parse(localStorage.getItem("movie"));
    let moviedata = JSON.parse(sessionStorage.getItem("moviedata"));

    let movie = localmovie.filter((v) => v.mid === moviedata);
    
    let mprint = '<div class="data">'
        movie.map((v) => {
            mprint += '<img src="'+ v.poster +'"'+'style="width:230px;height:270px"'+'>'+'</img>'
            mprint += '<div class="name">'+'name :'+v.name +'</div>'+'<br>'
            mprint += '<div class="name">'+'time :'+v.time +'</div>'+'<br>'
            mprint += '<div class="name">'+'description :'+v.desc +'</div>'+'<br>'
            mprint += `<div class="btn"><a href=../user/book.html onclick="handlebook('${v.name}')">Book Now</a>`;
        });
    mprint += '</div>';

    // mprint += '<button id="btn" onclick="handlebook('${v.name}')">'+'Book Now'+'</button>'   

    console.log('jgj');

    document.getElementById("movieData").innerHTML = mprint;

    // event.preventDefault();

};

const handlebook = (movieName) =>{

    sessionStorage.setItem("moviename",JSON.stringify(movieName));

    window.location ="../user/book.html";

    event.preventDefault();

}




window.onload = handleOnload();