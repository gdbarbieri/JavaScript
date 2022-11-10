// operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função 

//usar spread com objeto 
const funcionario = {nome: 'Maria', salario: 1234.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array 
const grupoA = ['Guilherme','Mariana', 'Marina']
const grupoFinal =  ['Breno',  ...grupoA, 'Naves']
console.log(grupoFinal)