document.addEventListener('DOMContentLoaded', function () {
    let nombreInput = document.getElementById('nombre') as HTMLInputElement;
    let edadInput = document.getElementById('edad') as HTMLInputElement;
    let sistemaSelect = document.getElementById('sistema') as HTMLSelectElement;
    let identificacionInput = document.getElementById('identificacion') as HTMLInputElement;
    let experienciaInput = document.getElementById('experiencia') as HTMLInputElement;
    let solucionList = document.getElementById('solucion') as HTMLUListElement;
    let formulario = document.getElementById('formulario2') as HTMLFormElement;

    sistemaSelect.addEventListener('change', () => {
        if (sistemaSelect.value === 'empleado') {
            identificacionInput.removeAttribute('readonly');
            experienciaInput.removeAttribute('readonly');
        } else {
            identificacionInput.setAttribute('readonly', 'readonly');
            experienciaInput.setAttribute('readonly', 'readonly');
        }
    });

    sistemaSelect.dispatchEvent(new Event('change'));

    class Person {
        constructor(public nombre: string, public edad: number) { }
    }

    class Employee extends Person {
        constructor(public nombre: string, public edad: number, public identificacion: string, public experiencia: number) {
            super(nombre, edad);
        }
    }

    class FormInput {
        constructor(private nombre: string, private edad: string, private identificacion: string, private experiencia: string) { }

        setValues(values: Map<string, string>): void {
            (<HTMLInputElement>document.getElementById(this.nombre)).value = values.get(this.nombre) || '';
            (<HTMLInputElement>document.getElementById(this.edad)).value = values.get(this.edad) || '';
            (<HTMLInputElement>document.getElementById(this.identificacion)).value = values.get(this.identificacion) || '';
            (<HTMLInputElement>document.getElementById(this.experiencia)).value = values.get(this.experiencia) || '';
        }
    }

    let personList = new Set<Person>();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let person: Person;
        const formData = new Map<string, string>();
        const formInput = new FormInput('nombre', 'edad', 'identificacion', 'experiencia');
        formData.set('nombre', nombreInput.value);
        formData.set('edad', edadInput.value);
        formData.set('identificacion', identificacionInput.value);
        formData.set('experiencia', experienciaInput.value);
        formInput.setValues(formData);
        if (sistemaSelect.value === 'empleado') {
            person = new Employee(nombreInput.value, parseInt(edadInput.value), identificacionInput.value, parseInt(experienciaInput.value));
        } else {
            person = new Person(nombreInput.value, parseInt(edadInput.value));
        }
        personList.add(person);
        const li = document.createElement('li');
        li.textContent = `${person.nombre} - ${person.edad} años`;
        if (sistemaSelect.value === 'empleado') {
            li.textContent += ` - Identificación: ${(<Employee>person).identificacion} - Experiencia: ${(<Employee>person).experiencia} años`;
        }
        solucionList.appendChild(li);
    });
});


