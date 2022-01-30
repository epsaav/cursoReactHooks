//eventos con los inputs

const inputName = document.querySelector('.nombre')

//Cada que escribo en el input se activa el evento 
inputName.addEventListener ('input', ()=> console.log('Estoy escribiendo'))

//cuando presionas una tecla
inputName.addEventListener('keydown', ()=> console.log('Presionando una tecla'))

//EJERCICIO Cambiar el tipo de input y mostrar la primera letra cuando se escribe

const inputPassword = document.querySelector ('.password')

inputPassword.addEventListener('input',cambiaLetra)

function cambiaLetra(){
    inputPassword.type = 'text'
    setTimeout (()=>{inputPassword.type='password'}, 1000)
}

