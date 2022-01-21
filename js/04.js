//Objetos 

const producto = {
    nombre : "Tablet" ,
    precio : 300 , 
    descuento : true
}

console.log(producto)
console.log(producto.descuento)


//Destructuring Sacar valores del objeto a variables

const {nombre, precio, descuento } = producto

console.log(nombre)

// Object Literal Enhacement meter variables a un objeto

const autenticado =true
const usuario ="Erik"

const nuevoObjeto = {
    autenticado : autenticado ,
    usuario : usuario
}

console.log (nuevoObjeto)