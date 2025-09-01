//vetores
let pokemon = ["pikachu", "charmander", "bulbasaur"]

//métodos de array
pokemon.pop() //remove o ultimo elemento do array
pokemon.push("squirtle") //adiciona um elemento no final do array
pokemon.shift() //remove o primeiro elemento do array
pokemon.unshift("mewtwo") //adiciona um elemento no inicio do array
pokemon[1] = "chikorita" //altera o valor do elemento na posição indicada
pokemon.splice(1, 0, "pidgey") //adiciona um elemento na posição indicada, sem remover nenhum elemento (o segundo parametro indica quantos elementos serão removidos)

console.log(pokemon)

//usar sites como https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array para consultar mais métodos de array

