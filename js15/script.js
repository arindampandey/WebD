let a = prompt("Enter first number : ")

let b = prompt("Enter second number : ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed sorry !!")
}

let sum = parseInt(a) + parseInt(b)

try {
    console.log("The sum is ", sum * z)
} catch (error) {
    console.log("Error aa gyaaaa")
}

finally {
    console.log("The program is ended successfully.")
}

// Finally always runs after try and catch but it is important inside functions , even after returning the values the finally part runs.