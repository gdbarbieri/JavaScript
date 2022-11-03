function receberSomenteOsParesDeIndicesPares(array){
    return array.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0 

        return numeroPar && indicePar
    
    })

    }


console.log(receberSomenteOsParesDeIndicesPares([2,3,4,5,6,7,8,9,10]))