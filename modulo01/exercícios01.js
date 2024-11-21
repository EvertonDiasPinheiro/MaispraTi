

const prompt = require('prompt-sync')(); // vou usar para todos, ele importa o módulo prompt-sync para capturar entrada do usuário



//1. Verificar se um número é par ou ímpar:


const numeros = Number(prompt('Digite um número inteiro: '));

if (numeros % 2 === 0) {  // Este if verifica se o resto da divisão (%) do número por 2 é igual a 0 se for, significa que o número é par.
    console.log(`O número ${numeros} é par.`); // Se o resto da divisão por 2 for 0, o número é par
} else {
    console.log(`O número ${numeros} é ímpar.`); // Se o resto da divisão por 2 não for 0, o número é ímpar
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//2. Classificar idade em categorias:

const idade = Number(prompt('Informe a idade: '));

// Classifica a idade em categorias

if (idade >= 0 && idade <= 12) {  // Idade entre 0 e 12 anos é classificada como criança alem disso Esta primeira condição verifica se a idade está entre 0 e 12 anos se verdadeira, o programa classifica a idade como "Criança".
    console.log('Criança');
} else if (idade >= 13 && idade <= 17) { //13 e 17 anos é classificada como adolescente
    console.log('Adolescente');
} else if (idade >= 18 && idade <= 64) { //18 e 64 anos adulto
    console.log('Adulto');
} else if (idade >= 65) { //partir de 65 anos é classificada como idoso
    console.log('Idoso');
} else {
    console.log('Idade inválida'); // // Qualquer idade negativa é considerada inválida 
}
/////////////////////////////////////////////////////////////////////////////////////////////////

//3. Classificar nota:

const nota = Number(prompt('Digite uma nota de 0 a 10: '));

// Classifica a nota em categorias
if (nota >= 7 && nota <= 10) {
    console.log('Aprovado');
} else if (nota >= 5 && nota < 7) {
    console.log('Recuperação');
} else if (nota >= 0 && nota < 5) {
    console.log('Reprovado');
} else {
    console.log('Nota inválida');
}// Aprovado: Para notas de 7 a 10 recuperação: Para notas entre 5 e 6.9,reprovado: Para notas abaixo de 5.
// Usei if-else if-else para verificar em qual faixa a nota se encaixa e determinar a classificação.
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Menu interativo com switch-case:

// Exibe o menu para o usuário
console.log("Escolha uma opção:");
console.log("1 - Opção 1");
console.log("2 - Opção 2");
console.log("3 - Opção 3");

const opcao = Number(prompt('Digite sua opção: '));

// Implementa a lógica com switch-case
switch (opcao) {
    case 1:
        console.log("Você escolheu a Opção 1");
        break;
    case 2:
        console.log("Você escolheu a Opção 2");
        break;
    case 3:
        console.log("Você escolheu a Opção 3");
        break;
    default:
        console.log("Opção inválida");
        //Se o usuário digitar 1: O caso case 1 é executado, e o programa imprime "Você escolheu a Opção 1", isso vale para 2 e 3, alem disso se ele escolhe outro numero que ñ esteje na lista aparecesa a msg Opção inválida
}

//5. Calcular o IMC e determinar a categoria de peso:

//converte a entrada de string para número.
const peso = Number(prompt('Informe o peso (kg): ')); // Captura e converte o input do usuário para número (peso)
const altura = Number(prompt('Informe a altura (m): ')); // para (altura)

// Calcula o IMC usando a fórmula: IMC = peso / altura^2
const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`); // Exibe o IMC calculado com 2 casas decimais

// Classifica o IMC em categorias
if (imc < 18.5) {
    console.log('Baixo peso'); // IMC menor que 18.5 é classificado como Baixo peso
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal'); // IMC entre 18.5 e 24.9 peso normal
} else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso');// IMC entre 25 e 29.9 sobrepeso
} else {
    console.log('Obesidade');// IMC igual ou maior que 30 Obesidade
}
///////////////////////////////////////////////////////////////////////////////////////////////////

//6. Verificar se os lados fornecidos formam um triângulo e indicar o tipo:

// Captura os valores dos três lados
const ladoA = Number(prompt('Informe o lado A: '));
const ladoB = Number(prompt('Informe o lado B: '));
const ladoC = Number(prompt('Informe o lado C: '));

// Verifica se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {//Esta condição verifica se os três lados podem formar um triângulo. Se qualquer uma dessas condições não for atendida, os lados não formam um triângulo.
    
    // Se formam um triângulo, determina o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) { //Se os três lados são iguais, o triângulo é classificado como "Equilátero".
        console.log('O triângulo é Equilátero');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {//Se dois dos três lados são iguais, o triângulo é classificado como "Isósceles".
        console.log('O triângulo é Isósceles');
    } else { //Se todos os lados são diferentes, o triângulo é classificado como "Escaleno"
        console.log('O triângulo é Escaleno');
    }
} else {//Se os valores não formam um triângulo, o programa imprime "Os lados fornecidos não formam um triângulo"
    console.log('Os lados fornecidos não formam um triângulo');
}
//TESTE 
//Se o usuário informar os valores 3, 4, 5:
//Esses valores formam um triângulo (3 < 4 + 5, 4 < 3 + 5, 5 < 3 + 4).
//Todos os lados são diferentes, então o programa imprime "O triângulo é Escaleno".
//Valore iguais e Equilátero
////////////////////////////////////////////////////////////////////////////////////////////////////////
    

//7. Calcular o valor total da compra de maçãs:

const quantidade = Number(prompt('Informe a quantidade de maçãs compradas: ')); //Captura e converte o input do usuário para número

let preco = 0.30; // Variável para armazenar o preço por unidade

// Determina o preço por unidade baseado na quantidade
if (quantidade >= 12) { // if verifica se a quantidade comprada é maior ou igual a 12. Se for, você redefine o preço por unidade para R$ 0,25.
    preco = 0.25;
}

const total = quantidade * preco;
console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`);
//calcula o valor total da compra multiplicando a quantidade pelo preço unitário, e em seguida, exibe o valor total para o usuário, formatado com duas casas decimais usando toFixed(2).
//////////////////////////////////////////////////////////////////////////////////////////

//8. Ler dois valores e escrevê-los em ordem crescente:

//Captura os dois valores numéricos
const valor1 = Number(prompt('Informe o primeiro valor: '));
const valor2 = Number(prompt('Informe o segundo valor: '));

// Compara os dois valores e os exibe em ordem crescente
if (valor1 < valor2) {//Verifica se o primeiro valor é menor que o segundo valor se for, imprime os valores em ordem crescente: primeiro valor1, depois valor2.
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else {//Se a condição anterior não for verdadeira (ou seja, valor2 é menor que valor1), imprime os valores em ordem crescente: primeiro valor2, depois valor1.
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//9. Contagem regressiva de 10 até 1:

//usarei o loop for, que é ideal para situações onde você sabe quantas vezes deseja repetir o bloco de código
for (let i = 10; i >= 1; i--) { //A inicialização começa em (let i = 10): Começamos o contador i em 10 condição (i >= 1): O loop continuará enquanto i for maior ou igual a 1 incremento/Decremento (i--): A cada iteração, o valor de i será decrementado em 1 (ou seja, i = i - 1).
    console.log(i);
}
//////////////////////////////////////////////////////////////////////
    

//10. Ler um número inteiro e escrevê-lo na tela 10 vezes:

const numeroInteiro = Number(prompt('Informe um número inteiro: '));
// Usa um loop for para exibir o número 10 vezes
for (let i = 1; i <= 10; i++) {
    console.log(numeroInteiro);
}
/////////////////////////////////////////////////////////////////////////////

//11. Solicitar 5 números e calcular a soma total:

let somas = 0; // Inicializa a variável para armazenar a soma dos números

// Usa um loop for para solicitar 5 números e somar todos
for (let i = 1; i <= 5; i++) {
    const numero = Number(prompt(`Informe o número ${i}: `));// Solicita e converte o número para tipo numérico
    somas += numero;// Adiciona o número à soma total
}

console.log(`A soma total dos números é: ${somas}`);
////////////////////////////////////////////////////////////////////////////////////


//12. Exibir a tabuada de um número fornecido pelo usuário:

const numeroTabuada = Number(prompt('Informe um número para ver a tabuada: '));

// Usa um loop for para exibir a tabuada de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} * ${i} = ${numeroTabuada * i}`);// Exibe o resultado da multiplicação
}
///////////////////////////////////////////////////////////////////////////////////////////

//13. Calcular a média aritmética de números decimais até que o usuário digite 0:

let soma = 0; // Variável para armazenar a soma dos números
let count = 0;// Variável para contar quantos números foram fornecidos

// Loop para receber números até que o usuário digite 0
while (true) {
    const numero = Number(prompt('Informe um número decimal (digite 0 para encerrar): '));
    
    if (numero === 0) break; // Se o número for 0, o loop é interrompido
    
    soma += numero; // Soma o número à variável soma
    count++; // Incrementa o contador
}
// Verifica se foram fornecidos números antes de calcular a média
if (count > 0) {
    const media = soma / count;// Calcula a média aritmética
    console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);// Exibe a média com 2 casas decimais
} else {
    console.log('Nenhum número foi informado.'); // Se o contador for 0, informa que nenhum número foi fornecido
}
////  //  ////////////////////////////////////////////////////////////////////////////////////////

//14. Calcular o fatorial de um número fornecido pelo usuário:

const numero = Number(prompt('Informe um número para calcular o fatorial: '));
let fatorial = 1;// Inicializa a variável fatorial com 1
// Usa um loop for para calcular o fatorial
for (let i = 1; i <= numero; i++) {
    fatorial *= i;// Multiplica fatorial pelo valor atual de i
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//15. Imprimir os primeiros 10 números da sequência de Fibonacci:

let n1 = 0, n2 = 1, proximo;// Inicializa os dois primeiros números da sequência de Fibonacci

console.log('Sequência de Fibonacci:');
console.log(n1); // Primeiro número
console.log(n2); // Segundo número

// Usa um loop for para gerar e exibir os próximos 8 números da sequência de Fibonacci
for (let i = 3; i <= 10; i++) {
    proximo = n1 + n2; // Calcula o próximo número da sequência
    console.log(proximo);
    n1 = n2;
    n2 = proximo;
}
