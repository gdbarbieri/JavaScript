 function jurosS(capitalInicial , taxaJuros, tempoAplicacao){
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
 }

 console.log(jurosS(100, 10/100, 2))

 function jurosC(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial  * (1 + taxaJuros) ** tempoAplicacao
 }
 console.log(jurosC(100, 10/100, 2))