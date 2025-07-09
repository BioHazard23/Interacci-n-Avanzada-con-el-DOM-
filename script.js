// ============================
//  -REFERENCIAS DOM
// ============================
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const output = document.getElementById('output');
const interactionCount = document.getElementById('interactionCount');
const mensaje = document.getElementById('mensaje')

// ============================
//  -MOSTRAR DATOS SI EXISTEN
// ============================
function mostrarDatos() {
    const nombre = localStorage.getItem('nombre');
    const edad = localStorage.getItem('edad');

    if (nombre && edad) {
        output.textContent = `Nombre: ${nombre}, Edad: ${edad}`;
    } else {
        output.textContent = `No hay informacion almacenada`;
    }
}

// ============================
//  -MUESTRA MENSAJE PERSONALIZADO
// ============================
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`
}

// ============================
//  -GUARDA DATOS EN LOCAL STORAGE
// ============================
function guardarDatos () {
    const nombre =document.getElementById('name').value.trim();
    const edad =parseInt(document.getElementById('age').value.trim());

    if (nombre.length < 2) {
        mostrarMensaje('El mensaje debe tener al menos 2 caracteres', 'ERROR');
        return;
    }

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad.toString());

    mostrarDatos();
    mostrarMensaje('¡Mensaje guardado correctamente!', 'SUCCESS');
    incrementarContandor();

    // Mostrar en consola
    console.log('Datos guardados en Local Storage:', {nombre, edad });
}

// ============================
//  -LIMPIAR DATOS DEL LOCAL STORAGE   
// ============================
function limpiarDatos() {
  localStorage.clear();
  output.textContent = 'Los datos han sido eliminados.';
  mostrarMensaje('Local Storage limpiado con éxito.', 'success');
  incrementarContandor();

  // Mostrar en consola
  console.log('🧹 Local Storage limpiado.');
}

// ============================
//  -CONTADOR CON SESSION STORAGE   
// ============================
function incrementarContandor () {
    let contador = sessionStorage.getItem('contador');

    if (!contador) {
        contador = 1;
    } else {
        contador = parseInt(contador) + 1;
    }

    sessionStorage.setItem('contador', contador);
    interactionCount.textContent = `Interacciones en esta sesion: ${contador}`;

    // Mostrar en consola
    console.log('Contador actualizado en Session Storage', contador)
}

// ============================
//  -EVENTOS
// ============================
window.addEventListener('DOMContentLoaded', () => {
    mostrarDatos();
    incrementarContandor();

    // Mostrar en consola
    console.log('Pagina cargada', {
        nombre: localStorage.getItem('nombre'),
        edad: localStorage.getItem('edad')
    });
});

saveButton.addEventListener('click', guardarDatos);
clearButton.addEventListener('click', limpiarDatos)