const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual é o seu nome?",
    },
    {
      name: "idade",
      message: "Qual é sua idade?",
    },
  ])
  .then((resposta) => {
    if (!resposta.nome || !resposta.idade) {
      throw new Error("O nome e idade devem ser preenchidos!");
    }

    const nome = resposta.nome;
    const idade = resposta.idade;

    console.log(
      chalk.bgYellow.white(`Seja bem vindo ${nome} de ${idade} anos.`)
    );
  })
  .catch((erro) => {
    console.log("Erro: " + erro);
  });
