const seatonload = () => {

    let seatdata = JSON.parse(sessionStorage.getItem("seatdata"));

    console.log(seatdata);

}


window.onload =seatonload;