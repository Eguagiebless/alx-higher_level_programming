#!/usr/bin/bash
function add(a, b) {
  return a + b;
}

const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

if (isNaN(firstArg) || isNaN(secondArg)) {
  console.log('Error: Please provide two numbers');
} else {
  const sum = add(firstArg, secondArg);
  console.log(`The sum of ${firstArg} and ${secondArg} is ${sum}`);
}
