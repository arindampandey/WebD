
// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);

// let color = `rgb(${r}, ${g}, ${b})`;

let boxes = document.getElementsByClassName("box");
console.log(boxes);

let i;
for (i = 0; i < 5; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;

    boxes[i].style.backgroundColor = color;
}