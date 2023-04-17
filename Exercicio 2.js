// Solicita ao usuário para informar um número inteiro
const num = parseInt(prompt("Por favor, informe um número inteiro: "));

// Inicializa as variáveis para os dois primeiros números da sequência
let numAnterior = 0;
let numAtual = 1;

// Loop para calcular os próximos números da sequência até encontrar um número igual ou maior que o informado pelo usuário
while (numAtual < num) {
  const numSeguinte = numAnterior + numAtual;
  numAnterior = numAtual;
  numAtual = numSeguinte;
}

// Verifica se o número informado pertence à sequência e imprime uma mensagem ao usuário
if (numAtual === num) {
  console.log(`O número ${num} pertence à sequência de Fibonacci!`);
} else {
  console.log(`O número ${num} NÃO pertence à sequência de Fibonacci!`);
}
