//and &&

let idade = 18
let vistoverificado = true

console.log((idade >= 18) && (vistoverificado == true)) //true

let idade1 = 17
let vistoverificado1 = true

console.log((idade1 >= 18) && (vistoverificado1 == true)) //false

//or || 

let idade2 = 18
let vistoverificado2 = true

console.log((idade >= 18) || (vistoverificado == true)) //true
console.log((idade2 >= 18) || (vistoverificado2 == false)) //true
console.log((idade2 >= 19) || (vistoverificado2 == false)) //false

//nao !

let idade3 = 18

console.log (!(idade >= 18))
console.log (!(idade3 >=19))