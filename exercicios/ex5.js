function convert(valorDecimal){
    valorEmReais = `R$  ${valorDecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}

convert(0.1 + 0.2)