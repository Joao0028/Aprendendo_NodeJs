const chalk = require("chalk")
const nota = 5;

if(nota >= 7){
    console.log(chalk.green("Parabéns! Você foi aprovado!"));
} else {
    console.log(chalk.bgRed.black.bold("Você foi reprovado e ficará de recuperação!"));
}