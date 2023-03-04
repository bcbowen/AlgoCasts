// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let nums = [0, 1, 1];

  if (n <= 2) return nums[n];

  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums[n];
}

module.exports = fib;
