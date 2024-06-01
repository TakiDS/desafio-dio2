console.log('Bom dia')
let vitorias = 45
let rank= ''
function classeRankeda(){
    if (vitorias<=10){
        rank='Ferro'
    } else if (vitorias>=11&&vitorias<20){
        rank='Bronze'
    }else if (vitorias>=20&&vitorias<50){
        rank='Prata'
    }else if (vitorias>=51&&vitorias<80){
        rank='Ouro'
    }else if (vitorias>=80&&vitorias<90){
        rank='Diamante'
    }else if (vitorias>=90&&vitorias<100){
        rank='Lendario'
    }else if (vitorias>=100){
        rank='Imortal'
    }
    console.log(`O Herói tem de saldo de ${vitorias} vitorias está no nível de ${rank}.`)
    
}
classeRankeda()