//alert('Olá peter')
function calcular(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual){
        alert('[ERRO] Preencha os dados corretamente')
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_nasc.value)
        res.innerHTML = `Sua idade atual é de ${idade} anos`
        var genero = '' 
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'crianca-m.png')
            }else if(idade < 22){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'crianca-f.png')
            }else if(idade < 22){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}