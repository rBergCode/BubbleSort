var lines = [];
var temp;
var nbrLines;
var pas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nbrLines = width;
  pas = height / width;
  actualHeight = pas;

  for (i = 0 ; i < nbrLines ; i++){
    append(lines, actualHeight);
    actualHeight += pas;
  }
  shuffle(lines,true);
}

function draw() {
  background(0);

  //livres
  for (i = 0 ; i < nbrLines ; i++){
    stroke('#FFFFFF');
    line(i,height,i,height-lines[i]);
  }

  //Trier
  for (i = 0 ; i < width ; i++){
    if (lines[i] > lines[i + 1]){
        temp = lines[i];
        lines[i] = lines[i + 1];
        lines[i + 1] = temp;
    }
  }
}
