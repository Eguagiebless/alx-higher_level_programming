#!/usr/bin/node
const firstArg = process.argv[1]; 

if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
