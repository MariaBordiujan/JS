// map data
// Legend
// 0 - empty
// 1 - pac
// 2 - coin

// HW1: add 3 - bomb 
//          4 - heart

let mapData = [
    [2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,4,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1],
]

function render() {
    for (let row=0; row<10; row++) {
        for (let col=0; col<10; col++) {
            if(mapData[row][col] == 0) {
                map.innerHTML += `<div></div>`
            } else if (mapData[row][col] == 2) {
                map.innerHTML += `<div class="coin"></div>`
            } else if (mapData[row][col] == 1) {
                map.innerHTML += `<div class="pac"></div>`
            } else if (mapData[row][col] == 3) {
                map.innerHTML += `<div class="bomb"></div>`
            } else if (mapData[row][col] == 4) {
                map.innerHTML += `<div class="heart"></div>`
            }      
        } 
    }   
}    