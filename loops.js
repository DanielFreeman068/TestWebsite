let firstTask = 0
for(let i = 1; i < 1001; i++){
    firstTask += i;
}
console.log(firstTask);

let secondTask = 0
for(let i = 93; i < 846; i += 2){
    secondTask += i
}
console.log(secondTask);

let thirdTask = 1;
for(let i = 6; i < 401; i += 6){
    thirdTask *= i;
}
console.log(thirdTask);

let fourthTask = 17
let isPrime = true;
if (fourthTask <= 1) {
    console.log(`${fourthTask} is not a prime number.`);
} else {
    for (let i = 2; i <= Math.sqrt(fourthTask); i++) {
        if (fourthTask % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${fourthTask} is a prime number.`);
    } else {
        console.log(`${fourthTask} is not a prime number.`);
    }
}

let taskFive = [];
for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        taskFive.push(number);
    }
}
console.log(taskFive);