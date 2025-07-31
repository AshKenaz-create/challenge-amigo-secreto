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
        alert("Por favor, agregue un nombre.");
        return;
    }

    // Agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    input.value = "";
    
    // Actualizamos la lista de amigos en el HTML
    actualizarLista();
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

// Funcion para actualizar la lista de amigos en el HTML
function actualizarLista() {
    // Obtener un elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        
        // Agregar el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
        
    }
}
