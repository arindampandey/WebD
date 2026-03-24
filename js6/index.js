console.log("This is tutorial on strings")

let a = "Rohan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// console.log(a[5]); (Undefined)
console.log(a.length)

let Name = "Rohan";
let friend = "Soham"

console.log("His name is " + Name + " and his friend's name is " + friend);
console.log(`His name is ${Name} and his friend's name is ${friend}`)

let b = "Shubham"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

console.log(b.slice(1, 4))
console.log(b.slice(1))

console.log(b.replace("Sh", "77")) //Only first occurance will replace 

console.log(b.concat(a, "Hello", "Hiii"))

//NOTE: String is always immutable