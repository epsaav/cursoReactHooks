//Iteradores de JS 

const tecnologias = ['HTML', 'Java' , 'React', 'Vue']

tecnologias.forEach (function(tech){
    console.log(tech)
})

// solo itera dentro del array origina sin poder crear uno nuevo marca undefined
const arrayForeach = tecnologias.forEach (function(tech){
    return tech
})

//crea un nuevo array 
const arrayMap = tecnologias.map (function (tech){
    return tech
})

console.table (arrayForeach)

console.table (arrayMap)