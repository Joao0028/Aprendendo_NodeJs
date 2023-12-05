const minimist = require('minimist');


const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args['nome']
console.log(nome);

// Com o minimist, no terminal adicionasse -- antes de declarar algo. Exemplo: node index.js --nome=João