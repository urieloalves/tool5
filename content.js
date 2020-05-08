let userCanvas
let canvas
let toolColor
let colorPicker

function setup() {
    userCanvas = document.querySelector('canvas')
    canvas= createCanvas(userCanvas.width, userCanvas.height)
    canvas.position(userCanvas.offsetLeft, userCanvas.offsetTop)
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(10, 10);
}

function draw() {
    if(userCanvas.width !== canvas.width || userCanvas.height !== canvas.height) {
        resizeCanvas(userCanvas.width, userCanvas.height)
    }
    clear()
    toolColor = colorPicker.color()
    drawCursor(mouseX, mouseY)

}

function drawCursor(x, y) {
    if(x > width || y > height) return 
    stroke(toolColor)
    circle(x, y, 7)
    line(0, y, width, y)
    line(x, 0, x, height)
    fill(toolColor)
    text(`(${x}, ${y})`, x + 5, y - 5)
}