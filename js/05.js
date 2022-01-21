//Objetos - Manipulacion

const producto = {
    nombre : "Tablet" ,
    precio : 300 , 
    descuento : true
}

//Object.freeze (producto) Freeze -No deja modificarlo
//Object.seal (producto) Seal -Modificar propiedades existentes, no permite añadir ni eliminar


//Reescribir un valor
producto.nombre = "Algodon"

console.log (producto.nombre)

// Si no existe el valor en el objeto lo va agregar
producto.imagen = "imagen.jpg"

console.log (producto.imagen)

//Eliminar propiedades

delete producto.imagen 

console.log (producto)