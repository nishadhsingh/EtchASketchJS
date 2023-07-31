let dataMap = new Map();

const container = document.querySelector(".container");
const rect = container.getBoundingClientRect();
const DEFAULT_SIZE = 500;
console.log({ container, rect });

let boxProperties = new Map();



dataMap.set("WIDTH", Math.trunc(rect.width));
dataMap.set("HEIGHT", Math.trunc(rect.height));


let boxCount = 1;
let boxWidth = 20;
let boxHeight = 20;
let containerPadding = "10vh";
let N_side = 100;
let Square_count = N_side * N_side;
let containerDimention = 500;
let boxDimention = Math.trunc(500 / N_side);

console.log({ boxDimention });

function drawcontainer() {
    container.style.gridTemplateColumns = `repeat(${N_side}, 1fr)`
    container.style.gridTemplateRows = `repeat(${N_side}, 1fr)`
    container.style.height = DEFAULT_SIZE+"px";
    container.style.width = DEFAULT_SIZE+"px";

    for (let i = 0; i < N_side * N_side; i++) {
        drawBox()
    }

}
function upDateColor(event) {
    let box = event.originalTarget;
    box.style.backgroundColor = "#000000";
}






function drawBox() {
    let ele = document.createElement("div");
    ele.classList.add("box");
    ele.addEventListener("pointerover", upDateColor);
    ele.addEventListener("touchmove", upDateColor);
    container.appendChild(ele);

}


drawcontainer();