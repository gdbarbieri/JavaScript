const soma = function (x,y){
    return x + y 
}

const imprimirResultados = function ( a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultados(3,4)
imprimirResultados(3, 4, function ( x, y){
    return x - y
})