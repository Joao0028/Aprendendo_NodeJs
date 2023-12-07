const http = require("http") 
const fs = require("fs")

const port = 3000 

const server = http.createServer((req, res ) => {

    const urInfo = require("url").parse(req.url, true)
    const name = urInfo.query.name // Está pegando o valor do input com name

    if(!name){
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, { "Content-Type": "text/html"})
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile("arquivo.txt", name, function(err, data){
            res.writeHead(302,{ // 302 é o status de redirecionamento ou redirect
                location: "/", // Ao enviar o name, seremos redirecionados novamente a página padrão que fica no path "/", pórem os dados serão apagados para adicionar novamente
            }) 
            return res.end() // Finaliza a resposta
        })
    }

})

server.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
})