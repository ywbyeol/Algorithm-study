const fs = require('fs');
const [num1, num2] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num2Arr = num2.trim().split('');
const temp1 = num1 * num2Arr[2];
const temp2 = num1 * num2Arr[1];
const temp3 = num1 * num2Arr[0];
console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp1 + temp2 * 10 + temp3 * 100);
