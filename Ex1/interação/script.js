function carregar(){
    var cor = document.getElementById('border')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var atual = new  Date()
    var hora =atual.getHours()
    msg.innerHTML = `Agora são ${hora} horas, ka Maputsu.`
    if(hora>=0 && hora < 12){
        img.src = 'img/pexels2.png'
        document.body.style.background = '#CC9047'
        cor.style.background = '#D5AF83'
    }else if(hora>=12 && hora <=18){
        img.src = 'img/pexels1.png'
        document.body.style.background = '#7F3C00'
        cor.style.background= 'rgba(226, 187, 10, 0.87)'
    }else{
        img.src = 'img/pexels3.png'
        document.body.style.background ='#473754'
        cor.style.background = '#9c6291'
    }
}

function altera(){
    var altera = document.getElementById('altera')
    altera.innerText = 'desenvolvido por eBM o primeiro'
}

function realtera(){
    var realtera = document.getElementById('altera')
    realtera.innerText = 'developed by EBM the first'
}
