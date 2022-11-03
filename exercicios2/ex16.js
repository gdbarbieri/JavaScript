function somarNumeros(numeros) {
    let total = numeros.reduce(function (primeiro, segundo) {
        return primeiro + segundo
    }, 0)
    console.log(total)
}
somarNumeros([1,2,3])

somarNumeros([1,5,5])

somarNumeros([1,8,1])
