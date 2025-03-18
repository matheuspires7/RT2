import * as readline from 'readline';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarOutraOperacao() {
    leitor.question('Deseja realizar outra operação? (S/N):\n', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            iniciar();
        } else {
            console.log('Calculadora encerrada.');
            leitor.close();
        }
    });
}

function iniciar() {
    leitor.question(
        `Digite os números e a operação desejada:
        - Operações básicas: para realizar, insira dois números e a operação.
        - Bhaskara: para realizar, insira três números e "Bhaskara".
        - Encerrar: "Sair".\n`, (valor) => {
        if (valor.toLowerCase() === 'sair') {
            console.log('Calculadora encerrada.');
            leitor.close();
            return;
        }

        const instrucoes = valor.split(' ');
        const operacao = instrucoes[instrucoes.length - 1].toLowerCase();

        if (operacao === 'bhaskara') {
            if (instrucoes.length < 4) {
                console.log('Para Bhaskara, insira três números (a, b, c).');
                iniciar();
                return;
            }

            const a = Number(instrucoes[0]);
            const b = Number(instrucoes[1]);
            const c = Number(instrucoes[2]);

            const bhaskara = new Bhaskara();
            const resultado = bhaskara.calcular(a, b, c);

            console.log(resultado.mensagem);
            if (resultado.x1 !== null) console.log(`x1 = ${resultado.x1}`);
            if (resultado.x2 !== null) console.log(`x2 = ${resultado.x2}`);
        } else {
            if (instrucoes.length < 3) {
                console.log('Para operações básicas, insira dois números e a operação.');
                iniciar();
                return;
            }

            const numero1 = Number(instrucoes[0]);
            const numero2 = Number(instrucoes[1]);

            let calculo;

            switch (operacao) {
                case 'soma':
                    calculo = new Soma();
                    break;
                case 'subtracao':
                    calculo = new Subtracao();
                    break;
                case 'multiplicacao':
                    calculo = new Multiplicacao();
                    break;
                case 'divisao':
                    calculo = new Divisao();
                    break;
                case 'potenciacao':
                    calculo = new Potenciacao();
                    break;
                case 'radiciacao':
                    calculo = new Radiciacao();
                    break;
                default:
                    console.log('Operação não reconhecida.');
                    iniciar();
                    return;
            }

            try {
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
            } catch (error) {
                console.log(error.message);
            }
        }

        perguntarOutraOperacao();
    });
}

iniciar();