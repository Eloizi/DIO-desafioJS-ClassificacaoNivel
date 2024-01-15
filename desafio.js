//let nomeDoHeroi = "Eloizi";
//let quantXP = 10001;


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeDoHeroi) => {
    rl.question('Digite a quantidade de XP: ', (quantXPInput) => {
        const quantXP = parseInt(quantXPInput);

        if (isNaN(quantXP)) {
            console.log('Digite um valor numérico para a quantidade de XP. \n Tente novamente! ');
        } else {

            if (quantXP <= 1000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Ferro");
            } else if (quantXP >= 1001 && quantXP <= 2000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Bronze");
            } else if (quantXP >= 2001 && quantXP <= 5000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Prata");
            } else if (quantXP >= 5001 && quantXP <= 7000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Ouro");
            } else if (quantXP >= 7001 && quantXP <= 8000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Platina");
            } else if (quantXP >= 8001 && quantXP <= 9000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Ascendente");
            } else if (quantXP >= 9001 && quantXP <= 10000) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Imortal");
            } else if (quantXP >= 10001) {
                console.log("O Herói de nome: " + nomeDoHeroi + " com a quantidade de XP em: " + quantXP + " Se encontra no nível -> Radiante");
            } else {
                console.log("Erro! Por favor, verifique as informações inseridas:\nNome do herói: " + nomeDoHeroi + "\nQuantidade de XP: " + quantXP);
            }
        }
        rl.close();
    });
});

