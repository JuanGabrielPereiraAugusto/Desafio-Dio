// if
let ehligado = true

if (ehligado) {
    console.log("O carro está ligado")
}

let ehligado1 = false

if (ehligado1) {
    console.log("O carro está ligado") // Não executa porque ehligado1 é false e o if somente executa se for true
}

//else
let possuileite = false
let itemcomprado = ""

if (possuileite) {
    itemcomprado = "farinha"
}
else{
    console.log("vou comprar leite")
    itemcomprado = "leite"
}


console.log("item comprado:" + itemcomprado)

//else if

let poucafome = false
let mediafome = false
let muitafome = true

if (poucafome) {
    console.log("Vamos comer miojo")
}
else if (mediafome) {
    console.log("vamos comer um misto quente")
}
else {
    console.log("vamos comer v   uma pizza")
}