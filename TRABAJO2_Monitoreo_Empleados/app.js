"use strict";
var _a;
let inputs = Array.from(document.querySelectorAll('#nombre, #edad'));
let sistema = document.querySelector('#sistema');
let form = document.querySelector('#form2');
let [nombreInput, edadInput] = inputs;
inputs.forEach(input => input.addEventListener('input', () => sistema.dispatchEvent(new Event('change'))));
sistema.addEventListener('change', () => {
    inputs.forEach(input => input.toggleAttribute('readonly', sistema.value !== 'empleado'));
});
sistema.dispatchEvent(new Event('change'));
class Persona {
    constructor(nombre, edad) {
        this.nombre = "";
        this.edad = 0;
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
(_a = document.getElementById("solucion")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    let nombreInput = document.getElementById("nombre").value;
    let edadInput = Number(document.getElementById("edad").value);
    let usuario;
    if (sistema.value === 'empleado') {
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
    let mostrarInfo = `<p>Nombre: ${nombreInput}, Edad: ${edadInput}</p>`;
    document.getElementById("solucion").value = mostrarInfo;
});
//# sourceMappingURL=app.js.map