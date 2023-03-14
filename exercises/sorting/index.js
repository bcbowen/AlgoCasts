// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex > i) {
      let k = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = k;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let i = arr[0];
      arr[0] = arr[1];
      arr[1] = i;
    }
    return arr;
  }

  let l = mergeSort(arr.slice(0, arr.length / 2));
  let r = mergeSort(arr.slice(arr.length / 2));

  return merge(l, r);
}

function merge(left, right) {
  let arr = [];
  let li = 0;
  let ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      arr.push(left[li++]);
    } else {
      arr.push(right[ri++]);
    }
  }

  while (li < left.length) {
    arr.push(left[li++]);
  }

  while (ri < right.length) {
    arr.push(right[ri++]);
  }
  return arr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
