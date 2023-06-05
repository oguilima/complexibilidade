const arr = [1, 2, 3, 4, 5];

//  ----------- O(1) ------------- 
function imprimePrimeiroElemento(array) {
    if (array.length > 0) {
        console.log(array[0]);
    }
}

imprimePrimeiroElemento(arr);




// ----------- O(log n) -----------
function buscaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (array[meio] === alvo) {
            return meio;
        } else if (array[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }

    return -1;
}

const alvo = 3;
const indice = buscaBinaria(arr, alvo);




// ------------ O(n) ------------- 
function imprimePosicaoArr(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimePosicaoArr(arr)




// ----------- O(n^2) -------------
function imprimeTodosOsPares(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

imprimeTodosOsPares(arr);




// ------------- O(2^n)  -------------
function gerarSubconjuntos(elementos) {
    const n = elementos.length;
    const totalSubconjuntos = Math.pow(2, n);
    const subconjuntos = [];

    for (let i = 0; i < totalSubconjuntos; i++) {
        const subconjunto = [];

        for (let j = 0; j < n; j++) {
            if ((i & Math.pow(2, j)) !== 0) {
                subconjunto.push(elementos[j]);
            }
        }

        subconjuntos.push(subconjunto);
    }

    return subconjuntos;
}

const elementos = ['A', 'B', 'C'];
const subconjuntos = gerarSubconjuntos(elementos);
console.log(subconjuntos);

