let uri="http://localhost:8081/hogarmiercoles/miercoles/v1/productos"

let parametrosEnvio={
    method:"GET",
}

fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")
    console.log(datos)
    
    datos.forEach(function(producto){
        
        console.log(producto.id)
        console.log(producto.producto)
        console.log(producto.precio)
        console.log(producto.fotografia)
        console.log(producto.descripcion)
        console.log(producto.tipo)
        
        //crear un div con js
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo un div que sirve de tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
        tarjeta.classList.add("p-3")

        //creo una img de tarjeta
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.src=producto.fotografia

        //creo una etiqueta de titulo
        let titulo=document.createElement("h2")
        titulo.classList.add("fw-bold")
        titulo.classList.add("mt-2")
        titulo.textContent=producto.producto

        //creo una etiqueta de parrafo
        let precio=document.createElement("h6")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

         //creo una etiqueta de descripcion
         let descripcion=document.createElement("p")
         descripcion.classList.add("text-center")
         descripcion.textContent=producto.descripcion

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        

    })
    

}