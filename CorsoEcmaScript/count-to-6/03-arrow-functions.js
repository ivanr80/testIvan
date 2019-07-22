const inputs = process.argv.slice(2);
const result = inputs.map(value => value[0])
    .reduce( (prev, curr) => prev + curr);

console.log(`[${inputs}] becomes "${result}"`);

