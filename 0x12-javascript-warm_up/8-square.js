#!/usr/bin/node
const size = isNaN(parseInt(process.argv[2])) ? 'Missing size' : String.repeat('X', parseInt(process.argv[2]));

console.log(size.split('\n').join('\n'));
