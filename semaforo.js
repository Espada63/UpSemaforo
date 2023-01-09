const img = document.getElementById( "img" );
const buttons = document.getElementById( "buttons" );
let colorIndex = 0;
let intervalId = null;

const TurnOn = {
    "red":      () => img.src = "./img/vermelho.png",
    "yellow":   () => img.src = "./img/amarelo.png",
    "green":    () => img.src = "./img/verde.png",
    "automatic": () => intervalId = setInterval( changecolor, 1000 ),
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const trafficLight = ( event ) => {
    stopAutomatic();
    TurnOn[event.target.id]();
}

const changecolor = () => {
    const colors = ["red", "yellow", "green"];
    const color = colors[ colorIndex ];
    TurnOn[color]();
    nextIndex();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


buttons.addEventListener('click', trafficLight);