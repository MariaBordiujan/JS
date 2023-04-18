// game settings 
const MAP_W  = 500
const MAP_H  = 500
const BIRD_W = 50
const BIRD_H = 50

const random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let bird_left = random(0, 400)
let bird_top  = random(0, 400)

let direction = "right"
let speed_x   = 3
let score     = 0
let timerId

const initGame = function () {
    map.style.width = `${MAP_W}px`
    map.style.height = `${MAP_H}px`
}

const startBird = function () {
    bird.style.transition = `0s`
    bird_left = random(0, 400)
    bird_top  = random(0, 400)
    timerId = setInterval(moveBird, 20)
    updateBirdStyle()
    result.innerHTML = `SCORE: ${score}`
}
const moveBird = function () {
    bird_left += speed_x
    if (bird_left >= MAP_W - BIRD_W) {
        speed_x *= -1
        direction = "left"
        // HW1
        bird_top += random(10,30)
        speed_x *= 1.05
    }
    if (bird_left <= 0) {
        speed_x *= -1
        direction = "right"
        // HW1
        bird_top += random(10,30)
        speed_x *= 1.05
    }
    // HW3
    if (bird_top + BIRD_H > MAP_H) {
        clearInterval(timerId)
        result.innerHTML = `GAME OVER
                            <br>
                            <button 
                                onclick="resetBird()"
                                style="font-size: 24px;
                                font-family: Arial;
                                margin-top: 10px;
                                padding: 5px 15px;"
                            >
                            PLAY AGAIN
                            </button>`
        bird_top  = 450
    }
    updateBirdStyle()
}

const updateBirdStyle = function () {
    bird.style.transform = `
        translateX(${bird_left}px)
        translateY(${bird_top}px)
        scaleX(${direction == "left"? -1 : 1})
        `
}

const shoot = function () {
    let cx = event.layerX + BIRD_W / 2
    let cy = event.layerY + BIRD_W / 2

    let bcx = bird_left + BIRD_W / 2
    let bcy = bird_top + BIRD_H / 2

    if ( Math.abs(cx - 10 - bcx) <= 10 && Math.abs(cy - 10 - bcy) <= 10 ) {
        // HW2
        score += 5
        result.innerHTML = `SCORE: ${score}`
        console.log(score)
        
        clearInterval(timerId)
        bird.style.transition = `1s`
        bird.style.transform = `
            translateX(${bird_left}px)
            translateY(${MAP_H - BIRD_H}px)
            scaleX(${direction == "left"? -1 : 1})
            rotate(3.5turn)
            `
        setTimeout(startBird, 2000)
    }
}

// HW3
const resetBird = function () {
    speed_x   = 3
    score     = 0
    bird.style.transition = `0s`
    bird_left = random(0, 400)
    bird_top  = random(0, 400)
    timerId = setInterval(moveBird, 20)
    console.log(score)
    result.innerHTML = `SCORE: ${score}`
}

startBird()
