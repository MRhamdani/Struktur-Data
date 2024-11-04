const baris1 = [7, 8, 9];
const baris2 = [7, 9, 10, 11];

const Similarity = baris1.filter(
  (num) => baris2.filter((val) => val === num).length > 0
);
console.log(Similarity);
