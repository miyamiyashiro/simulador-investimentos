export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investimento Inicial</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Retorno Esperado (%)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duração (Anos)</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  )
}
