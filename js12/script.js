let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    // alert("Button Clicked !!")
    document.querySelector(".box").innerHTML = "<b>The Button is clickeddddd <b>"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>The Button is clicked for two times <b>"
})

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please!!")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})