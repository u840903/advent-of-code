// Setup.
const inputs = (await Deno.readTextFile("./data/final.txt"))
    .split("")
    .map((value) => value === '(' ? 1 : -1);

// Part One.
const lastFloor = inputs.reduce((a, b) => a + b, 0);
console.log('Answer Part One: ', lastFloor);

// Part Two.
let basement;
let floor = 0;
for (let i = 0; i < inputs.length; i++) {
    floor += inputs[i];
    if (floor === -1) {
        basement = i + 1;
        break;
    }
}
console.log('Answer Part Two: ', basement);

