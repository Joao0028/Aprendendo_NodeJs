function a(){
    console.log("Executando a()");
}
function b(){
    console.log("Executando b()");
}
function c(){
    console.log("Executando c()");
    a()
    b()
}

c() // Nesse caso colocamos o C para carregar o padrão começando por ele

/* Se a gente executar B,C,A, teremos uma linha de execução,
   ou seja, teremos um padrão de arquitetura
*/