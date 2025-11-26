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

