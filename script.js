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

    // Validacion nombre no sea vacio
    let elemento_respuesta_nombre = document.getElementById('error_nombre')
    if(nombre == ""){
        elemento_respuesta_nombre.innerHTML = "Debe ingresar el nombre de la persona :(";
    }else{
        elemento_respuesta_nombre.innerHTML = ""
    }

    // Validacion de persona mayor de edad
    let elemento_respuesta_edad = document.getElementById('error_edad')
    if( edad < 18){
        elemento_respuesta_edad.innerHTML = "Solamente pueden ser agregadas personas mayores de edad :(";
    }else{
        elemento_respuesta_edad.innerHTML = "";
    }

}