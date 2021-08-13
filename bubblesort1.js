var lines = [];
var temp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0 ; i < width ; i++){
    append(lines, random(height));
  }
}

function draw() {
  background(0);

  for (i = 0 ; i < width ; i++){
    stroke(255);
    line(i,height,i,height-lines[i]);
  }

  for (i = 0 ; i < width ; i++){
    if (lines[i] > lines[i + 1]){
      temp = lines[i];
      lines[i] = lines[i + 1];
      lines[i + 1] = temp;
    }
  }
}
