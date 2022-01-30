//Eventos 

//En el clic
const heading  = document.querySelector('.heading')

//FunctionExpression

/*const clickHeading = function (){
    console.log ('Diste click en Heading')
}*/


//Arrowfunction 

/*const clickHeading = () => {
    console.log ('Diste click en Heading')
}*/

//heading.addEventListener ('click',() => console.log('diste click en el Heading') )
/*OJOO si se pone parentesis en el llamado de la funcion la manda a llamar inmediatamente 
aun sin que se ejecute el evento y marca error */
heading.addEventListener ('click', clickHeading)

//functionDeclaration
function clickHeading() {
    console.log ('Diste click en Heading')
}

// iterar con una coleccion 
const enlaces  = document.querySelectorAll('.navegacion a')

enlaces.forEach( 
  enlace => { enlace.addEventListener ('click', () => enlace.textContent ='Hola' )  }
)

