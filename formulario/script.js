// Funcion que es llamada desde el boton
function evento_click(){
    // obtenemos los elementos html, referenciandolos por id
    // lo que pasamos por parametro (nombre y edad)
    // son los id en los elementos html
    let elemento_nombre = document.getElementById("nombre")
    let elemento_edad = document.getElementById("edad")

    // console.log(elemento_edad)
    // console.log(elemento_nombre)

    // value obtiene el valor del elemento html (lo que escribio el usuario)
    let nombre = elemento_nombre.value
    let edad = elemento_edad.value

    console.log(nombre)
    console.log(edad)
}