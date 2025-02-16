// Diberikan sebuah string yang hanya berisi karakter (, ), {, }, [, dan ], tentukan apakah string tersebut valid. String dianggap valid jika:

// 1. Setiap buka kurung harus ditutup dengan kurung yang sesuai.
// 2. Kurung harus ditutup dalam urutan yang benar..

// console.log(isValid("()[]{}")); // Output: true
// console.log(isValid("(]"));     // Output: false
// console.log(isValid("([{}])")); // Output: true
// console.log(isValid("({[}]"));  // Output: false

// PENYELESAIAN
function isValid(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char in bracketMap) {
      const top = stack.pop();
      if (top !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([{}])")); // true
console.log(isValid("({[}]")); // false
