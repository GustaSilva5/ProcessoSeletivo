const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let valorTotalFaturamento = 0;
  
  for (const estado in faturamentoMensal) {
    valorTotalFaturamento += faturamentoMensal[estado];
  }
  
  for (const estado in faturamentoMensal) {
    const percentualRepresentacao = (faturamentoMensal[estado] / valorTotalFaturamento) * 100;
    console.log(`${estado}: ${percentualRepresentacao.toFixed(2)}%`);
  }
  