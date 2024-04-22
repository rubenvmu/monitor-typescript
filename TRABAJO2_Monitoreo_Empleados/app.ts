/*------------------------------------------------------------------------------------------------------------------*/

const nombre = document.getElementById('nombre') as HTMLInputElement;
const edad = document.getElementById('edad') as HTMLInputElement;
const sistema = document.getElementById('sistema') as HTMLSelectElement;
const identificacion = document.getElementById('identificacion') as HTMLInputElement;
const experiencia = document.getElementById('experiencia') as HTMLInputElement;
const solucionUl = document.getElementById('solucion') as HTMLUListElement;

const form2 = document.querySelector('#formulario2') as HTMLDivElement; // Corrected the type

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

class Persona {
    constructor(public nombre: string, public edad: number) { }
}

class Empleado extends Persona {
    constructor(
        public nombre: string,
        public edad: number,
        public identificacion: string,
        public experiencia: number
    ) {
        super(nombre, edad);
    }
}

const personas = new Set<Persona>();
const empleados = new Map<string, Empleado>();

const nombreInput = document.querySelector('#nombre') as HTMLInputElement;
const edadInput = document.querySelector('#edad') as HTMLInputElement;
const identificacionInput = document.querySelector('#identificacion') as HTMLInputElement;
const experienciaInput = document.querySelector('#experiencia') as HTMLInputElement;
const sistemaSelect = document.querySelector('#sistema') as HTMLSelectElement;

const solucion2 = new Set<string>();
const mapnombres = new Map<string, number>();

form2.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event: SubmitEvent) {
    event.preventDefault();

    const resultado = `${nombreInput.value} ${edadInput.value} ${identificacionInput.value} ${experienciaInput.value}`;

    if (!solucion2.has(resultado)) {
        solucion2.add(resultado);
        alert('Nombre añadido a la lista');

        const cadena = `${nombreInput.value} / ${edadInput.value} / ${identificacionInput.value} / ${experienciaInput.value}`;

        const li = document.createElement('li');
        li.textContent = cadena;
        solucionUl.appendChild(li);
    } else {
        alert('Ese nombre ya ha sido añadido a la lista');
    }

    nombreInput.value = '';
    edadInput.value = '';
    experienciaInput.value = '';
    identificacionInput.value = '';
}