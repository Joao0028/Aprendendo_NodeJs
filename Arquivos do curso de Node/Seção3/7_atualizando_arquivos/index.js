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

        const nameNewLine = name + "\r\n" // O "\r\n" serve para quebrar linha no windows e linux

        fs.appendFile("arquivo.txt", nameNewLine, function(err, data){ // Adicionei o appendFile para atualizar arquivo.txt ao invés de apagar o antigo e adiconar um com novo nome
            res.writeHead(302,{ // 302 é o status de redirecionamento ou redirect
                location: "/", // Ao enviar o name, seremos redirecionados novamente a página padrão que fica no path "/", pórem os dados serão apagados para adicionar novamente. E será criado um arquivo.txt com o name que passamos no input
            }) 
            return res.end() // Finaliza a resposta
        })
    }

})

server.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
})