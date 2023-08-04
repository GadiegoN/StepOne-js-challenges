// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 50 a 100.

let i = 50;

while (i <= 100) {
    console.log(i);
    i++;
}

console.log('Fim i')

// Utilizando o while, faça uma estrutura de repetição que dê o console somente dos números pares, começando no 2 e indo até 100.

let e = 0;

while (e <= 100) {
    if(e % 2 === 0) {
        console.log(e)
    }

    e++;
}

console.log('Fim e')

// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 100 a 1.

let x = 100;

while (x >= 0) {
    console.log(x);
    x--;
}

console.log('Fim x')
