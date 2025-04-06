//função que verifica se um numero é par ou impar
function parimpar(n){  
    if (n %2 == 0){
        return 'PAR'
    }
    else{
        return 'IMPAR'
    }
}

let res = parimpar(11)
console.log(res)