console.log(require('fs').readFileSync('/dev/stdin', 'utf8').split('').reduce((a, b) => a - b) === 0 ? 1 : 0);