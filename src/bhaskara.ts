export default class Bhaskara {
    public calcular(a: number, b: number, c: number): { x1: number | null; x2: number | null; mensagem: string } {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            return { x1: null, x2: null, mensagem: 'Não há raízes.' };
        } else if (delta === 0) {
            const x = (-b) / (2 * a);
            return { x1: x, x2: x, mensagem: 'Há uma raiz.' };
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return { x1, x2, mensagem: 'Há duas raízes.' };
        }
    }
}