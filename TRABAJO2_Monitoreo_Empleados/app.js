"use strict";
var _a;
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let sistema = document.getElementById('sistema');
let identificacion = document.getElementById('identificacion');
let experiencia = document.getElementById('experiencia');
let solucion = document.getElementById('solucion');
sistema.addEventListener('change', () => {
    if (sistema.value === 'empleado') {
        identificacion.removeAttribute('readonly');
        experiencia.removeAttribute('readonly');
    }
    else {
        identificacion.setAttribute('readonly', '');
        experiencia.setAttribute('readonly', '');
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
        this.identificacion = '';
        this.experiencia = 0;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}
let personas = new Set();
let empleados = new Map();
let edadEx = 0;
let edadExMediaEx = 0;
(_a = document.getElementById("botonito")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreInput = document.getElementById("nombre").value;
    let edadInput = Number(document.getElementById("edad").value);
    let sistema = document.getElementById("sistema").value;
    let usuario;
    if (sistema === 'empleado') {
        let identificacionInput = document.getElementById("identificacion").value;
        let experienciaInput = Number(document.getElementById("experiencia").value);
        usuario = new Empleado(nombreInput, edadInput, identificacionInput, experienciaInput);
    }
    else {
        usuario = new Persona(nombreInput, edadInput);
    }
    personas.add(usuario);
    edadEx += edadInput;
    edadExMediaEx = edadEx / personas.size;
    let mostrarInfo = `<li>Nombre: <span style="color: ${usuario instanceof Empleado ? 'black' : 'black'}; font-weight: ${usuario instanceof Empleado ? 'bold' : 'normal'}">${nombreInput}</span>, Edad: ${edadInput}`;
    if (sistema === 'empleado') {
        mostrarInfo += `, Identificaci�n: ${usuario.identificacion}, Experiencia: ${usuario.experiencia}</li>`;
    }
    else {
        mostrarInfo += `</li>`;
    }
    const solucionList = document.getElementById("solucion");
    const nuevoElementoLi = document.createElement("li");
    nuevoElementoLi.innerHTML = mostrarInfo;
    solucionList.appendChild(nuevoElementoLi);
});
//# sourceMappingURL=app.js.map