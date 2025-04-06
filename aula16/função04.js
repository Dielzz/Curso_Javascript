//função para calculo de fatorial
function fatorial(n){
    fat = 1
    for (let c = n; c >= 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))//120
console.log(fatorial(4))//24
 