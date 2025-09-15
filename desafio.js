let vitoria = 150
let derrota = 20

function calcularvitoria(vitoria, derrota){
    return vitoria - derrota
}

let resultado = calcularvitoria(vitoria, derrota)

if (resultado < 10){
    console.log("Ferro")
}
else if (resultado >= 11 && resultado <= 20){
    console.log("Bronze")
}
else if (resultado >= 21 && resultado <= 50){
    console.log("Prata")
}
else if (resultado >= 51 && resultado <= 80){
    console.log("Ouro")
}
else if (resultado >= 81 && resultado <= 90){
    console.log("Diamante")
}
else if (resultado >= 91 && resultado <= 100){
    console.log("Lendario")
}
else {
    console.log("Imortal")
}

console.log(`O Herói tem de saldo de vitorias: ${resultado} e esta no nivel:${calcularvitoria(vitoria, derrota)}`)