//manipulando Arrays

const tecnologias = ['HTML', 'Java' , 'React', 'Vue']

//****ESTOS METODOS MODIFICAN EL ARREGLO ORIGINAL**//

//Eliminar un elemento del array 
//Eliminar al inicio
//tecnologias.push ('GraphQL');
//Eliminar al final
//tecnologias.unshift ('GraphQL');

//spread operator para crear un nuevo arreglo con la copia de otro
//const nuevoArreglo =['GraphQL', ...tecnologias]
//const nuevoArreglo =[...tecnologias , 'GraphQL']
//console.table (nuevoArreglo);

//Eliminar elementos del array 
 //tecnologias.pop() //Elimina al final
 //tecnologias.shift() // Elimina al inicio 

 //eliminar elementos del arreglo a partir de un indice y posiciones
 //tecnologias.splice (2,1) 

 //reemplazar en un nuevo array algunos elementos de la iteracion del filter
 //sin remplazar el arreglo original ***FILTRA PARA QUITAR ELEMENTOS 
/*const nuevoArray = tecnologias.filter ( function (tech) {
 return tech === 'React'
}
) */ 

//Reemplazar directamente en la posicion 
//tecnologias[0] = 'GraphQL'

//modificar una posicion del Array y meterlo un nuevo arreglo 

const nuevoArray = tecnologias.map(function (tech){
    if (tech === 'HTML') {
       return 'GraphQL'
    }
    else {
        return tech
    }   
})

console.table (nuevoArray)
 