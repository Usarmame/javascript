function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    
    if(fano.value.length==0 || Number(fano.value) > ano || Number(fano.value)<0){
        window.alert('[Error]Verify your info and try again!')
    }else{
        var fsex = document.getElementsByName('sex0')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        var color = document.getElementById('all')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade>=0 && idade<=1){

            }else if(idade>=2 && idade<5){
                img.setAttribute('src', 'img/miúdo_menor.png')
                color.style.background ='#243644'
            }else if(idade>=5 && idade<7){

            }else if(idade>=7 && idade<10){

            }else if(idade>=10 && idade<=12){

            }else if(idade>=13 && idade<=15){

            }else if(idade>=16 && idade<=17){

            }else if(idade>=18 && idade<24){
                img.setAttribute('src', '../img/miúdo_17.png')
                color.style.background ='#8D55B0'
            }else if(idade>=25 && idade<34){
                    img.setAttribute('src', '../img/O_jovem_31.png')
                    color.style.background = '#AB5518'
                }else if(idade>=35 && idade<50){
                    img.setAttribute('src', '../img/O_cota.png')
                    color.style.background='#B5B6B8'
                }else if(idade>=60 && idade<90){
                    img.setAttribute('src', '../img/velho.png')
                    color.style.background=''
                }else if(fsex[1].checked){
                    gênero = 'Mulher'
                    if(idade>=3 && idade<5){
                        
                    }else if(idade>=23 && idade<39){
                        //jovem
                    }else if(idade>=40 && idade<59){
                        //adulto
                    }else if(idade>=59 && idade<70){
                        //velho 1ª
                    }else if(idade>=70 && idade<120){
                        //velho 2ª
                    }
                }
                res.style.textAlign ='center'
                res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
            }if(idade>116){
                res.innerHTML= `Tu estás morto!!`
            }
        res.appendChild(img)
    }
}

console.log('Olá.')
console.log('I did not used media queries.')