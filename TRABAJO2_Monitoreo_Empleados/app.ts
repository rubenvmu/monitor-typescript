/*------------------------------------------------------------------------------------------------------------------*/

const nombre = document.getElementById('nombre') as HTMLInputElement;
const edad = document.getElementById('edad') as HTMLInputElement;
const sistema = document.getElementById('sistema') as HTMLSelectElement;
const identificacion = document.getElementById('identificacion') as HTMLInputElement;
const experiencia = document.getElementById('experiencia') as HTMLInputElement;
const solucion = document.getElementById('solucion') as HTMLInputElement;

sistema.addEventListener('change', () => {
    if (sistema.value === 'empleado') {
        identificacion.removeAttribute('readonly');
        experiencia.removeAttribute('readonly');
    } else {
        identificacion.setAttribute('readonly', 'readonly');
        experiencia.setAttribute('readonly', 'readonly');
    }
});

sistema.dispatchEvent(new Event('change'));

/*------------------------------------------------------------------------------------------------------------------*/

class Persona {
    constructor(public nombre: string, public edad: number) { }
}

class Empleado extends Persona {
    constructor(public nombre: string, public edad: number, public identificacion: string, public experiencia: number) {
        super(nombre, edad);
    }
}

let personas = new Set<Persona>();
let empleados = new Map<string, Empleado>();

const form = document.querySelector('#formulario2') as HTMLFormElement;
const nombreInput = document.querySelector('#nombre') as HTMLInputElement;
const edadInput = document.querySelector('#edad') as HTMLInputElement;
const identificacionInput = document.querySelector('#identificacion') as HTMLInputElement;
const experienciaInput = document.querySelector('#experiencia') as HTMLInputElement;
const sistemaSelect = document.querySelector('#sistema') as HTMLSelectElement;


/** */

