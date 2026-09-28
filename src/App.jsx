import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {
  // Estado elevado no componente pai
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // O '+' garante a conversão de string para número
      }
    })
  }

  return (
    <>
      <Header />
      {/* Conecta o formulário passando o estado e a função de alteração */}
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Conecta a tabela de resultados passando o estado atualizado */}
      <Results input={userInput} />
    </>
  )
}

export default App
