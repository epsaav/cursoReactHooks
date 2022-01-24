//function Declaration 
//

/*function sumar (numero,numero2 =0) {
    console.log(numero + numero2)
}

sumar (2,4)
sumar (10,30)*/


/* funcion con Array
function sumar(numero, numero2 = 0) {
    return [numero + numero2,'Hola Mundo']
}

//Destructuring  
const [resultado,holaMundo]  = sumar(2,4)*/


//Funcion regresando objeto
function sumar (numero, numero2){
    return {
        resultado : numero + numero2,
        mensaje : 'Hola Mundo'
    }
}

const {resultado, mensaje} =sumar (40,20)
console.log (resultado,mensaje)