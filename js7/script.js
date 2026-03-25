let arr=[1,5,9,2,3,6]

arr[0]=99; //Arrays are mutable
// console.log(arr,typeof arr)
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5])

//Methods 
console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop())
console.log(arr)

console.log(arr.push(100))
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift("jonny"))
console.log(arr)

delete arr[5]
console.log(arr)

let arr2 = [2,4,6]
let arr3 = [0,0]
console.log(arr.concat(arr2,arr3))

let x = [5,4,3,2,1]
console.log(x.sort())

let num = [2,6,7,8,1]
// num.splice(1,3)
num.splice(1,3,222,555)
console.log(num)

console.log(num.slice(1))
console.log(num.slice(1,3))

console.log(x.reverse())