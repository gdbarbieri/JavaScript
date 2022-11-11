//com promisse
const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
     return new Promise((resolve, reject)=>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
     })
}

//Recurso do ES8
//Objetivo de simplificar o uso de promises...
let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('A')
    const tc = await getTurma('A')
    return [].concat(ta,tb,tc)
}// retorna um objeto AssyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))