function anoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
     
    if (( divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos){
        console.log("Bissexto")
    } else {
        console.log("Não Bissexto")
    }
}

anoBissexto(2020)
anoBissexto(2100)
anoBissexto(2002)