// Clase base Persona
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimirDatos() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

// Clase Estudiante que hereda de Persona
class Estudiante extends Persona {
  curso: string;

  constructor(nombre: string, edad: number, curso: string) {
    super(nombre, edad); // Llama al constructor de Persona
    this.curso = curso;
  }

  imprimirCurso() {
    console.log(`Curso: ${this.curso}`);
  }
}

// Ejemplo de uso:
const estudiante1 = new Estudiante("Diego", 23, "Programación Web");
estudiante1.imprimirDatos();
estudiante1.imprimirCurso();
