fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from welcome.txt:', data);
  });