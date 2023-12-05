const fs = require("fs");

fs.readFile("Arquivo.txt", "utf-8", (err, data) => {
    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
});
