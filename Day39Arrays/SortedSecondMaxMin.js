// Step 1: Generate 10 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
  let number = Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999
  numbers.push(number);
}

// Step 2: Sort the array
numbers.sort((a, b) => a - b);

// Step 3: Find the 2nd largest and 2nd smallest elements
let secondLargest = numbers[numbers.length - 2];
let secondSmallest = numbers[1];

console.log("Original Array: " + numbers);
console.log("Second Largest: " + secondLargest);
console.log("Second Smallest: " + secondSmallest);