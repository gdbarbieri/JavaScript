function frutas(fruta){
    switch (fruta){
        case 'Maçã': 
          console.log("Não vendemos essa fruta aqui!")
          break
        
        case 'Kiwi':
           console.log("Estamos em escassez de Kiwi!!")
           break;
        
        case 'Melancia':
           console.log("Aqui está, são 3R$ o kilo ")
           break;

        default: 
          console.log("Erro no sistema")
          break

    }
}
frutas('Melancia')
frutas('Maçã')
frutas('Kiwi')
frutas('manga')