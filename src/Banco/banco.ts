class Banco {

    // 1. Método Depositar
    public depositar(saldo: number, monto: number): number {
        const nuevoSaldo = saldo + monto;
        return nuevoSaldo;
    }

    // 2. Método Retirar
    public retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        return saldo - monto;
    }

    // 3. Método Transferir
    public transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más del saldo disponible");
        }
        return saldoOrigen - monto;
    }
}

// --- EJEMPLO DE USO (PRUEBAS) ---

const miBanco = new Banco();
let saldoActual = 1000; 

try {
    console.log(`Saldo inicial: ${saldoActual}`);

    // Prueba 1: Depositar
    saldoActual = miBanco.depositar(saldoActual, 500);
    console.log(`Depósito de 500. Nuevo saldo: ${saldoActual}`); 

    // Prueba 2: Transferir
    saldoActual = miBanco.transferir(saldoActual, 200);
    console.log(`Transferencia de 200. Nuevo saldo: ${saldoActual}`); 

    // Prueba 3: Retirar (Caso Exitoso)
    saldoActual = miBanco.retirar(saldoActual, 1000);
    console.log(`Retiro de 1000. Nuevo saldo: ${saldoActual}`); 
    // Prueba 4: Retirar (Caso de Error - Fondos insuficientes)
    console.log("Intentando retirar 500...");
    saldoActual = miBanco.retirar(saldoActual, 500); 

} catch (error) {
    // Captura y muestra el mensaje de error
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
}