console.log("Hii")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("boxred").style.backgroundColor = "red" 
// (Uisng id we can target only one element)

document.querySelector(".box").style.backgroundColor = "green"

//For all elements
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})