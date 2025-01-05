// Simulação de classes para caixa e chave
class Item {
  constructor(tipo) {
    this.tipo = tipo; // Pode ser 'caixa' ou 'chave'
  }

  eUmaCaixa() {
    return this.tipo === 'caixa';
  }

  eUmaChave() {
    return this.tipo === 'chave';
  }
}

class Caixa {
  constructor(itens = []) {
    this.itens = itens; // Pode conter outros itens ou caixas
  }

  eUmaCaixa() {
    return true;
  }

  pegueItens() {
    return this.itens;
  }
}

// Implementação iterativa usando pilha
function procuraPelaChaveWhile(caixaPrincipal) {
  let pilha = []; // Pilha para armazenar caixas a serem exploradas
  pilha.push(caixaPrincipal);

  while (pilha.length > 0) {
    let caixa = pilha.pop();
    let itens = caixa.pegueItens();

    for (let item of itens) {
      if (item.eUmaCaixa()) {
        pilha.push(item); // Adiciona caixas à pilha
      } else if (item.eUmaChave()) {
        console.log("Achei uma chave!");
        return; // Finaliza a busca ao encontrar a chave
      }
    }
  }
}

// Implementação recursiva
function procuraPelaChaveRecursiva(caixa) {
  let itens = caixa.pegueItens();

  for (let item of itens) {
    if (item.eUmaCaixa()) {
      procuraPelaChaveRecursiva(item); // Chama a função para explorar a caixa
    } else if (item.eUmaChave()) {
      console.log("Achei uma chave!");
      return; // Finaliza a busca ao encontrar a chave
    }
  }
}

// Teste com caixas
let chave = new Item('chave');
let caixa1 = new Caixa([new Item('outro item')]);
let caixa2 = new Caixa([new Item('outro item'), chave]);
let caixaPrincipal = new Caixa([caixa1, caixa2]);

console.log("Busca com abordagem iterativa:");
procuraPelaChaveWhile(caixaPrincipal);

console.log("Busca com abordagem recursiva:");
procuraPelaChaveRecursiva(caixaPrincipal);
