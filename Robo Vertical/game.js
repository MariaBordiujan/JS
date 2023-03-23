let STEP        = 36;
let robotVertical   = 0;

function render() {

    gameMap.innerHTML = `
    <div class="robot"

        style="transform:translateY(${robotVertical * STEP}px)"

    </div>
    `
}
