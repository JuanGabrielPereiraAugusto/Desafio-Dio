//return = retornar um valor de uma função

let resultado = soma (5, 5)

console.log(`O resultado é ${resultado}`)

function soma (numA , numB){
    let somatorio = numA + numB
    return somatorio
}


let UserName = getFirstName("Juan gabriel pereira augusto")

console.log(`Seja bem vindo, ${UserName}`)
function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

//split = dividir uma string em um array de substrings, e retorna o array7