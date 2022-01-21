//Unir 2 Objetos


const producto = {
    nombre : "Tablet" ,
    precio : 300 , 
    descuento : true
}

const cliente = {
    nombre : "Erik" ,
    premium : true
}

//const nuevoObjeto = Object.assign (producto,cliente) -No debe de usarse porque plancha las propiedades 
//de los objetos si se llaman igual 

//SpreadOperator
//toma una copia de los objetos que queremos y los mete en el nuevo objeto pero sigue planchand las propiedades 
//const nuevoObjeto = {...producto , ...cliente}

const nuevoObjeto = {
    producto : {...producto} ,
    cliente : {...cliente}
}

console.log (nuevoObjeto);
//console.log (producto,cliente);