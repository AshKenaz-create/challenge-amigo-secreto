// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];

// Funcion para agregar amigos
function agregarAmigo() {
    // Capturamos el valor del input
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, agregue un nombre.");
        return;
    }

    // Validamos que el nombre no exista en la lista
    if (amigos.includes(nombre)) {
        alert("El nombre ya ha sido agregado.");
        input.value = "";
        return;
    }

    // Agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    input.value = "";
    
    // Actualizamos la lista de amigos en el HTML
    actualizarLista();
}

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

// Funcion para sortear amigo
function sortearAmigo() {
    // Vallidamos que existan amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos agregados para sortear. Por favor, agregue al menos a un amigo.");
        return;
    }

    // Generamos un numero aleatorio entre 0 y la longitud del arreglo de amigos
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre sorteado
    let amigoSorteado = amigos[numeroAleatorio];

    // Mostramos el resultado del amigo secreto en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

}
