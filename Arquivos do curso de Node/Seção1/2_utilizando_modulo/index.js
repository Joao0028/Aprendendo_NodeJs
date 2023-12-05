const fs = require("fs") // File System

fs.readFile("arquivo.txt", 'utf-8', (err , data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}); // Este código vai ler o arquivo.txt e retornar no console. Importante: O utf-8 é para dizer que é para ler os assentos, virgulas e pontuação...