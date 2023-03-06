// DATA
const productName_1 = "Samsung XXII"
const productPrice_1 = 1000.50
const productName_2 = "IPhone 13"
const productPrice_2 = 1100.25
const productName_3 = "HUAWEI Mate 50"
const productPrice_3 = 1055.50

// CATALOG
let q_1 = +prompt(
    "CATALOG" + "\n" 
    + 
    "----------------" + "\n"
    +
    productName_1 + "\n" 
    +
    productPrice_1 + "\n"
    +
    "----------------" + "\n"
    +
    "Quantity:"
)
let q_2 = +prompt(
    "CATALOG" + "\n" 
    + 
    "----------------" + "\n"
    +
    productName_2 + "\n" 
    +
    productPrice_2 + "\n"
    +
    "----------------" + "\n"
    +
    "Quantity:"
)
let q_3 = +prompt(
    "CATALOG" + "\n" 
    + 
    "----------------" + "\n"
    +
    productName_3 + "\n" 
    +
    productPrice_3 + "\n"
    +
    "----------------" + "\n"
    +
    "Quantity:"
)
// CALCULUS
let total_1 = productPrice_1 * q_1
let total_2 = productPrice_2 * q_2
let total_3 = productPrice_3 * q_3

// OUTPUT
alert (
    "----------------------------------" + "\n"
    +
    "Your order:" + "\n"
    +
    "\n"
    +
    productName_1 + " x " +  q_1 + " = " + total_1 + "\n"
    +
    productName_2 + " x " +  q_2 + " = " + total_2 + "\n"
    +
    productName_3 + " x " +  q_3 + " = " + total_3 + "\n"
    +
    "----------------------------------"
)
