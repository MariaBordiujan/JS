// main logic

const renderProducts = function () {
    for (let i=0; i<products.length; i++) {
        
        catalogDiv.innerHTML += `
            <div class="product">
                <h2>${products[i].name}</h2>
                <img src="${products[i].image}"/>
                <p>${products[i].price}</p>
                <button 
                    onclick="buy(${i})"
                    ${products[i].available ? '' : 'disabled'}>BUY
                </button>
            </div>
        `
    }
}

const buy = function (index) {
    cart.push(index)
    renderCart()
}

// HW1
const renderCart = function () {

    let sum = 0
    for (let i=0; i<cart.length; i++) {
        let selected_index = cart[i]
        sum += products[selected_index].price
    }

    if (cart.length == 0) {
        cartDiv.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            empty
            `
    } else {
        cartDiv.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            items: ${cart.length} |
            price: ${sum} mdl
            `
    }
}