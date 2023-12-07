const fs = require("fs");

const arquivoAntigo = "arquivoAntigo.txt";
const arquivoNovo = "arquivoNovo.txt";

fs.rename(arquivoAntigo, arquivoNovo, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}.`);
});
