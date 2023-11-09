const fs = require('fs');

// here is how to create "hello node" in welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});