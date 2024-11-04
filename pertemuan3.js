let angka = [1, 3, 4, 5, 6, 7];

function checkSum(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
}
checkSum(angka);

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      console.log(array[i] + " dibandingkan dengan " + max);
      max = array[i];
    }
  }
  return max;
}
console.log(findMax(angka));

function findOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findOdd(angka));
