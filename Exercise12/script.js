
// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);

// let color = `rgb(${r}, ${g}, ${b})`;

function getrandomcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
let boxes = document.getElementsByClassName("box");
console.log(boxes);

let i;
for (i = 0; i < 5; i++) {
    boxes[i].style.backgroundColor = getrandomcolor();
    boxes[i].style.color = getrandomcolor();
}
