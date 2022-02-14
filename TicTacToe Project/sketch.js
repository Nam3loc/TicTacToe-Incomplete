let board = [
  ['X','O','X'],
  ['X','O','O'],
  ['O','X','X'],
];

let player1 = 'X';
let player2 = 'O';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 3;
  
  for (let i = 0; i<3; i++) {
    for (let j = 0; j<3; j++) {
      let x = w * i + w/2;
      let y = h * j + h/2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(4);
      if (spot == player1) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == player2) {
        let xsize = w/4
        line (x - xsize, y - xsize, x + xsize, y + xsize);
        line (x + xsize, y - xsize, x - xsize, y + xsize);
      }
      text (spot, x, y);
    }
  }
}