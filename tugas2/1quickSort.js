// Quick Sort Function
function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (we'll pick the last element in this example)
  const pivot = arr[arr.length - 1];

  // Arrays to hold the elements less than and greater than the pivot
  const left = [];
  const right = [];

  // Partition the array into left and right
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right arrays, then combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
const numbers = [10, 7, 8, 9, 1, 5];
console.log("Unsorted Array:", numbers);

const sortedNumbers = quickSort(numbers);
console.log("Sorted Array:", sortedNumbers);
