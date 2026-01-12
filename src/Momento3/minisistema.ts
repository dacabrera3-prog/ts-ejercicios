
// 1. MODELO (INTERFACES)

interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
    carrera: string;
    activo: boolean;
    promedio: number;
}

// Interface genérica para respuestas del sistema
interface IResultado<T> {
    ok: boolean;
    mensaje: string;
    data?: T;
}

// 2. LÓGICA (CLASES)

class Estudiante implements IEstudiante {
    constructor(
        public id: number,
        public nombre: string,
        public edad: number,
        public carrera: string,
        public activo: boolean,
        public promedio: number
    ) {}
}

class SistemaEstudiantes {
    // Arreglo privado
    private estudiantes: Estudiante[] = [];

    // Método 1: Agregar con validaciones
    agregar(est: Estudiante): IResultado<Estudiante> {
        // Validación: ID repetido
        const existe = this.estudiantes.find(e => e.id === est.id);
        if (existe) {
            return { ok: false, mensaje: `Error: El ID ${est.id} ya existe.` };
        }

        // Validación: Edad (15 a 80)
        if (est.edad < 15 || est.edad > 80) {
            return { ok: false, mensaje: `Error: La edad ${est.edad} no es válida (15-80).` };
        }

        // Validación: Promedio (0 a 10)
        if (est.promedio < 0 || est.promedio > 10) {
            return { ok: false, mensaje: `Error: El promedio ${est.promedio} no es válido (0-10).` };
        }

        this.estudiantes.push(est);
        return { ok: true, mensaje: "Estudiante agregado con éxito.", data: est };
    }

    // Método 2: Listar todos
    listar(): Estudiante[] {
        return this.estudiantes;
    }

    // Método 3: Buscar por ID
    buscarPorId(id: number): IResultado<Estudiante> {
        // Usamos .find
        const encontrado = this.estudiantes.find(e => e.id === id);

        if (encontrado) {
            return { ok: true, mensaje: "Estudiante encontrado.", data: encontrado };
        } else {
            return { ok: false, mensaje: `Error: Estudiante con ID ${id} no encontrado.` };
        }
    }

    // Método 4: Actualizar Promedio
    actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
        const busqueda = this.buscarPorId(id);

        if (!busqueda.ok || !busqueda.data) {
            return { ok: false, mensaje: busqueda.mensaje };
        }

        // Validar el nuevo promedio antes de asignar
        if (nuevoPromedio < 0 || nuevoPromedio > 10) {
            return { ok: false, mensaje: "Error: El nuevo promedio debe estar entre 0 y 10." };
        }

        busqueda.data.promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado.", data: busqueda.data };
    }

    // Método 5: Cambiar Estado (Activo/Inactivo)
    cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
        const busqueda = this.buscarPorId(id);

        if (!busqueda.ok || !busqueda.data) {
            return { ok: false, mensaje: busqueda.mensaje };
        }

        busqueda.data.activo = activo;
        const estadoStr = activo ? "Activo" : "Inactivo";
        return { ok: true, mensaje: `Estado cambiado a: ${estadoStr}`, data: busqueda.data };
    }

    // Método 6: Listar solo activos
    listarActivos(): Estudiante[] {
        // Usamos filter para crear un nuevo arreglo solo con los activos
        return this.estudiantes.filter(est => est.activo === true);
    }

    // Método 7: Promedio General del curso
    promedioGeneral(): number {
    if (this.estudiantes.length === 0) return 0;

    let suma = 0;
    // Bucle for...of
    for (const est of this.estudiantes) {
        suma += est.promedio;
    }
    
    return suma / this.estudiantes.length;
}
}

// 3. FUNCIONES SUELTAS (OBLIGATORIAS)

function mostrarMenu(): void {
    console.log("\n--- SISTEMA DE GESTIÓN DE ESTUDIANTES ---");

}

function ejecutarDemo(sistema: SistemaEstudiantes): void {
    mostrarMenu();

    console.log("\n1) Agregando 3 estudiantes...");
    // Intentamos agregar uno con edad mala para probar validación
    console.log(sistema.agregar(new Estudiante(1, "Diego Cabrera", 23, "Software", true, 8.5)).mensaje);
    console.log(sistema.agregar(new Estudiante(2, "Carlos Ortega", 19, "Diseño", true, 9.0)).mensaje);
    console.log(sistema.agregar(new Estudiante(3, "Paulina Guaillas", 22, "Gastronomia", true, 7.5)).mensaje);
    
    // Prueba de validación de error
    console.log("   Prueba error (Edad 10):", sistema.agregar(new Estudiante(4, "Niño", 10, "N/A", true, 5)).mensaje);

    console.log("\n2) Listando todos los estudiantes:");
    console.table(sistema.listar());

    console.log("\n3) Buscando estudiante con ID 2:");
    const busqueda = sistema.buscarPorId(2);
    console.log(busqueda.ok ? busqueda.data : busqueda.mensaje);

    console.log("\n4) Actualizando promedio del ID 2 a 9.8:");
    console.log(sistema.actualizarPromedio(2, 9.8).mensaje);

    console.log("\n5) Cambiando estado del ID 3 a Inactivo:");
    console.log(sistema.cambiarEstado(3, false).mensaje);

    console.log("\n6) Listando solo estudiantes ACTIVOS:");
    console.table(sistema.listarActivos());

    console.log("\n7) Promedio General del curso:");
    console.log("   Promedio: " + sistema.promedioGeneral().toFixed(2));
}

const miSistema = new SistemaEstudiantes();
ejecutarDemo(miSistema);

//Lo que use en la terminal para comprobar si funciona: npx ts-node src/Momento3/minisistema.ts //