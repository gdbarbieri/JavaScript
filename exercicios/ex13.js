function diaUtilOuNao(x){
    switch (x){
        case 1: case 7:
            console.log('final de semana')
            break;

        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia Útil")
            break;
        
        default: 
        console.log("Dia inválido!!")
        
    }
}

diaUtilOuNao(8)