//Template Strings 

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoFuncion (){
    return "Este texto viene de función"
}

console.log (producto  + " $" + precio + " Dolares,Marca:" + marca)

//Template Strings
console.log(`${producto} $ ${precio} dolares,marca:${marca} ${textoFuncion()}`)