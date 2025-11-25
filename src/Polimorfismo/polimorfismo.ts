// Clase base
class Animal {
    sonar(): void {
        console.log("El animal hace un sonido.");
    }
}
// Clase Perro sobrescribe sonar()
class Perro extends Animal {
    sonar(): void {
        console.log("El perro ladra: ¡Guau!");
    }
}
// Clase Gato sobrescribe sonar()
class Gato extends Animal {
    sonar(): void {
        console.log("El gato maúlla: ¡Miau!");
    }
}
// --- Ejemplo de uso ---
const animales: Animal[] = [
    new Perro(),
    new Gato()
];
animales.forEach(a => a.sonar());
