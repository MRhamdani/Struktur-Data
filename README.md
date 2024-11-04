# Struktur-Data

Isinya berupa materi tiap pertemuan dan tugas-tugas yang ada

## Tugas1

### Soal no 1

```bash
  const angka = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const Angka = angka.reduce((frequency, num) => {
  frequency[num] = (frequency[num] || 0) + 1;
  return frequency;
}, {});

console.log(Angka);

Outputnya:
{ '1' : 2, '2' : 3 '3' : 4}
```

### Soal no 2

```bash
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


Outputnya:
Ada = [ 1 , 4 ]
Tidak Ada = []
```

### Soal no 3

```bash
const baris1 = [7, 8, 9];
const baris2 = [7, 9, 10, 11];

const Similarity = baris1.filter(
  (num) => baris2.filter((val) => val === num).length > 0
);
console.log(Similarity);

Outputnya:
[ 7, 9 ]
