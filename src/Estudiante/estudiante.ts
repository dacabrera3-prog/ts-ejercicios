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

