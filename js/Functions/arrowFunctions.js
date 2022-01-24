// Arrow functions
/*const sumar =  (numero) => numero + 2  

const sumaArrow = () => 2 + 2

console.log(sumar(5))

console.log(sumaArrow())*/

//ARROW FUNCTIONS CON ARRAY METHODS

const tecnologias = ['HTML', 'React' , 'JS']
const numeros  = [2,6,10]

/*const nuevoArray =  tecnologias.map( tech => {
    if (tech === 'HTML') {
        return 'GraphQL'
    }
    else {
        return tech
    }
}
)

const  nuevoArray2 = tecnologias.filter(tech => tech != 'React') */




//OTROS ARRAY METHODS

/*FILTER

const nuevoArray = tecnologias.filter( (tech) => tech === 'React')*/

//Regresa true o false si es que la condicion se cumple con algun elemento 
//const resultado = numeros.some(numero => numero > 8)

//Si en el arreglo existe un elemento 
const resultado = tecnologias.includes((tech)=> tech === 'SS' )

//Find -Devuelve el primer elemento que cumpla la condicion

console.log (resultado)

