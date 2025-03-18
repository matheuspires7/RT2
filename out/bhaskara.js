"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            return { x1: null, x2: null, mensagem: 'Não há raízes.' };
        }
        else if (delta === 0) {
            var x = (-b) / (2 * a);
            return { x1: x, x2: x, mensagem: 'Há uma raiz.' };
        }
        else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return { x1: x1, x2: x2, mensagem: 'Há duas raízes.' };
        }
    };
    return Bhaskara;
}());
exports.default = Bhaskara;
