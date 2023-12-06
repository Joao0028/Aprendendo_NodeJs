const http = require("http") // Pegar o modulo Http

const port = 3000 // Definir uma porta para o servidor local

const server = http.createServer((req /*Requisição*/ , res /*Response*/) => {
    res.write("Hello Word!")
    res.end() // Sempre tem que finalizar, pois se não ficaraá carregando eternamente...
})

server.listen(port, () => { // Serve para definir a porta em que o server ficará
    console.log(`Servidor rodando na porta ${port}`); // Servepara saber se realmente deu certo após rodar nomeArquivo.js no terminal
})