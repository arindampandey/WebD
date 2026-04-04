function placeorder() {
    let delay  = Math.random()*2000
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Order Placed!!")
        }, delay);
    })
}

placeorder()