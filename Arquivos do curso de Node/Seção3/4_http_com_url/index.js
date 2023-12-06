const http = require("http") 
const url = require("url") 

const port = 3000 

const server = http.createServer((req, res ) => {

    const urlInfo = require('url').parse(req.url, true) // Quando a requisição chegar aqui, iremos chamar o módulo url e vamos parsear a url que vem pela requisição. E o true serve para fuincionar corretamente
    const name = urlInfo.query.name // Vou pegar a urlInfo "decomposta" e buscando o parametro name

    res.statusCode = 200 
    res.setHeader('Contenty-Type', 'text/html')
    if(!name){ // Se não vier um name na requisição, retorne um formulario para enviar este name: 
        res.end("<h1>Preencha seu nome:</h1> <form method='GET' > <input type='text' name='name'></input> <input type='submit' value='Enviar'></input/> </form> ")
    }else{ // Quando tiver name para requisição me retorne:
        res.end(`<h1>Seja bem vindo ${name}!</h1>`)
    }
})

server.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
})