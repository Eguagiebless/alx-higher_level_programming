#!/usr/bin/node
const numOccurrences = isNaN(parseInt(process.argv[2])) ? 0 : parseInt(process.argv[2]);

for (let i = 0; i < numOccurrences; i++) {
  console.log('C is fun');
}
