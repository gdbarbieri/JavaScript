const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "Caneta", "preco": 7.50 }',
    '{"nome": "Kitde Lapis", "preco": 41.22}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)