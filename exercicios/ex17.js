function salario(planoTrabalho, salarioAtual){
    switch(planoTrabalho){

        case 'A':
            aumento = salarioAtual * 0.1
            console.log("Salário atual: " + salarioAtual)
            console.log("Novo salário: " + (salarioAtual + aumento))
            console.log(" ")
            break

        case 'B':
            aumento = salarioAtual * 0.15
            console.log("Salário atual: " + salarioAtual)
            console.log("Novo salário: " + (salarioAtual + aumento))
            console.log(" ")
            break

        case 'C':
            aumento = salarioAtual * 0.2
            console.log("Salário atual: " + salarioAtual)
            console.log("Novo salário: " + (salarioAtual + aumento))
            console.log(" ")
            break

        default:
            console.log("Plano inválido!!")
            break
    }
}

salario('A', 1500)
salario('B',1500)
salario('C',1500)
salario('G',1500)