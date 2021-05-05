export class Transferencia{
    _id?: number;
    destinatario: string;
    monto: string;
    nombre: string;
    rut: string;
    banco: string;
    tipo_cuenta: string;

    constructor(destinatario: string, monto: string, nombre: string, rut: string, banco: string,
        tipo_cuenta: string){
        this.destinatario = destinatario;
        this.monto = monto;
        this.nombre = nombre;
        this.rut = rut;
        this.banco = banco;
        this.tipo_cuenta = tipo_cuenta;
    }
}