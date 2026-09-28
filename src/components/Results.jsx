import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {
  // Executa o cálculo com os dados do estado
  const resultsData = calculateInvestmentResults(input)

  // Se não houver dados, não renderiza a tabela
  if (resultsData.length === 0) {
    return null
  }

  // Calcula o investimento inicial baseando-se no primeiro ano
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Ano</th>
          <th>Valor do Investimento</th>
          <th>Juros (Ano)</th>
          <th>Total de Juros</th>
          <th>Capital Investido</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          // Cálculos acumulados para cada ano
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}