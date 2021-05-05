export class Destinatario{
    _id?: number;
    nombre: string;
    email: string;
    rut: string;
    phone: number;
    banco: string;
    tipo_cuenta: string;
    num_cuenta: number;

    constructor(nombre: string, email: string, rut: string, phone: number, banco: string, tipo_cuenta: string, num_cuenta: number){
        this.nombre = nombre;
        this.email = email;
        this.rut = rut;
        this.phone = phone;
        this.banco = banco;
        this.tipo_cuenta = tipo_cuenta;
        this.num_cuenta = num_cuenta;
    }
}