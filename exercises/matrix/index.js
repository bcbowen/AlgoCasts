// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let spiral = [];
  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }

  let minRow = 0;
  let maxRow = n - 1;
  let minCol = 0;
  let maxCol = n - 1;
  let counter = 1;
  while (minRow <= maxRow && minCol <= maxCol) {
    for (let i = minCol; i <= maxCol; i++) {
      spiral[minRow][i] = counter++;
    }
    minRow++;

    for (let i = minRow; i <= maxRow; i++) {
      spiral[i][maxCol] = counter++;
    }
    maxCol--;

    for (let i = maxCol; i >= minCol; i--) {
      spiral[maxRow][i] = counter++;
    }
    maxRow--;

    for (let i = maxRow; i >= minRow; i--) {
      spiral[i][minCol] = counter++;
    }
    minCol++;
  }

  return spiral;
}

module.exports = matrix;

/*
function matrix(n) {
  const spiral = [];
  let row = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    spiral.push(row);
  }

  let x = 0;
  let y = 0;
  const right = 0;
  const down = 1;
  const left = 2;
  const up = 3;
  let direction = right;
  const maxValue = n * n;
  for (let i = 1; maxValue; i++) {
    spiral[y][x] = i;
    switch (direction) {
      case right:
        if (x < n - 1 && spiral[y][x + 1] == 0) {
          x++;
        } else {
          direction = down;
          y++;
        }
        break;
      case down:
        if (y < n - 1 && spiral[y + 1][x] == 0) {
          y++;
        } else {
          direction = left;
          x--;
        }
        break;
      case left:
        if (x > 0 && spiral[y][x - 1] == 0) {
          x--;
        } else {
          direction = up;
          y--;
        }
        break;
      case up:
        if (y > 0 && spiral[y - 1][x] == 0) {
          y--;
        } else {
          direction = right;
          x++;
        }
        break;
    }
  }

  return spiral;
}
*/
