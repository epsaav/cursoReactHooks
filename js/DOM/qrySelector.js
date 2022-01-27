//Selectores del DOM 

//Clase
//const heading = document.querySelector ('.heading')
const heading = document.querySelector ('#heading')


/*console.log(heading)
console.log(heading.id)
console.log(heading.textContent)
console.log(heading.tagName)
console.log(heading.className)
//console.log(heading)*/

//const enlaces = document.querySelector ('.navegacion a')
const enlaces =document.querySelectorAll ('.navegacion a')
enlaces.forEach(elemento => elemento.textContent = 'Cambio el enlace')

//console.log(enlaces)

