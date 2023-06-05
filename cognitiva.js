function pesquisarElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}

const lista = [10, 5, 3, 8, 2, 6];
const elementoPesquisado = 8;

let indiceEncontrado = pesquisarElemento(lista, elementoPesquisado);

indiceEncontrado = indiceEncontrado !== -1 ? indiceEncontrado : false

if (indiceEncontrado) {
    console.log(`O elemento ${elementoPesquisado} foi encontrado no índice ${indiceEncontrado} da lista.`);
} else {
    console.log(`O elemento ${elementoPesquisado} não foi encontrado na lista.`);
}