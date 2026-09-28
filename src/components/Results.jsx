import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input)

  if (resultsData.length === 0) {
    return null
  }

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
        {/* Mapeamento dinâmico com chave única (key) */}
        {resultsData.map((yearData) => {
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