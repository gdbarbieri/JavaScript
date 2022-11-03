function depesasTotais(produtos) {
    const resultado = produtos.map(produtos => produtos.preco).reduce(function (primeiro, segundo) {
        return primeiro + segundo
    })
    return resultado
}

console.log(depesasTotais([{ nome: "Jornal Online", categoria: "Informação", preco: 89.99 },
{ nome: "Cinema", categoria: "Lazer", preco: 150 }]))

console.log(depesasTotais([{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
{nome: "Mackbook Pro", categoria:"Eletrônicos", preco: 30999.90}]))
