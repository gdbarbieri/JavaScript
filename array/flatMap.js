const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 3.7
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Guilherme',
        nota: 9.5
    }, {
        nome: 'Mariana',
        nota: 10.0
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma =turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}