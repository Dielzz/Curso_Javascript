let vetores = []//[2,5,7,8,9]

/* metodo comum
for (let i = 0; i < vetores.length; i++){
    console.log(`O indice ${i} tem o valor ${vetores[i]}`)
}*/

//metodo simplificado
for (let i in vetores ){
    console.log(`A posição ${i} tem o valor ${vetores[i]}`)
}
