// Eventos con el submit 

const forma = document.querySelector('#formulario')

forma.addEventListener('submit',e => {
e.preventDefault()

//obtener valores directamente de los objetos se le llama chaining
const inputName = document.querySelector('.nombre').value 
const inputPassword =  document.querySelector('.password').value

if (inputName ==='' || inputPassword ==='') { console.log('Se requiere cualquiera de los dos campos')}
else{
    console.log('Todo bien')
}
})

