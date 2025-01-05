function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let middleIndex = Math.floor(array.length / 2);
    let pivo = array[middleIndex];

    let menores = [];
    let maiores = [];

    for (let i = 0; i < array.length; i++) {
      if (i === middleIndex) continue; // Pula o pivô
      if (array[i] <= pivo) {
        menores.push(array[i]);
      } else {
        maiores.push(array[i]);
      }
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
  }
}

console.log(quicksort([3, 15, 21, 1, 44, 12]));
