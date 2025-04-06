function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('selectab')

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número para poder gerar a tabuada')
    }
    else{
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ''
        
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}