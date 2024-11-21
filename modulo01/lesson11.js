// let teste = function (){
//     console.log('ola, mundo')
// }
// teste()

// function showFunction(successCallback, errorCallback){
//     if(true){
//         successCallback('Requisição bem sucedida')
//     } else {
//         errorCallback('Erro na requisição')
//     }
// }

// let successCallback = function(message){
//     console.log(message)
// }

// let errorCallback = function(message){
//     console.error(message)
// }

// showFunction(successCallback, errorCallback)

let arrSum = function(arr){
    let sum = 0

    for(let i= 0; i< arr.length; i++){
        sum += arr[1]
    }

    return sum

}


let arr = [10, 20, 40, 30]
let sum = arrSum(arr)
console.log(sum)

