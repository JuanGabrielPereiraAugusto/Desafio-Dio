//captando informações

let nome = ("juan")
let experiencia = (9001)

//mensagen de acordo com o xp
if (experiencia < 1000) {
    console.log("Seu nivel de aventureiro é: Bronze")
}
else if (experiencia >= 1000 && experiencia < 2000) {
    console.log("Seu nivel de aventureiro é: bronze")
}
else if (experiencia >= 2000 && experiencia < 5000) {
    console.log("Seu nivel de aventureiro é: Prata ouro")
}
else if (experiencia >= 5000 && experiencia < 8000) {
    console.log("Seu nivel de aventureiro é: Platina Diamante")
}
else if (experiencia >= 8000 && experiencia < 9000) {
    console.log("Seu nivel de aventureiro é: ascendente")
}
else if (experiencia >= 9000 && experiencia < 10000) {
    console.log("Seu nivel de aventureiro é: imortal")
}
else {
    console.log("Seu nivel de aventureiro é: Radiante")
}
console.log("O Herói " + nome + " esta no nivel de experiencia: " + experiencia)