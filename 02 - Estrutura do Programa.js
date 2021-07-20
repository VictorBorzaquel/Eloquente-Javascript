console.log(Math.max(2, 4));
console.log(Math.min(2, 4));

var theNumber = 22;
if (!isNaN(Number(theNumber))) {
    var theNumberQuadrado = theNumber * theNumber
    console.log("Seu numero ao quadrado é: " + theNumberQuadrado )
}else {
    console.log("Insira um número")
}

var number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

var seDois = 5;
do {
    console.log(seDois);
    seDois++;
} while (seDois < 2);

for (var number = 0; number <= 12; number += 2) {
    console.log(number);
}

for (var current = 20; ; current++) {
    if (current % 7 === 0) break;
}
console.log(current)

for (count = 0; count <= 10; count++) {
    if (count % 2 === 0) continue;
    console.log(count);
}

var nome = "Hugo";
switch (nome) {
    case "Victor":
        console.log("Primeiro Nome");
        break;
    case "Hugo":
        console.log("Nome do Meio");
        break;
    case "Borzaquel":
        console.log("Sobrenome");
        break;
    default:
        console.log("Não é seu nome");
        break;
}
