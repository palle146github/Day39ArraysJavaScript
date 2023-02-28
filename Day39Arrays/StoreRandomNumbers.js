const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 900) + 100);

// print the array of random numbers
console.log("Random numbers: ", numbers);

// find the 2nd largest and 2nd smallest elements without sorting the array
let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }

  if (num < smallest) {
    secondSmallest = smallest;
    smallest = num;
  } else if (num < secondSmallest && num !== smallest) {
    secondSmallest = num;
  }
}

// print the 2nd largest and 2nd smallest elements
console.log("Second largest number: ", secondLargest);
console.log("Second smallest number: ", secondSmallest);