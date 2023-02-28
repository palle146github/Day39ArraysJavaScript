function primeFactors(n) {
    let factors = [];
    
    // Check if 2 is a factor of n repeatedly
    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
    
    // Check for odd prime factors up to the square root of n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    
    // If n is a prime number greater than 2, add it to the factors array
    if (n > 2) {
      factors.push(n);
    }
    
    return factors;
  }
  
  // Example usage
  const n = 84;
  const factors = primeFactors(n);
  console.log("The prime factors of " + n + " are: " + factors.join(","));