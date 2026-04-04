let products = [
    { name: "Shoes", price: 2000, category: "fashion" },
    { name: "Phone", price: 15000, category: "electronics" },
    { name: "T-shirt", price: 500, category: "fashion" }
]

function filterProducts(products, category) {
    return products.filter(product => {
        return product.category === category
    })
}

let result = filterProducts(products, "fashion")
console.log(result)