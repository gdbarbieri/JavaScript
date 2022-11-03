function filtrarNumeros(array){
    const resultado =[]
    for(let item of array){
        if(typeof item === "number"){
            resultado.push(item)
        }
    }
    return resultado
}

console.log(filtrarNumeros(["Javascript",1, "3","web",20]))
console.log(filtrarNumeros(["a", "c"]))