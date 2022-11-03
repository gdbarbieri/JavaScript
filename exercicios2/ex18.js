function calcularMedia(numeros){
    const resultado = numeros.reduce(function(primeiro, segundo ){
        return primeiro + segundo 
    })
    return resultado / numeros.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))