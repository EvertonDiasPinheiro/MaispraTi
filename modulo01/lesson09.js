// 1 Soma dos Elementos de um Arry

let sum = 0
let arr = [10, 20, 40, 30]



for(let i = 0; i < arr.length; i++){
    sum += arr[i]

}
console.log(arr.length)
////////////////////////

let max = arr[0]

for(let j = 0; j <arr.length; j++){
    if(arr[j]  > max){
        max = arr[j]
    }
}
console.log(max)

// 3 reverter um Array

let reversed = []
for(let k = arr.length - 1; k >= 0; k --){
    reversed.push(arr[k])
}
console.log(reversed)

// 3 criei um novo Array contedo apenas o numeros pares

let evens = [ ]

for(let m = 0; m < arr.length; m++){
    if(arr[m] %2 === 0){
        evens.push(arr[m])
    }
}

console.log(evens)

//5 contar ocorrencias de um valor
let vet = [10, 10, 7, 5, 10]
let value = 10
let count = 0

for(let l = 0; l < vet.length; l++){
    if(vet[l] === value) {
        count++
    }
}
console.log(`O valor ${value} ocorre ${count} vezes no valor. `)


//arrays/vetores multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//console.table(matriz)
//console.log(matriz[0][2])

for(let i = 0; i <matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++)
        console.log(`Elemento na pósição [${i}][${j}]: ${matriz[i][j]}`)
}