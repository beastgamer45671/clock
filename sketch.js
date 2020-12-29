function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(24);
  textStyle("bold");
  text("12", 190,110); 
  
  fill(255);
  textSize(24);
  textStyle("bold");
  text("3", 280,200); 
  
  fill(255);
  textSize(24);
  textStyle("bold");
  text("6", 195,310); 
  
  fill(255);
  textSize(24);
  textStyle("bold");
  text("9", 90,200); 
  

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("green");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("blue");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("red");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end2);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end3);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end);
  stroke("green");
  line(0,0,60,0);
  pop();
  
  stroke("Black");
  point (0,0);

  }