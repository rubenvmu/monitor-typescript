class Empleado {
    private nombre: string;
    private edad: number;
    private identificacion: string;
    private experiencia: number;

    constructor(nombre: string, edad: number, identificacion: string, experiencia: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    getIdentificacion(): string {
        return this.identificacion;
    }

    getExperiencia(): number {
        return this.experiencia;
    }
}

class EmpleadoManager {
    private empleados: Map<string, Empleado>;

    constructor() {
        this.empleados = new Map<string, Empleado>();
    }

    agregarEmpleado(empleado: Empleado): boolean {
        if (this.empleados.has(empleado.getIdentificacion())) {
            console.log(`El empleado con identificación ${empleado.getIdentificacion()} ya existe`);
            return false;
        }
        this.empleados.set(empleado.getIdentificacion(), empleado);
        console.log(`Empleado agregado con éxito`);
        return true;
    }

    getEdadMedia(): number {
        let sumaEdades = 0;
        this.empleados.forEach((empleado) => {
            sumaEdades += empleado.getEdad();
        });
        return sumaEdades / this.empleados.size;
    }

    getExperienciaAcumulada(): number {
        let sumaExperiencias = 0;
        this.empleados.forEach((empleado) => {
            sumaExperiencias += empleado.getExperiencia();
        });
        return sumaExperiencias;
    }
}

const empleadoManager = new EmpleadoManager();

document.getElementById('form2')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value);
    const identificacion = (document.getElementById('identificacion') as HTMLInputElement).value;
    const experiencia = parseInt((document.getElementById('experiencia') as HTMLInputElement).value);

    const empleado = new Empleado(nombre, edad, identificacion, experiencia);
    if (empleadoManager.agregarEmpleado(empleado)) {
        console.log(`Empleado agregado con éxito`);
        const edadMedia = empleadoManager.getEdadMedia();
        const experienciaAcumulada = empleadoManager.getExperienciaAcumulada();
        (document.getElementById('solucion') as HTMLLabelElement).innerText = `Edad media: ${edadMedia}, Experiencia acumulada: ${experienciaAcumulada}`;
    }
});