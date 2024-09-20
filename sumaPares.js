function sumaPares(matriz){
    let suma = 0;
    for (let i=0; i < matriz.length; i++){
        for (let j=0; j < matriz[i].length; j++){
            if (matriz[i][j] % 2 == 0){
                suma += matriz[i][j];
            }

        }
    }
    return suma;
}

const matrizEjemplo = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(sumaPares(matrizEjemplo));
