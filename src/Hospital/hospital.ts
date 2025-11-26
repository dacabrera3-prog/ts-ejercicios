class Hospital {
    // Calcula la dosis total necesaria
    calcularDosis(peso: number, mgPorKg: number): number {
        return peso * mgPorKg;
    }

    // Calcula el Índice de Masa Corporal (IMC = peso / altura^2)
    calcularIMC(peso: number, altura: number): number {
        if (altura === 0) return 0; // Evitar división por cero
        return peso / (altura * altura);
    }

    // Suma las visitas nuevas al historial
    registrarVisitas(visitasActuales: number, nuevas: number): number {
        return visitasActuales + nuevas;
    }
}