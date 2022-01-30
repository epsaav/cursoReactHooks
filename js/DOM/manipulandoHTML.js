const inputName = document.querySelector (".nombre")
const inputPassword = document.querySelector(".password")
const forma = document.querySelector("#formulario")

inputPassword.addEventListener('input',()=>{
    inputPassword.type="text" 
    setTimeout(()=>{
    inputPassword.type="password"        
},500)
})

const alerta = document.createElement('DIV')
alerta.classList.add('alerta') 

const nombre = document.querySelector (".nombre").value
const password = inputPassword.value 

if (nombre==='' && password==''){
   // alert(nombre)
    alerta.textContent =' Todos los campos son requeridos' 
    alerta.classList.add('error')
}
else{
    alerta.textContent ='...Todo bien'
    alerta.classList.add('exito')
}

forma.appendChild(alerta)