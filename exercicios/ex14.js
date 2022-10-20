function frutas(fruta){
    console.log("Maçã [1] " + 
                "Kiwi [2] " + 
                "Melancia [3] ")
    switch (fruta){
        case 1: 
          console.log("Maçã:")
          console.log("Não vendemos essa fruta aqui!")
          break
        
        case 2: 
           console.log("Kiwi: ")
           console.log("Estamos em escassez de Kiwi!!")
           break;
        
        case 3: 
           console.log("Melancia: ")
           console.log("Aqui está, são 3R$ o kilo ")
           break;

        default: 
          console.log("Erro no sistema")
          break

    }
}
frutas(5)