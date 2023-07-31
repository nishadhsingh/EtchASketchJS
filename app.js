let dataMap = new Map();

const container = document.querySelector(".container");
const rect = container.getBoundingClientRect();
const DEFAULT_SIZE = 500;
console.log({ container, rect });
let color =
{
    red: 255,
    green: 255,
    blue: 255

};

let boxProperties = new Map();
const BW = "blackWhite";
const COLOR = "color";
const ERASE = "Erase";
const RAINBOW = "RainBow";
let mode = BW;
let currentColor = color;


function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function resize(event)
{
    let newsize = prompt("Please Enter New Size");
    N_side = newsize;
    container.innerHTML = '';
    drawcontainer();
}


function changeMode(event) {
    let value = event.originalTarget.value;
    mode = value;
    currentColor.red=255;
    currentColor.green=255;
    currentColor.blue=255;
}

function getRandomArbitrary(min, max) {
    return Math.round(~~(Math.random() * (max - min) + min));
}
function randomRGB() {
    return rgb(getRandomArbitrary(0, 255), getRandomArbitrary(0, 255), getRandomArbitrary(0, 255));
}


function changeColor() {
    currentColor.red = currentColor.red - 10;
    currentColor.blue = currentColor.blue - 10;
    currentColor.green = currentColor.green - 10;
}


function getColor() {
    console.log(mode);
    switch (mode) {
        case BW:
            return (rgb(0, 0, 0));
            break;
        case COLOR:
            changeColor();
            return (rgb(currentColor.red, currentColor.green, currentColor.blue));
            break;
        case ERASE:
            return rgb(240, 248, 255);
            break;
        case RAINBOW:
            
            return randomRGB();
            break;
        default:
            break;
    }
}



dataMap.set("WIDTH", Math.trunc(rect.width));
dataMap.set("HEIGHT", Math.trunc(rect.height));


let boxCount = 1;
let boxWidth = 20;
let boxHeight = 20;
let containerPadding = "10vh";
let N_side = 16;
let Square_count = N_side * N_side;
let containerDimention = 500;
let boxDimention = Math.trunc(500 / N_side);

console.log({ boxDimention });

function drawcontainer() {
    container.style.gridTemplateColumns = `repeat(${N_side}, 1fr)`
    container.style.gridTemplateRows = `repeat(${N_side}, 1fr)`
    container.style.height = DEFAULT_SIZE + "px";
    container.style.width = DEFAULT_SIZE + "px";

    for (let i = 0; i < N_side * N_side; i++) {
        drawBox()
    }

}
function upDateColor(event) {
    let box = event.originalTarget;
    box.style.backgroundColor = getColor();
}


function drawBox() {
    let ele = document.createElement("div");
    ele.classList.add("box");
    ele.addEventListener("pointerover", upDateColor);
    ele.addEventListener("touchmove", upDateColor);
    container.appendChild(ele);

}


drawcontainer();