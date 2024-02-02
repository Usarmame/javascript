console.log('O seu nome é Edwin.')
var idade = -11

if(idade>=0 && idade<18 ){
    console.log('Você é menor de idade.')
}else if(idade >=18 && idade<=59){
    console.log(`Você já é maior de idade.`)
}else if(idade>=60){
    console.log(`Você é idoso.`)
}else if(idade<0){
    console.log('Idade inválida.')
}