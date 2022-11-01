function inverso(valor){
  const tipo = typeof valor
  
  if (tipo == "boolean"){
    return !valor
  } else if (tipo == "number"){
    return "-".concat(valor)
  }else{
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
  }
}

console.log(inverso(true))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(34))
console.log(inverso('Olá'))