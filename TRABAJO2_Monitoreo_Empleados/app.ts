let nombre = document.getElementById('nombre') as HTMLInputElement;
let edad = document.getElementById('edad') as HTMLInputElement;
let sistema = document.getElementById('sistema') as HTMLSelectElement;
let identificacion = document.getElementById('identificacion') as HTMLInputElement;
let experiencia = document.getElementById('experiencia') as HTMLInputElement;
let solucion = document.getElementById('solucion') as HTMLUListElement;

sistema.addEventListener('change', () => {
    if (sistema.value === 'empleado') {
        identificacion.removeAttribute('readonly');
        experiencia.removeAttribute('readonly');
    } else {
        identificacion.setAttribute('readonly', '');
        experiencia.setAttribute('readonly', '');
    }
});

sistema.dispatchEvent(new Event('change'));

class Persona {
    constructor(public nombre: string, public edad: number) { }
}

class Empleado extends Persona {
    identificacion: string = '';
    experiencia: number = 0;
    constructor(
        nombre: string,
        edad: number,
        identificacion: string,
        experiencia: number
    ) {
        super(nombre, edad);
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}

let personas = new Set<Persona>();
let empleados = new Map<string, Empleado>();

let edadEx = 0;
let edadExMediaEx = 0;

document.getElementById("botonito")?.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreInput = (<HTMLInputElement>document.getElementById("nombre")).value;
    let edadInput = Number((<HTMLInputElement>document.getElementById("edad")).value);

    let sistema = (<HTMLSelectElement>document.getElementById("sistema")).value;

    let usuario: Persona;
    if (sistema === 'empleado') {
        let identificacionInput = (<HTMLInputElement>document.getElementById("identificacion")).value;
        let experienciaInput = Number((<HTMLInputElement>document.getElementById("experiencia")).value);

        usuario = new Empleado(nombreInput, edadInput, identificacionInput, experienciaInput);
    } else {
        usuario = new Persona(nombreInput, edadInput);
    }

    personas.add(usuario);
    edadEx += edadInput;
    edadExMediaEx = edadEx / personas.size;

    let mostrarInfo = `<li>Nombre: <span style="color: ${usuario instanceof Empleado ? 'black' : 'black'}; font-weight: ${usuario instanceof Empleado ? 'bold' : 'normal'}">${nombreInput}</span>, Edad: ${edadInput}`;
    if (sistema === 'empleado') {
        mostrarInfo += `, Identificación: ${(<Empleado>usuario).identificacion}, Experiencia: ${(<Empleado>usuario).experiencia}</li>`;
    } else {
        mostrarInfo += `</li>`;
    }

    const solucionList = document.getElementById("solucion") as HTMLUListElement;
    const nuevoElementoLi = document.createElement("li");
    nuevoElementoLi.innerHTML = mostrarInfo;
    solucionList.appendChild(nuevoElementoLi);
});