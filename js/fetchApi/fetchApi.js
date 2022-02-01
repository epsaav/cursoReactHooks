//Fetch Api

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

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

/*const consultarApiAwait = async ()=>{
    const respuestas = await fetch(url)
    const resultados = await (respuestas.json())
        resultados.forEach((comentario)=>{
            console.log(comentario.email)
        }
        )       
}*/


//Multiplies Async Await

const consultaApiawaitmultiple = async () => {
    const inicio = performance.now() 

    const respuesta = await fetch(url)
    const respuesta2 = await fetch(url2)
    const resultado = await respuesta.json()
    const resultado2= await respuesta2.json()
    resultado.forEach((comunicado)=>{
        console.log(comunicado)
    })
    
    resultado2.forEach((comunicado)=>{
        console.log(comunicado.url)
    })

    const fin = performance.now()

    //Template String 
    console.log(`Ejecucion PRIMER Async`)
}

//optimizando multiples asyncawait

const multipleAsyncawaitopt = async ()=>{

    const inicio = performance.now() 

    const [respuesta, respuesta2] = await Promise.all ([fetch(url),fetch(url2)])
    const resultado = await respuesta.json()
    const resultado2= await respuesta2.json()

    const fin = perfomance.now()

    console.log(`Ejecución SEGUNDO Async ${fin -inicio} ms`)
}

consultaApiawaitmultiple()


