// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let r = 0; r < n; r++) {
        let line = ''; 
        for (let c = 0; c < n; c++)
        {
            if (c <= r){
                line += '#';
            } else {
                line += ' ';
            }

        }
        console.log(line);
    }
    
}

module.exports = steps;


/*
function steps(n) {
    let step = 1;
    let line = '';
    for(let i = 0; i < n; i++){
        line = '';
        for (let j = 0; j < step; j++) {
            line += "#";
        }
        for (let k = i + 1; k < n; k++)
        {
            line += ' ';
        }
        
        console.log(line);
        step++;
        
    } 
}

*/