// Cadeia de protótipos (prototype chain)
const avo = { attr: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelararMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else { 
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324  // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)
console.log(volvo)

volvo.acelararMais(100)
console.log(volvo.status())

ferrari.acelararMais(100)
console.log(ferrari.status())


