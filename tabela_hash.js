const caderno = new Map();

caderno.set("maça", 0.67);
caderno.set("leite", 1.49);
caderno.set("abacate", 1.49);

console.log(caderno.get("abacate"));
console.log(caderno.get("maça"));

function encontrarDuplicados(arr) {
  const tabelaHash = new Map();
  const duplicados = [];

  for (const num of arr) {
    if (tabelaHash.has(num)) {
      duplicados.push(num);
    } else {
      tabelaHash.set(num, true);
    }
  }

  return duplicados;
}
const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7];
const resultado = encontrarDuplicados(arr);

console.log(resultado); // [2, 3]
