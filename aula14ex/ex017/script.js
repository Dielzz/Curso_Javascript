//alert('Olá peter')
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#b399a3'
}
else if(hora >= 12 && hora <= 18){
    img.src = 'tarde.png'
    document.body.style.background = '#eccda1'
}
else{
    img.src= 'noite.png'
    document.body.style.background = '#182325'
}
}