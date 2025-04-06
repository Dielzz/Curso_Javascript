let num = [2,1,3,5,4]
console.log(num)
num.sort() //coloca os numeros em sequencia
console.log(num)
num.push(7) //acrescenta um número ao final da array
console.log(num)

let indice = num.indexOf(4) // saber se o valor 4 está na lista e retornar sua posição
console.log(`O valor 4 está na posição ${indice}`)

indice = num.indexOf(8) //Quando um valor não é encontrado no indice ele retorna -1

if (indice == -1 ){
    console.log('O valor 8 não está na array')
}







