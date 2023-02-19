// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {
        max: 0, 
        maxC: null
    };

    for(let char of str){
        map[char] = map[char] + 1 || 1;
        if (map[char] > map.max){
            map.max = map[char]; 
            map.maxC = char;
        }
    }

    return map.maxC;
}

module.exports = maxChar;
