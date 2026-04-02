// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(555)
//         }, 3000);
//     })
// }

// async and await is used for making the program wait for a function's processing 


async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()  
    // let data = await x.text() 
    console.log(data)
}

async function main() {
    console.log("Task 1")
    console.log("Task 2")

    console.log("Load Data")

    let data = await getdata()

    console.log(data)

    console.log("Process the data")

    console.log("Another task")
}

main()