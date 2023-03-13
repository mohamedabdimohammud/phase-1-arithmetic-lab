// multiply test
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;
multiply = 62;

// random test
let random = Math.floor(Math.random() * 1000) + 1;
if (random <= 0) {
  random += 1;
}

// mod test
let num3 = 20;
let num4 = 8;
let mod = num3 % num4;
mod = 4;

// max test
let numbers = [5, 12, 20, 1, 3];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
max = 20;
