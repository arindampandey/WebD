let cname = ""
async function brewCoffee(cname) {
    let delay = Math.random()*3000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${cname} is ready!!`)
        }, delay);
    })
}

brewCoffee("Latte").then(msg => {
    console.log(msg)
})