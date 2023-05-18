let menuItems = [
    {
        icon: '<i class="fa-brands fa-servicestack"></i>',
        title: "Team",
        menu: [
            {
                title: "CEO: John Smith"
            },
            {
                title: "DEV: John Doe"
            },
        ]
    },
    {
        title: "Services",
        menu: [
            {
                title: "Web & App Development"
            },
            {
                title: "App Testing"
            },
            {
                title: "Web Design"
            },
        ]
    },
    {
        title: "Reviews",
    },
    {
        title: "Order",
        url: "/order",
    },
    {
        title: "Contacts",
    },
]

const renderMenu = function (parentElement, items) {
    let html = `<ul>`
    for(let i=0; i<items.length; i++) {
        console.log(i)
        html += `<li>
            <a href="${items[i].url ?? '#'}" onclick="renderSubMenu(${i}, ${items[i].menu != undefined})">
            ${items[i].icon ?? ''}
            ${items[i].title}
            </a>
        </li>`
    }
    html += `</ul>`
    parentElement.innerHTML += html
}

const renderSubMenu = function (index, render) {
    if(render) {
        let li = document.querySelector(`li:nth-child(${index+1})`)

        if (!menuItems[index].open) {
            renderMenu(li, menuItems[index].menu)
            menuItems[index].open = true
        } else {
            navBar.innerHTML = ``
            renderMenu(navBar, menuItems)
            menuItems[index].open = false
        }
    }
}

renderMenu(navBar, menuItems)