//Destructuring 2 Objetos

const producto = {
    nombre : "Tablet" ,
    precio : 300 , 
    descuento : true
}

const cliente = {
    nombre : "Erik" ,
    premium : true
}

const {nombre , precio , descuento  } = producto 
const {nombre : nombreCliente , premium } = cliente

console.log(nombreCliente)