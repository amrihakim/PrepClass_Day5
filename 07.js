// Buatlah script untuk menambahkan kata "Handuk" ke awal array, dan "Celana" ke akhir array.

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];

console.log("Sebelum: "+ stuff);

stuff.unshift("Handuk");
stuff.push("Celana");

console.log("Sesudah: "+ stuff);