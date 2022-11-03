function funcaoDaSorte(valor){
  let sorte = Math.floor(Math.random() * 10) + 1
  if(valor == sorte) {
    console.log(`Parabéns! O número sorteado foi o ${sorte}` )
  } else{
    console.log(`Que pena! O número sorteado foi o ${sorte}`)
  }
}


funcaoDaSorte(10)