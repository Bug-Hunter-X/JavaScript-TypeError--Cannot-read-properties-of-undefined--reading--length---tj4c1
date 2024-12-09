function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only if x is a string or array
  } else {
    return 0; // Or throw an error: throw new Error('Invalid input type'); 
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(10)); // Output: 0
console.log(foo({})); // Output: 0