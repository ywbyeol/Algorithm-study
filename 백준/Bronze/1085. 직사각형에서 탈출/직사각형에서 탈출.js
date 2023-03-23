const fs = require('fs');
const [x, y, w, h] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);
console.log(Math.min(x, w - x, y, h - y));