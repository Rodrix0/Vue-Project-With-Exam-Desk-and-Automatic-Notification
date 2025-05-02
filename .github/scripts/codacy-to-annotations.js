const fs = require('fs');

const data = JSON.parse(fs.readFileSync('codacy-results.json', 'utf8'));

data.results.forEach(issue => {
  const { filename, message, line } = issue;
  const output = `::warning file=${filename},line=${line}::${message}`;
  console.log(output);
});
