//Nome
console.log(process.argv);

const args = process.argv.slice(2); // Mostra os elementos do array a partir do 3° elemento
console.log(args);

const nome = args[0].split("=")[1]; // Separa os elementos que tem um = no meio e retorna o 2°
console.log(nome);