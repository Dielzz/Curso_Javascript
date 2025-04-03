//condições aninhadas
var idade = 22
console.log(`Sua idade é ${idade}.`)
if (idade < 16){
    console.log('Não vota caraio')
}
else if (idade < 18 || idade > 65){
    console.log('Voto opcional caraio')
}
else{
    console.log('Voto obrigatório caraio!')
}

