function calcSalario(horasTrab, valorHora){
    let salario = horasTrab * valorHora
    return 'Salário igual a R$ '.concat(salario)
}

console.log(calcSalario(150, 40.5))