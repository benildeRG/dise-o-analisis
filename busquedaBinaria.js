function busquedaBinaria(A,ele,n){
if(n==0){
    return -1;
}
if(n==1){
    if (A[0]==ele){
        return 0;
    }
    else{
        return -1;
    }
}
let m = Math.floor(n/2);
if(A[m]==ele){
    return m;
}
else if(A[m]<ele){
    let resultado = busquedaBinaria(A.slice(m+1),ele, n-(m+1));
    if(resultado == -1){
    return -1
     }
    else{
    return m + 1+ resultado;
    }
}
else{
    return busquedaBinaria(A.slice(0,m), ele, m);
}
}
//ejemplo
let arreglo = [2,4,6,8,10,12,14,16,18,20];
let m = 4;
let resultado = busquedaBinaria(arreglo,m, arreglo.length);
console.log(resultado);
