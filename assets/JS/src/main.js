import Impuesto from "./assets/js/Impuestos.js";
import { Cliente } from "./assets/js/Cliente.js";

let impuesto = new Impuesto(8000, 3000);
let cliente = new Cliente('Oscar', impuesto);

console.log(cliente.calcularImpuesto());