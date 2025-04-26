let bubble1;
let bubble2;


function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(300,200);
}

function draw() {
  background(0);
 
  let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
  if(d < bubble1.r + bubble2.r){
    background(200,0,100);
  }
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();
}

class Bubble {
  constructor(x, y, r=50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright){
this.brightness = bright;
  }

  contains(px, py){
    let d = dist(px, py, this.x, this.y);
    if(d < this.r){
      return true;
    } else{
      return false;
    }
  }
  
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
