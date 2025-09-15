// Parâmetros são variáveis que recebem valores quando a função é chamada

torrar("pão de forma" , "juan")
torrar("pão francês", "maria")

function torrar(pao, nome){
    console.log("Torrada feita com " + pao)
    console.log("Feita para " + nome);
}

cozinhar("lagosta")

function cozinhar(comida, nome = "visitante"){
    console.log("Cozinhando " + comida);
    console.log("Cozinhado para " + nome);
}


torrar("banana")

function torrar(fruta){
    console.log("Torrada feita com " + fruta)
}


