// Função para calcular os resultados ano a ano dos investimentos
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // Número do ano
      interest: interestEarnedInYear, // Juros do ano
      valueEndOfYear: investmentValue, // Valor final do ano
      annualInvestment: annualInvestment, // Investimento realizado no ano
    });
  }

  return annualData;
}

// Objeto para formatar valores numéricos em dólares americanos, sem casas decimais
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
