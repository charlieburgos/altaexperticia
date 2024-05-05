"use strict";

var _Impuestos = _interopRequireDefault(require("./assets/js/Impuestos.js"));
var _Cliente = require("./assets/js/Cliente.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto = new _Impuestos["default"](8000, 3000);
var cliente = new _Cliente.Cliente('Oscar', impuesto);
console.log(cliente.calcularImpuesto());