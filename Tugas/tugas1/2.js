const nilai = [1, 2, 2, 3, 3, 4, 5, 5];

const unique = nilai.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const ada = Object.keys(unique)
  .filter((num) => unique[num] === 1)
  .map(Number);

const range = [...Array(6).keys()].slice(1);

const tidakAda = range.filter((num) => !unique[num]);

console.log("Ada =", ada);
console.log("Tidak ada =", tidakAda);
