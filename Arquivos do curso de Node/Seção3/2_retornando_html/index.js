const http = require("http") 

const port = 3000 

const server = http.createServer((req, res ) => {
    res.statusCode = 200 // Significa que requisição foi bem sucedida
    res.setHeader('Contenty-Type', 'text/html') // Estou dizendo para o node que o tipo de conteúdo é html, e partir disso o programa esta habito para enviar html
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

server.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
})