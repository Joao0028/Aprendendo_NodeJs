const url = require("url"); // Importação do modulo url
const address = "htttps://www.meusite.com.br/catalog?produtos=cadeira";
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host); // Mostra o seu site
console.log(parsedUrl.pathname); // Mostra a página que você está no seu site
console.log(parsedUrl.search); // O que você está pesquisando nessa página
console.log(parsedUrl.searchParams);  // Os parametros que está buscando
console.log(parsedUrl.searchParams.get(`produtos`)); // Vai pegar a chave do searchParams que está buscando 

// Resultado no console:
/*
    www.meusite.com.br
    /catalog
    ?produtos=cadeira
    URLSearchParams { 'produtos' => 'cadeira' }
    cadeira
*/
