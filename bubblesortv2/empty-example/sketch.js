var lines = [];
var temp;

function setup() {
  createCanvas(windowHeight, windowHeight);
  for (i = 0 ; i < windowHeight ; i++){
    append(lines, i);
  }
  shuffle(lines,true);
}

function draw() {
  background(0);

  //livres
  for (i = 0 ; i < windowHeight ; i++){
    stroke('#FFFFFF');
    line(i,height,i,height-lines[i]);
  }

  //Trier
  for (i = 0 ; i < windowHeight ; i++){
    if (lines[i] > lines[i + 1]){
        temp = lines[i];
        lines[i] = lines[i + 1];
        lines[i + 1] = temp;
    }
  }
}
