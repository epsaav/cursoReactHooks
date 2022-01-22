const tecnologias = ['HTML', 'Java' , 'React', 'Vue']

//destructuring arrays
const [, , , var1] = tecnologias

console.log(var1)


//repaso Destructuring objetos

const producto = {

    nombre : 'erik' ,
    precio : 300    
} 

const {precio} = producto

console.log(precio);