"use strict";
var _a;
class Empleado {
    constructor(nombre, edad, identificacion, experiencia) {
        this.nombre = nombre;
        this.edad = edad;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getIdentificacion() {
        return this.identificacion;
    }
    getExperiencia() {
        return this.experiencia;
    }
}
class EmpleadoManager {
    constructor() {
        this.empleados = new Map();
    }
    agregarEmpleado(empleado) {
        if (this.empleados.has(empleado.getIdentificacion())) {
            console.log(`El empleado con identificaci�n ${empleado.getIdentificacion()} ya existe`);
            return false;
        }
        this.empleados.set(empleado.getIdentificacion(), empleado);
        console.log(`Empleado agregado con �xito`);
        return true;
    }
    getEdadMedia() {
        let sumaEdades = 0;
        this.empleados.forEach((empleado) => {
            sumaEdades += empleado.getEdad();
        });
        return sumaEdades / this.empleados.size;
    }
    getExperienciaAcumulada() {
        let sumaExperiencias = 0;
        this.empleados.forEach((empleado) => {
            sumaExperiencias += empleado.getExperiencia();
        });
        return sumaExperiencias;
    }
}
const empleadoManager = new EmpleadoManager();
(_a = document.getElementById('form2')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const identificacion = document.getElementById('identificacion').value;
    const experiencia = parseInt(document.getElementById('experiencia').value);
    const empleado = new Empleado(nombre, edad, identificacion, experiencia);
    if (empleadoManager.agregarEmpleado(empleado)) {
        console.log(`Empleado agregado con �xito`);
        const edadMedia = empleadoManager.getEdadMedia();
        const experienciaAcumulada = empleadoManager.getExperienciaAcumulada();
        document.getElementById('solucion').innerText = `Edad media: ${edadMedia}, Experiencia acumulada: ${experienciaAcumulada}`;
    }
});
//# sourceMappingURL=app.js.map