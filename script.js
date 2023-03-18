// Fibonacci
function fibonacci(numero) {
    let a = 0
    let b = 1
  
    while (b < numero) {
      const temp = a
      a = b
      b = temp + b
    }
  
    if (b === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`
    }
  }
  
  // Lendo um número informado pelo usuário
  const numero = parseInt(prompt("Digite um número:"))
  
  // Chamando a função fibonacci com o número informado e exibindo o resultado
  console.log(fibonacci(numero))

//Fim Fibonacci

//Desafio 3
async function fetchArray() {
    const response = await fetch("./dados.json")
    const elements = await response.json() 

    const menorValor = elements.reduce((menor, elemento) => {
        if(elemento.valor < menor) {
            return elemento.valor
        } else {
            return menor
        }
    },0)
    console.log(`O menor valor de faturamento é: ${menorValor}`)

    const maiorValor = elements.reduce((maior, elemento) => {
        if(elemento.valor > maior) {
            return elemento.valor
        } else {
            return maior
        }
    },0)
    console.log(`O maior valor de faturamento é: ${maiorValor}`)

    const valoresValidos = elements.filter((item) => item.valor !== 0)
    const somaValoresValidos = valoresValidos.reduce((acumulador, elemento) => {
        return acumulador + elemento.valor
    },0)

    const media = somaValoresValidos / valoresValidos.length

    const faturamentoDia = valoresValidos.filter((item) => item.valor > media)
    console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à media mensal é de ${faturamentoDia.length}`)
} 
    fetchArray()
//Fim do desafio 3

//Desafio 4
const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const totalEstados = sp + rj + mg + es + outros

const percentSp = (sp * 100) / totalEstados
const percentRj = (rj * 100) / totalEstados
const percentMg = (mg * 100) / totalEstados
const percentEs = (es * 100) / totalEstados
const percentOutros = (outros * 100) / totalEstados

console.log(`O percentual de representação de São Paulo dentro do valor total da distribuidora é de ${percentSp}`)
console.log(`O percentual de representação do Rio de Janeiro dentro do valor total da distribuidora é de ${percentRj}`)
console.log(`O percentual de representação de Minas Gerais dentro do valor total da distribuidora é de ${percentMg}`)
console.log(`O percentual de representação do Espiríto Santo dentro do valor total da distribuidora é de ${percentEs}`)
console.log(`O percentual de representação de outros estados dentro do valor total da distribuidora é de ${percentOutros}`)
//Fim do Desafio 4

//Desafio 5
function inverterString(str) {
    let novaString = ''
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i]
    }
    return novaString
  }
  
  // Exemplo de uso
  const stringOriginal = 'Que seleção legal!'
  const stringInvertida = inverterString(stringOriginal)
  console.log(`A string invertida é ${stringInvertida}`)
//Fim Desafio 5