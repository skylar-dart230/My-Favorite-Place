function setup() {
  createCanvas(600,400);
}

function draw() {
  
  //background color (R,G,B)
  //This is the sky
  background(50,123,168);
  
  strokeWeight(0);
  //(R,G,B,A)  
  fill(168,92,50,)
  //(x,y,width,height,radius (optional)
  //This is the tree trunk
  rect(380,300,40,300);
  
  fill(78,168,50)
  //(x,y,width,height)
  //This is the tree leaves
  ellipse(400,275,50,50);
  
  fill(168,157,50)
  //(x,y,width,height)
  //This is the sun   
  ellipse(40,50,50,50);
  
  
  fill(252,152,3);
  //(x,y,width,height,radius (optional)
  //This is a ray of the sun
  
  rect(50,80,10,40,10);
  
  push();
  rotate(radians(9400));
  //(x,y,width,height,radius( optional)
  //This is another ray of the sun  
  rect(75,50,10,40,10);
  pop();
  
  strokeWeight(8);
  fill(168,92,50)
  //(x,y,width,height,radius(optional)
  //This is the right leg of the bench
  strokeWeight(0);
  rect(150,350,20,60);
  
  //(x,y,height,radius(optional)
  //This is the left leg of the bench
  
  rect(65,350,20,60);
  
  
  //(x,y,height,radius(optional)
  //This is the seat of the bench
  strokeWeight(8);
 rect(55,300,130,60);
  
  //(x1,y1,x2,y2)
  //This is the outwards line of the tree
  strokeWeight(4);
  line(406,300,400,3900);
  
  //(x1,y1,x2,y2)
  //This is another outwards line of the tree  
  line(390,300,400,3900);
  
  fill(84,79,79);
  //(x,y,height,radius(optional)
  //This is the pole of the park light
 rect(440,200,20,300);
  
  fill(199,195,195);
  //(x,y,width,weight)
  //This is the light of the pole that is not on yet due to it being daytime
  ellipse(450,170,40,60);
  
  fill(143,108,71)
  //(x1,y1,x2,y2,x3,y3)
  //This is the base of the see saw
  triangle(100,650, 600,1009,280,370);
  
  //(x,y,height,radius(optional)
  //This is the seats of the see saw. It is also clled the board or lever of the see saw.
  rect(200,360,150,10);
  
  push();
  rotate(radians(2));
  //(x,y,height,radius(optional)
  //This is a ray of the sun
  fill(252,152,3)
  rect(77,55,55,13,90);
  pop();
  
  
}