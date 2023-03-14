// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '  012 456
//       '  ###  '  01   56
//       ' ##### '  0     6
//       '#######'

function pyramid(n) {
  let line;
  const colCount = n * 2 - 1;
  const mid = Math.floor((2 * n - 1) / 2);
  for (let r = 0; r < n; r++) {
    line = '';
    for (let c = 0; c < colCount; c++) {
      if (mid - r <= c && mid + r >= c) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

module.exports = pyramid;
