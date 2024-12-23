// Helper function to get the digit at a specific place
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to determine the number of digits in a number
function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the maximum number of digits in the array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// Radix Sort Function
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Place each number into the corresponding bucket
    for (let num of nums) {
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }

    // Reassemble the array from the buckets
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

// Example Usage
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Unsorted Array:", numbers);

const sortedNumbers = radixSort(numbers);
console.log("Sorted Array:", sortedNumbers);
