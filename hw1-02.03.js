// DATA
const productName = "Samsung XXII"
const productPrice = 1000.50

// CATALOG
let q = +prompt(
    "CATALOG" + "\n" 
    + 
    "----------------" + "\n"
    +
    productName + "\n" 
    +
    productPrice + "\n"
    +
    "----------------"
)

// CALCULUS
let total = productPrice * q

// OUTPUT
alert (
    "----------------------------" + "\n"
    +
    "Your order:" + "\n"
    +
    productName + " x " +  q + " = " + total + "\n"
    +
    "----------------------------"
)
