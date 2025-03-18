"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var divisao_1 = __importDefault(require("./divisao"));
var potenciacao_1 = __importDefault(require("./potenciacao"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function perguntarOutraOperacao() {
    leitor.question('Deseja realizar outra operação? (S/N):\n', function (resposta) {
        if (resposta.toLowerCase() === 's') {
            iniciar();
        }
        else {
            console.log('Encerrando a calculadora...');
            leitor.close();
        }
    });
}
function iniciar() {
    leitor.question("Digite os n\u00FAmeros e a opera\u00E7\u00E3o desejada:\n        - Opera\u00E7\u00F5es b\u00E1sicas: para realizar, insira dois n\u00FAmeros e a opera\u00E7\u00E3o.\n        - Bhaskara: para realizar, insira tr\u00EAs n\u00FAmeros e bhaskara\n        - Encerrar: Sair\n", function (valor) {
        if (valor.toLowerCase() === 'sair') {
            console.log('Calculadora encerrada.');
            leitor.close();
            return;
        }
        var instrucoes = valor.split(' ');
        var operacao = instrucoes[instrucoes.length - 1].toLowerCase();
        if (operacao === 'bhaskara') {
            if (instrucoes.length < 4) {
                console.log('Para Bhaskara, insira três números (a, b, c).');
                iniciar();
                return;
            }
            var a = Number(instrucoes[0]);
            var b = Number(instrucoes[1]);
            var c = Number(instrucoes[2]);
            var bhaskara = new bhaskara_1.default();
            var resultado = bhaskara.calcular(a, b, c);
            console.log(resultado.mensagem);
            if (resultado.x1 !== null)
                console.log("x1 = ".concat(resultado.x1));
            if (resultado.x2 !== null)
                console.log("x2 = ".concat(resultado.x2));
        }
        else {
            if (instrucoes.length < 3) {
                console.log('Para operações básicas, insira dois números e a operação.');
                iniciar();
                return;
            }
            var numero1 = Number(instrucoes[0]);
            var numero2 = Number(instrucoes[1]);
            var calculo = void 0;
            switch (operacao) {
                case 'soma':
                    calculo = new soma_1.default();
                    break;
                case 'subtracao':
                    calculo = new subtracao_1.default();
                    break;
                case 'multiplicacao':
                    calculo = new multiplicacao_1.default();
                    break;
                case 'divisao':
                    calculo = new divisao_1.default();
                    break;
                case 'potenciacao':
                    calculo = new potenciacao_1.default();
                    break;
                case 'radiciacao':
                    calculo = new radiciacao_1.default();
                    break;
                default:
                    console.log('Operação não reconhecida.');
                    iniciar();
                    return;
            }
            try {
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
            }
            catch (error) {
                console.log(error.message);
            }
        }
        perguntarOutraOperacao();
    });
}
iniciar();
