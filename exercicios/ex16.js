function calculator(x,sin,y){
    switch(sin){

        case '+':
            console.log( x + y)
            break
        
        case '-':
            console.log( x - y)
            break
        
        case '*':
            console.log( x * y)
            break

        case '/':
            console.log( x / y)
            break

        default:
            console.log("Operação inválida!!")
            break
    }
}

calculator(3,'+',2)
calculator(3,'-',2)
calculator(3,'*',2)
calculator(3,'/',2)
calculator(3,'9',2)