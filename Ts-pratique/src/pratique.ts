function multiplicacao (a:number, b:number): number {
    return a * b;
} 

const multiplicacao2 = (a:number, b:number): number => a * b

console.log(multiplicacao2(2, 4))



function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const nomePessoa: string = 'Maria';

console.log(saudacao(nomePessoa));


// console.log(saudacao('Joao'));npx tsc