
#!/usr/bin/node
const firstArg = process.argv[2];

if (isNaN(parseInt (firstArg))) {
  console.log('Missing size');
} else {
  const size = parseInt (firstArg);
  let square = '';

  for (let i = 0; i < size; i++) {
    square += 'X'.repeat(size) + '\n';
  }
  console.log(square.slice(0, -1));
}
