function Car (maxSpeed = 200, delta = 5){
    //atributo privado
    let actualSpeed = 0
     
    //metodo publico 
    this.speedUp = function () {
        if ( actualSpeed + delta <= maxSpeed){
            actualSpeed += delta
        }else{
            actualSpeed = maxSpeed
        }
    }
    

    // metodo publico 
    this.getActualSpeed = function (){
        return actualSpeed
    }

}

const uno = new Car
uno.speedUp()
console.log(uno.getActualSpeed())

const ferrari = new Car(350, 20)
ferrari.speedUp()
ferrari.speedUp()
ferrari.speedUp()
console.log(ferrari.getActualSpeed())
