function hello(name) {
    console.log("Heyy " + name + " how are you ??")
    console.log("Heyy " + name + " where are you ??")
    console.log("Heyy " + name + " you are looking good !")
    console.log("Heyy " + name + " you have a good sense of humor")
}

hello("Rohan")


function sum(a, b, c = 1) {
    // console.log(a+b)
    return a + b + c
}

result1 = sum(3, 5)
result2 = sum(4, 6)
result3 = sum(31, 8, 4)

console.log("The sum of these numbers is : ", result1)
console.log("The sum of these numbers is : ", result2)
console.log("The sum of these numbers is : ", result3)


// Arrow Function 
const func = (x)=>{
    console.log("I am an arrow function",x)
}

func(1)
func(2)
func(3)