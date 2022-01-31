//Fetch Api

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = ()=>{
    fetch(url).then (respuesta=> respuesta.json()
    //promises
).then (resultado=>{
    resultado.forEach((comentarios)=>{
    console.log(comentarios.email)
        })
})
}

//ASYNC AWAIT

const consultarApiAwait = async ()=>{
    const respuestas = await fetch(url)
    const resultados = await (respuestas.json())
        resultados.forEach((comentario)=>{
            console.log(comentario.email)
        }
        )       
}


consultarApiAwait()


