//Factorial of 6

//Using reduce method
let arr = [6, 5, 4, 3, 2, 1]

const fact = (a, b) => {
    return a * b
}
console.log("Factorial = ", arr.reduce(fact))


//Using for loop
let fac = 1;
for (let i = 1; i < 6 + 1; i++) {
    fac = fac * i;
}
console.log("Factorial = ", fac)