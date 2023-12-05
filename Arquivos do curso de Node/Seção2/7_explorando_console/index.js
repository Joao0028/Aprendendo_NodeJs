// mais de um valor
const x = 10
const y = "João Paulo"
const z = [1,2]

// contagem de impressões
console.count(`O valor de x é ${x}, contagem`) // Vai mostrar quantas vezs o console foi usado

// variavel entre string
console.log("O nome é %s, ele é programador", y) // Vai adicionar o valor da const y na string em %s

// limpar o console
setTimeout(() => {
    console.clear()
}, 2000) // Após 2 segundos o console será limpado