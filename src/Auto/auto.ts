class Auto {
    // Aumenta la velocidad sumando el incremento
    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    // Disminuye la velocidad restando el decremento. Si baja de 0, devuelve 0.
    frenar(velocidadActual: number, decremento: number): number {
        const nuevaVelocidad = velocidadActual - decremento;
        if (nuevaVelocidad < 0) {
            return 0;
        } else {
            return nuevaVelocidad;
        }
    }

    // Calcula velocidad media (v = d / t)
    recorrer(distancia: number, tiempo: number): number {
        if (tiempo === 0) return 0; // Evitar división por cero
        return distancia / tiempo;
    }
}