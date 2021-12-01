// Setup.
const inputs = (await Deno.readTextFile("./data/final.txt"))
    .split("\n")
    .map(Number);

// Part One.
const single = inputs.reduce((increases, value, index) => {
    return increases + (index > 0 && value > inputs[index - 1] ? 1 : 0);
}, 0);
console.log('Answer Part One: ', single);

// Part Two.
const sliding =  inputs.reduce((increases, _, index) => {
    const a = inputs[index] + inputs[index + 1] + inputs[index + 2];
    const b = inputs[index+1] + inputs[index + 2] + inputs[index + 3];
    return increases + (index < inputs.length - 3  && b > a ? 1 : 0);
}, 0);
console.log('Answer Part Two: ', sliding);