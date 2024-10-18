function palindromo(x){
    if(x <= 0){
        return false;
    }
    let entrada = x;
    let reverso = 0;
while(x>0){
    let digitof = x%10;
    reverso = reverso * 10 + digitof;
    x = Math.floor(x/10);
}
return reverso === entrada ;
}

//ejemplo
console.log(palindromo(121));
console.log(palindromo(100));
console.log(palindromo(0));
console.log(palindromo(-121));
