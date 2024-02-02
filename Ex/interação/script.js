function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var atual = new Date()
    var hora =atual.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora < 12){
        img.src = 'img/pexels2.png'
        document.body.style.background = '#CC9047'
    }else if(hora>=12 && hora <18){
        img.src = 'img/pexels1.png'
        document.body.style.background = '#7F3C00'
    }else{
        img.src = 'img/pexels3.png'
        document.body.style.background ='#473754'
    }
}
