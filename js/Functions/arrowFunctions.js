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
//const resultado = tecnologias.includes((tech)=> tech === 'SS' )

//Find -Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find (numero => numero >4)  

//Every - Retorna true o false  si todos cumplen la condicion
//const resultado = numeros.every (numero => numero > 0)

//Reduce Acumulado en el total , en este caso 0 inicializa el acumulado
//const resultado = numeros.reduce((total,numero) => numero + total , 0)

// Filter Crea un nuevo array en base a una condicion 
//const resultado = tecnologias.filter(tech => tech != 'HTML')
//const resultado = numeros.filter(numero => numero > 4)

//For each 
//const resultado = tecnologias.forEach( (tech,index) => console.log (index))

//Map crea un arreglo a partir de la iteracion de otro 
//const arrayMap = tecnologias.map (tech => tech )
//console.log (arrayMap)


///https://doesitmutate.xyz/ pagina que indica que array methods mutan y cuales no 

