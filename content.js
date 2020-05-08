let userCanvas
let canvas

function setup() {
    userCanvas = document.querySelector('canvas')
    canvas= createCanvas(userCanvas.width, userCanvas.height)
    canvas.position(userCanvas.offsetLeft, userCanvas.offsetTop)
}

function draw() {
    if(userCanvas.width !== canvas.width || userCanvas.height !== canvas.height) {
        resizeCanvas(userCanvas.width, userCanvas.height)
    }
    clear()
    drawCursor(mouseX, mouseY)
}

function drawCursor(x, y) {
    if(x > width || y > height) return 
    stroke(0)
    circle(x, y, 7)
    line(0, y, width, y)
    line(x, 0, x, height)
    fill(0)
    text(`(${x}, ${y})`, x + 5, y - 5)
}