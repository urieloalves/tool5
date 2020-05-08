function setup() {
    const userCanvas = document.querySelector('canvas')
    const c = createCanvas(userCanvas.width, userCanvas.height)
    c.position(userCanvas.offsetLeft, userCanvas.offsetTop)
}


function draw() {
    clear()
    drawCursor(mouseX, mouseY)
}

function drawCursor(x, y) {
    stroke(0)
    circle(x, y, 7)
    line(0, y, width, y)
    line(x, 0, x, height)
    fill(0)
    text(`(${x},${y})`, x - 60, y - 10)
}