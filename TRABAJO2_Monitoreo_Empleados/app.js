"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let nombreInput = document.getElementById('nombre');
    let edadInput = document.getElementById('edad');
    let sistemaSelect = document.getElementById('sistema');
    let identificacionInput = document.getElementById('identificacion');
    let experienciaInput = document.getElementById('experiencia');
    let solucionList = document.getElementById('solucion');
    let formulario = document.getElementById('formulario2');
    sistemaSelect.addEventListener('change', () => {
        if (sistemaSelect.value === 'empleado') {
            identificacionInput.removeAttribute('readonly');
            experienciaInput.removeAttribute('readonly');
        }
        else {
            identificacionInput.setAttribute('readonly', 'readonly');
            experienciaInput.setAttribute('readonly', 'readonly');
        }
    });
    sistemaSelect.dispatchEvent(new Event('change'));
    class Person {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    class Employee extends Person {
        constructor(nombre, edad, identificacion, experiencia) {
            super(nombre, edad);
            this.nombre = nombre;
            this.edad = edad;
            this.identificacion = identificacion;
            this.experiencia = experiencia;
        }
    }
    class FormInput {
        constructor(nombre, edad, identificacion, experiencia) {
            this.nombre = nombre;
            this.edad = edad;
            this.identificacion = identificacion;
            this.experiencia = experiencia;
        }
        setValues(values) {
            document.getElementById(this.nombre).value = values.get(this.nombre) || '';
            document.getElementById(this.edad).value = values.get(this.edad) || '';
            document.getElementById(this.identificacion).value = values.get(this.identificacion) || '';
            document.getElementById(this.experiencia).value = values.get(this.experiencia) || '';
        }
    }
    let personList = new Set();
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let person;
        const formData = new Map();
        const formInput = new FormInput('nombre', 'edad', 'identificacion', 'experiencia');
        formData.set('nombre', nombreInput.value);
        formData.set('edad', edadInput.value);
        formData.set('identificacion', identificacionInput.value);
        formData.set('experiencia', experienciaInput.value);
        formInput.setValues(formData);
        if (sistemaSelect.value === 'empleado') {
            person = new Employee(nombreInput.value, parseInt(edadInput.value), identificacionInput.value, parseInt(experienciaInput.value));
        }
        else {
            person = new Person(nombreInput.value, parseInt(edadInput.value));
        }
        personList.add(person);
        const li = document.createElement('li');
        li.textContent = `${person.nombre} - ${person.edad} a�os`;
        if (sistemaSelect.value === 'empleado') {
            li.textContent += ` - Identificaci�n: ${person.identificacion} - Experiencia: ${person.experiencia} a�os`;
        }
        solucionList.appendChild(li);
    });
});
//# sourceMappingURL=app.js.map