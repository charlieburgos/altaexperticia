export class Cliente{
    #nombre
    #impuesto
    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(cambioNombre){
        return this.#nombre = cambioNombre;
    } 

    calcularImpuesto(){
        return ('El impuesto de: ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones)*0.21}');

    }
}