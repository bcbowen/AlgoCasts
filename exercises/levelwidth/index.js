// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let q = [];
  q.push(root);
  let result = [];
  while (q.length > 0) {
    let levelCount = q.length;
    result.push(levelCount);

    for (let i = 0; i < levelCount; i++) {
      let node = q.pop();
      for (let child of node.children) {
        q.push(child);
      }
    }
  }
  return result;
}

module.exports = levelWidth;
