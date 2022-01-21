//manipulando Arrays

const tecnologias = ['Java' , 'React', 'Vue']

//****ESTOS METODOS MODIFICAN EL ARREGLO ORIGINAL**//

//Eliminar un elemento del array 
//Eliminar al inicio
//tecnologias.push ('GraphQL');
//Eliminar al final
//tecnologias.unshift ('GraphQL');

//spread operator para crear un nuevo arreglo con la copia de otro
const nuevoArreglo =['GraphQL', ...tecnologias]
const nuevoArreglo =[...tecnologias , 'GraphQL']
console.table (nuevoArreglo);

//Eliminar elementos del array 
 tecnologias.pop() //Elimina al final
 tecnologias.shift() // Elimina al inicio 

 //reemplazar el array 

 const nuevoArray = tecnologias.filter ( function (tech) {
     return tech  === 'React'
 }

 )