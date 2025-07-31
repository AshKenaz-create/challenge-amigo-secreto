// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];

// Funcion para agregar amigos
function agregarAmigo() {
    // Capturamos el valor del input
    let input = document.getElementById('amigo');
    let nombre = input.ariaValueMax.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    input.value = "";
    
    console.log(amigos);
}

// Funcion para mostrar amigos
function mostrarLista() {
    let lista = document.getElementById('amigo');

    // Limpiamos la lista antes de mostrarla
    lista.innerHTML = "";

    // Recorreremos el arreglo de amigos y agregamos cada uno 
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
        
    }
}
// Despues de limpiar campo de entrada
mostrarLista();
