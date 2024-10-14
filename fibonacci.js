function fibonacci_rec_dict(n, dict = {}){
    if (n in dict){
        return dict[n];
    }
    if (n <= 1){
        return n;
    } 
    dict[n] =  fibonacci_rec_dict(n - 1,dict) + fibonacci_rec_dict(n - 2,dict);
    return dict[n];
}

//ejemplo
let n=3;
let result= fibonacci_rec_dict(n);

console.log("El numero fibonacci en la posision " + n + " es " + result);
