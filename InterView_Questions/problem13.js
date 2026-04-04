let cart = [
  { name: "Shoes", price: 2000, quantity: 2 },
  { name: "T-shirt", price: 500, quantity: 3 }
]

function calculateTotal(cart) {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity
    }

    return total
}

console.log(calculateTotal(cart))