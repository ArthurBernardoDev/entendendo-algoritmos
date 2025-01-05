function buscaMenor(arr) {
  let menor = arr[0];
  let menorIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      menorIndex = i;
    }
  }

  return menorIndex; 
}

function ordenacaoporSelecacao(arr = []) {
  let novoArr = [];

  while (arr.length > 0) {
    let menorIndex = buscaMenor(arr);
    novoArr.push(arr[menorIndex]); 
    arr.splice(menorIndex, 1); 
  }

  return novoArr;
}

console.log(ordenacaoporSelecacao([10, 2, 5]));
