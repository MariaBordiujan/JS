// DATA
let foodNames  = [ 'Pizza', 'Salad', 'Soup',]
let foodPrices = [ 100.00,   75.00,   50.00, ]

// LOGIC
let menu = `
##################
MENU
##################
`

for (let i=0; i<foodNames.length; i++) {
    menu += `${i+1}. ${foodNames[i]}\n`
}

menu += `choose: `

let option = parseInt( prompt(menu) ) - 1

let optionDescription = `
You've chosen
"${foodNames[option]}"
1. Portion - ${foodPrices[option]}
How many do you want?:
`

let portions = parseInt ( prompt(optionDescription) )

let cost = foodPrices[option] * portions

let orderDescription = `
Your order:
"${foodNames[option]}" : ${portions} x ${foodPrices[option]} = ${cost}
`

// HW1: add a confirm() that asks if the client wants delivery
let deliveryPrice = 50
let delivery = confirm(`${orderDescription}\n Do you want delivery?`)
if (delivery == true) {
    if (cost > 500) {
        alert('You get free delivery!')
    } else {
        alert(` The delivery will cost you 50 \n Total cost: ${cost + deliveryPrice}`)
    }
} else {
    alert('Please take your order')
}