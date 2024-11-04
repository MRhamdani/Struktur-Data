// INI TUGAS 1
const angka = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const Angka = angka.reduce((frequency, num) => {
  frequency[num] = (frequency[num] || 0) + 1;
  return frequency;
}, {});

console.log(Angka);
