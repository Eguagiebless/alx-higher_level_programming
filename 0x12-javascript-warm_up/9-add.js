#!/usr/bin/node
function add(a, b) {
  return isNaN(a) || isNaN(b) ? 'Error: Not a number' : a + b;
}
const firstArg = process.argv[2];
const secondArg = process.argv[3];
console.log(add(firstArg, secondArg));
