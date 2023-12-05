const x = 10

try {
    x = 2
} catch (error) {
    console.log("Erro: " + error);
}

// Resultado: será retornado um erro ao executar no terminal, pois constantes não podem ter um novo valor atribuido