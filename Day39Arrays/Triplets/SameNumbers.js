function findRepeatedDigits() {
    const repeatedDigits = [];
    
    for (let i = 0; i < 100; i++) {
      const str = i.toString();
      
      if (str.length === 2 && str[0] === str[1]) {
        repeatedDigits.push(i);
      }
    }
    return repeatedDigits;
  }
  
  // Example usage
  const digits = findRepeatedDigits();
  console.log(`Digits repeated twice: ${digits}`);