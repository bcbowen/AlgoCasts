// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    let isValid = true;

    if (min && node.data < min) isValid = false;
    if (max && node.data > max) isValid = false;

    if (isValid && node.left){
        if (node.left.data > node.data) {
            isValid = false;
        } else {
            isValid = validate(node.left, min, node.data);
        }
    
    }
    
    if (isValid && node.right) {
        if (node.right.data < node.data) {
            isValid = false;
        } else {
            isValid = validate(node.right, min = node.data, max);
        }
    }

    return isValid;
}

module.exports = validate;
