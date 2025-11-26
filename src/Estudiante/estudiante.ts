class Estudiante {
    // 1. Método agregarNota
    public agregarNota(promedio: number, nuevaNota: number): number {
        return (promedio + nuevaNota) / 2;
    }
    // 2. Método aprobar
    public aprobar(nota: number, minima: number): boolean {
        // Retorna true si cumple la condición, false si no.
        return nota >= minima;
    }
    // 3. Método calcularFaltas
    public calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}

// --- EJEMPLO DE USO (PRUEBAS) ---

const gestionEstudiante = new Estudiante();

// Datos iniciales de prueba
let promedioActual = 8;
let faltasTotales = 2;

console.log(`--- Estado Inicial ---`);
console.log(`Promedio: ${promedioActual}, Faltas: ${faltasTotales}`);

// Prueba 1: Agregar una nueva nota
promedioActual = gestionEstudiante.agregarNota(promedioActual, 10);
console.log(`Nueva nota agregada (10). Nuevo promedio: ${promedioActual}`);

// Prueba 2: Verificar si aprueba
const notaMinima = 7;
const aprobo = gestionEstudiante.aprobar(promedioActual, notaMinima);
console.log(`¿Aprueba con ${promedioActual} (Mínima ${notaMinima})?: ${aprobo ? "SÍ" : "NO"}`);

// Prueba 3: Registrar faltas
faltasTotales = gestionEstudiante.calcularFaltas(faltasTotales, 3);
console.log(`Se registraron 3 faltas nuevas. Total faltas: ${faltasTotales}`);