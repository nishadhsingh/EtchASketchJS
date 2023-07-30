let dataMap = new Map();

const container = document.querySelector(".container");
const rect = container.getBoundingClientRect();
console.log({container,rect});

let boxProperties = new Map();



dataMap.set("WIDTH",Math.trunc(rect.width));
dataMap.set("HEIGHT",Math.trunc(rect.height));


let boxCount = 1;
let boxWidth = 20;
let boxHeight = 20;
let containerPadding = "10vh";
let N_side = 16;
let Square_count = N_side*N_side;

console.log(dataMap);

function drawGrid()
{
    for(let i = 1;i<=Square_count;i++)
    {
        drawBox(boxWidth,boxHeight);
        
    }
    container.style.width = N_side*boxWidth+"px";
    container.style.height = N_side*boxHeight+"px";
    console.log({container});
}
function upDateColor(event)
{
    let box = event.originalTarget;
    box.style.backgroundColor =  "#000000";
}






function drawBox(width,height)
{
    let ele =  document.createElement("div");
    ele.style.width = width+"px";
    ele.style.height = height+"px";
    ele.classList.add("box");
    ele.addEventListener("pointerover",upDateColor);
    ele.addEventListener("touchmove",upDateColor);
    container.appendChild(ele);
    
}


drawGrid();