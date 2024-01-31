const numbers = [];

while (numbers.length < 6) {
  const random = Math.floor(Math.random() * 10) + 1;

  if (!numbers.includes(random)) {
    numbers.push(random);
  }
}

console.log(numbers);