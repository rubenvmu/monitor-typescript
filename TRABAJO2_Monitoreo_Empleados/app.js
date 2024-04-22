"use strict";
/*------------------------------------------------------------------------------------------------------------------*/
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const sistema = document.getElementById('sistema');
const identificacion = document.getElementById('identificacion');
const experiencia = document.getElementById('experiencia');
const solucion = document.getElementById('solucion');
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
/*------------------------------------------------------------------------------------------------------------------*/
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
let personas = new Set();
let empleados = new Map();
const form = document.querySelector('#formulario2');
const nombreInput = document.querySelector('#nombre');
const edadInput = document.querySelector('#edad');
const identificacionInput = document.querySelector('#identificacion');
const experienciaInput = document.querySelector('#experiencia');
const sistemaSelect = document.querySelector('#sistema');
function displayClients() {
    const tableBody = document.querySelector('#clientesTableBody');
    tableBody.innerHTML = '';
    for (const persona of personas) {
        const row = document.createElement('tr');
        const nombreCell = document.createElement('td');
        nombreCell.textContent = persona.nombre;
        row.appendChild(nombreCell);
        const edadCell = document.createElement('td');
        edadCell.textContent = persona.edad.toString();
        row.appendChild(edadCell);
        tableBody.appendChild(row);
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = nombreInput.value;
    const edad = parseInt(edadInput.value);
    const identificacion = identificacionInput.value;
    const experiencia = parseInt(experienciaInput.value);
    const clase = sistemaSelect.value;
    if (clase === 'empleado') {
        const empleado = new Empleado(nombre, edad, identificacion, experiencia);
        empleados.set(identificacion, empleado);
        const solucionDiv = document.querySelector('#solucion');
        const solucionParagraph = document.createElement('p');
        solucionParagraph.textContent = `Se ha a�adido un nuevo empleado: ${nombre}`;
        solucionDiv.appendChild(solucionParagraph);
        nombreInput.value = '';
        displayEmpleados();
    }
    else {
        const persona = new Persona(nombre, edad);
        personas.add(persona);
        const solucionDiv = document.querySelector('#solucion');
        const solucionParagraph = document.createElement('p');
        solucionParagraph.textContent = `Se ha a�adido una nueva persona: ${nombre}`;
        solucionDiv.appendChild(solucionParagraph);
        nombreInput.value = '';
    }
    displayClients();
});
function displayEmpleados() {
    const empleadosTableBody = document.querySelector("#empleadosTable tbody");
    empleadosTableBody.innerHTML = "";
    empleados.forEach((empleado, identificacion) => {
        const row = document.createElement("tr");
        const nombreCell = document.createElement("td");
        nombreCell.textContent = empleado.nombre;
        row.appendChild(nombreCell);
        const edadCell = document.createElement("td");
        edadCell.textContent = empleado.edad.toString();
        row.appendChild(edadCell);
        const identificacionCell = document.createElement("td");
        identificacionCell.textContent = identificacion;
        row.appendChild(identificacionCell);
        empleadosTableBody.appendChild(row);
    });
}
//# sourceMappingURL=app.js.map