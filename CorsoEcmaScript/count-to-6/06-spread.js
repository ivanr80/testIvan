 //The minimum of [18,5,7,24] is 5

const nums = process.argv.slice(2);

console.log(`The minimum of [${nums}] is ${Math.min(...nums) }`);