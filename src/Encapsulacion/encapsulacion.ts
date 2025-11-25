class CuentaBancaria {
    // Atributo privado
    private saldo: number;

    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }
    // Método para depositar dinero
    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Has depositado $${monto}`);
        } else {
            console.log("El monto a depositar debe ser mayor a 0");
        }
    }
    // Método para mostrar saldo
    mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}
// --- Ejemplo de uso ---
const cuenta = new CuentaBancaria(100);
cuenta.mostrarSaldo();   // Saldo actual: $100
cuenta.depositar(50);    // Has depositado $50
cuenta.mostrarSaldo();   // Saldo actual: $150
