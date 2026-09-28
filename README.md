# Simulador de Investimentos

Aplicação desenvolvida com React e Vite 8 para simular a evolução anual de um investimento.

## Executar o projeto

Com Node.js compatível com Vite 8 instalado (o projeto foi validado com Node.js 24), abra um terminal na pasta do projeto:

```sh
npm install
npm run dev
```

Abra o endereço local exibido no terminal.

## Gerar a versão de produção

```sh
npm run build
```

Os arquivos compilados são gerados em `dist`. Para visualizar essa versão localmente:

```sh
npm run preview
```

No PowerShell, caso a execução de `npm` seja bloqueada, use `npm.cmd` nos comandos acima.

## Funcionamento

Informe o investimento inicial, o aporte anual, o retorno esperado em porcentagem e a duração em anos. A tabela é atualizada automaticamente e apresenta o valor do investimento, os juros do ano, os juros acumulados e o capital investido.

Os juros são calculados sobre o saldo do início de cada ano; o aporte anual é adicionado ao final desse ano. Os valores são exibidos em dólares americanos (USD), sem casas decimais, conforme a atividade. A formatação não altera a precisão dos cálculos.

Os valores iniciais são 10.000 de investimento inicial, 1.200 de aporte anual, retorno de 6% e duração de 10 anos. Durações menores que 1 ocultam a tabela e exibem uma mensagem de orientação.

## Organização

- `src/App.jsx`: estado compartilhado e validação da duração.
- `src/components/Header.jsx`: logo e título.
- `src/components/UserInput.jsx`: campos controlados e eventos.
- `src/components/Results.jsx`: cálculos derivados e tabela de resultados.
- `src/util/investment.js`: função de cálculo e formatação monetária.
- `src/index.css`: estilos da aplicação.
- `src/index.jsx`: ponto de entrada do React.

## Validação manual

- Verifique as 10 linhas e 5 colunas da tabela inicial.
- Altere os investimentos e a taxa e confira a atualização dos resultados.
- Teste durações 1, 5 e 10 e confira a quantidade de linhas.
- Teste duração 0 e volte para 10 para verificar a mensagem e a recuperação da tabela.
- Com investimento inicial 1.000, aporte anual 100, retorno 10% e duração 2, os saldos finais devem ser 1.200 e 1.420. No segundo ano, os juros acumulados são 220 e o capital investido é 1.200.
- Confira o console do navegador e execute `npm run build` antes da entrega.
