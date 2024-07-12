#!/usr/bin/node
const size = isNaN(parseInt(process.argv[1])) ? "Missing size" : String.repeat("X", parseInt(process.argv[1]));

console.log(size.split("\n").join("\n"));
