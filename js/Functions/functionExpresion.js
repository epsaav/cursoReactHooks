// functionExpresion 
//La funcion se puede meter en una variable 
//***ojo en este caso no se puede invoacar la variable antes
const sumar = function (numero, numero2){
    return {
        resultado : numero  + numero2,
        mensaje : 'Hola Mundo'
    }
}
 //Destructuring Objeto
const { resultado } = sumar(20,55)

console.log (resultado)