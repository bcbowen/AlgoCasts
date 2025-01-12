// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let result = []; 
    let index = 0;
    while (index < array.length)
    {
        result.push(array.slice(index, index + size));
        index += size;
    }

    return result;
}

module.exports = chunk;

/*
function chunk(array, size) {
    let result = []; 
    let i = 0;
    while (i < array.length) {
        let subResult = [];
        for (let j = 0; j < size && i < array.length; j++) {
            subResult.push(array[i++]);
        }
        result.push(subResult);
    }
    return result;
}

function chunk(array, size) {
    let result = []; 
    let subResult = [];
    for (let i of array)
    {
        if (subResult.length === size) {
            result.push(subResult); 
            subResult = [];
        }
        subResult.push(i);
    }
    if (subResult.length > 0)
    {
        result.push(subResult); 
    }

    return result;
}

*/