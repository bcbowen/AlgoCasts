// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let a = {}; 
    let b = {};
    const pattern = /[^\w]/g; 
    for(let char of stringA.replace(pattern, "").toLowerCase()) {
        a[char] = a[char] + 1 || 1; 
    }
    
    for(let char of stringB.replace(pattern, "").toLowerCase()) {
        b[char] = b[char] + 1 || 1; 
    }

    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (let key in a)
    {
        if (a[key] !== b[key]) return false;
    }

    return true;
}

module.exports = anagrams;
