function ComprarCarro(carro){
    switch(carro){
        case 'hatch':
            console.log("Compra efetuada com sucesso!")
            break
        
        case 'sedan': case 'motocicletas': case 'caminhonetes':
            console.log("Tem certeza  que não prefere este modelo?")
            break
        
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui !! ")
            break
    }
}

ComprarCarro('hatch')
ComprarCarro('sedan')
ComprarCarro('motocicletas')
ComprarCarro('caminhonetes')
ComprarCarro('mustang')