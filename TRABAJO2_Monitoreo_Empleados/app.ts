let inputs = Array.from(document.querySelectorAll('#nombre, #edad')) as HTMLInputElement[];
let sistema = document.querySelector('#sistema') as HTMLSelectElement;
let form = document.querySelector('#form2') as HTMLFormElement;
let [nombreInput, edadInput] = inputs;

inputs.forEach(input => input.addEventListener('input', () => sistema.dispatchEvent(new Event('change'))));

sistema.addEventListener('change', () => {
    inputs.forEach(input => input.toggleAttribute('readonly', sistema.value !== 'empleado'));
});

sistema.dispatchEvent(new Event('change'));

class Persona {
    nombre: string = "";
    edad: number = 0;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Empleado extends Persona {
    identificacion: string = '';
    experiencia: number = 0;
    constructor(nombre: string, edad: number, identificacion: string, experiencia: number) {
        super(nombre, edad);
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}

let personas = new Set<Persona>();
let empleados = new Map<string, Empleado>();

let edadEx = 0;
let edadExMediaEx = 0;

document.getElementById("solucion")?.addEventListener("click", () => {
    let nombreInput = (<HTMLInputElement>document.getElementById("nombre")).value;
    let edadInput = Number((<HTMLInputElement>document.getElementById("edad")).value);

    let usuario: Persona;
    if (sistema.value === 'empleado') {
        let identificacionInput = (<HTMLInputElement>document.getElementById("identificacion")).value;
        let experienciaInput = Number((<HTMLInputElement>document.getElementById("experiencia")).value);

        usuario = new Empleado(nombreInput, edadInput, identificacionInput, experienciaInput);
    } else {
        usuario = new Persona(nombreInput, edadInput);
    }

    personas.add(usuario);
    edadEx += edadInput;
    edadExMediaEx = edadEx / personas.size;

    let mostrarInfo = `<p>Nombre: ${nombreInput}, Edad: ${edadInput}</p>`;
    (<HTMLInputElement>document.getElementById("solucion")).value = mostrarInfo;
});