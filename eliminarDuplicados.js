function eliminarDuplicados(arreglo){
    let A=[]
    for (let i=0; i<arreglo.length; i++){
        if(!A.includes(arreglo[i])){
            A.push(arreglo[i]);
        }
    }
    console.log ("numero de elemntos unicos",  A);
    return A.length;
}

//ejemplo
let arregloOrdenado = [1,1,2];
let unicos = eliminarDuplicados(arregloOrdenado);
console.log ("numero de elemntos unicos",  unicos);