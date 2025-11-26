class Restaurante {
    // Calcula costo total (precio * cantidad)
    calcularTotal(precio: number, cantidad: number): number {
        return precio * cantidad;
    }

    // Aplica un descuento porcentual
    aplicarDescuento(total: number, descuento: number): number {
        const montoDescuento = (total * descuento) / 100;
        return total - montoDescuento;
    }

    // Calcula el valor monetario de la propina basada en un porcentaje
    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}