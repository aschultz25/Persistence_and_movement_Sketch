let x, y;
let r, g, b
let size
let xSpeed, ySpeed
let timeChange

function setup() {
  createCanvas(600, 400)
  x = width / 2
  y = height / 2
  r = random(255)
  g = random(255)
  b = random(255)
  size = 50
  xSpeed = 3
  ySpeed = 3
  timeChange = 0
}

function draw() {
  background(220)
  

  x += xSpeed
  y += ySpeed
  
  if (x > width - size/2 || x < size/2) {
    xSpeed *= -1
    changeColor()
  }
  if (y > height - size/2 || y < size/2) {
    ySpeed *= -1
    changeColor()
  }
  
  timeChange += 0.05
  size = 50 + 10 * sin(timeChange)
  
  fill(r, g, b)
  ellipse(x, y, size, size)
}

function mousePressed() {
  xSpeed = random(-5, 5)
  ySpeed = random(-5, 5)
  changeColor()
}

function changeColor() {
  r = random(255)
  g = random(255)
  b = random(255)
}
