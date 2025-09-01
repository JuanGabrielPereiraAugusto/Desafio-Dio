// Estrutura de controle Switch
let fruta = "banana"

switch (fruta) {
    case "laranja":
    console.log("Suco de Laranja")
    break
    case "banana":
    case "manga":
    console.log("Vitamina de Banana ou manga")
    break
    case "maça":
    console.log("Suco de Maça")
    break
    default:
    console.log("Não tem suco")
    break
}