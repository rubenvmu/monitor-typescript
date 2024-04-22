"use strict";
/*------------------------------------------------------------------------------------------------------------------*/
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const sistema = document.getElementById('sistema');
const identificacion = document.getElementById('identificacion');
const experiencia = document.getElementById('experiencia');
const solucionUl = document.getElementById('solucion');
const form2 = document.querySelector('#formulario2'); // Corrected the type
sistema.addEventListener('change', () => {
    if (sistema.value === 'empleado') {
        identificacion.removeAttribute('readonly');
        experiencia.removeAttribute('readonly');
    }
    else {
        identificacion.setAttribute('readonly', 'readonly');
        experiencia.setAttribute('readonly', 'readonly');
    }
});
sistema.dispatchEvent(new Event('change'));
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado extends Persona {
    constructor(nombre, edad, identificacion, experiencia) {
        super(nombre, edad);
        this.nombre = nombre;
        this.edad = edad;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}
const personas = new Set();
const empleados = new Map();
const nombreInput = document.querySelector('#nombre');
const edadInput = document.querySelector('#edad');
const identificacionInput = document.querySelector('#identificacion');
const experienciaInput = document.querySelector('#experiencia');
const sistemaSelect = document.querySelector('#sistema');
const solucion2 = new Set();
const mapnombres = new Map();
form2.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const resultado = `${nombreInput.value} ${edadInput.value} ${identificacionInput.value} ${experienciaInput.value}`;
    if (!solucion2.has(resultado)) {
        solucion2.add(resultado);
        alert('Nombre a�adido a la lista');
        const cadena = `${nombreInput.value} / ${edadInput.value} / ${identificacionInput.value} / ${experienciaInput.value}`;
        const li = document.createElement('li');
        li.textContent = cadena;
        solucionUl.appendChild(li);
    }
    else {
        alert('Ese nombre ya ha sido a�adido a la lista');
    }
    nombreInput.value = '';
    edadInput.value = '';
    experienciaInput.value = '';
    identificacionInput.value = '';
}
//# sourceMappingURL=app.js.map