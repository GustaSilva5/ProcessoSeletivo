//Não consegui usar JSON peço perdão por não entregar o que foi pedido 
// vetor com o faturamento diário da distribuidora
const faturamentoDiario = [100, 150, 80, 200, 120, 180, 250, 90, 160, 140, 110, 190];

// inicializa as variáveis de menor e maior faturamento com o primeiro valor do vetor
let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];

// percorre o vetor para encontrar o menor e o maior valor de faturamento
for (let i = 1; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }
}

// calcula a média mensal do faturamento diário
const mediaMensal = faturamentoDiario.reduce((acc, curr) => acc + curr) / faturamentoDiario.length;

// percorre o vetor novamente para contar quantos dias tiveram faturamento diário superior à média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaDaMedia++;
  }
}

// exibe os resultados
console.log(`Menor faturamento diário: R$${menorFaturamento}`);
console.log(`Maior faturamento diário: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento diário acima da média: ${diasAcimaDaMedia}`);
