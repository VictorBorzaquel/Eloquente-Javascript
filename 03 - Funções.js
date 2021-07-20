{ // Definindo Uma Função
    var square = function (x) {
        return x * x;
    };
    console.log(square(12));
}

{ // Parâmetros e Escopos
    var x = "outside"; // Criar variavel Global

    var f1 = function () {
        var x = "inside f1"; // Criar variavel local
    };
    f1();
    console.log(x);

    var f2 = function () {
        x = "inside f2"; // mudar variavel global
    };
    f2();
    console.log(x);
}

{ // Escopo Aninhado
    var landscape = function() {
        var result = "";

        var flat = function(size) {
            for (var count = 0; count < size; count++) {
                result += "_";
            }
        };
        var mountain = function(size) {
            result += "/";
            for (var count = 0; count < size; count++) {
                result += "'";
            }
            result += "\\";
        };
        flat(3);
        mountain(4);
        flat(6);
        mountain(1);
        flat(1);
        return result;
    };
    console.log(landscape())
}

{
    // Argumentos Opcionais
    function power(base, exponent) {
        if (!exponent) exponent = 2;
        var result = 1;
        for (count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    };
    console.log(power(4));
    console.log(power(4, 3));
}

{
    // Closure
    function wrapValue(n) {
        let localVariable = n;
        return function() {return localVariable;};
    };
    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);
    console.log(wrap1());
    console.log(wrap2());

    function multplier(factor) {
        return function(number) {
            return number * factor;
        };
    };
    var twice = multplier(2);
    console.log(twice(5));
}

{
    // Recursão
    function power(base, exponent) {
        if (!exponent) return 1;
        else return base * power(base, --exponent);
    };
    console.log(power(2,3));

    function findSolution(targuet) {
        function find(start, history) {
            if (start === targuet) return history;
            else if (start > targuet) return null;
            else return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
        };
        return find(1, "1");
    };
    console.log(findSolution(24));
}

{
    // Funções Crescentes
    function zeroPad(number, width) {
        var string = String(number);
        while (string.length < width) string = "0" + string;
        return string;
    };
    function printFarmInventory(...numberAnimals) {
        let animals = ["Cows", "Chickens", "Pigs"];
        let decimalPlaces = 3;
        for (index = 0; index < numberAnimals.length; index++) {
            console.log(zeroPad(numberAnimals[index], decimalPlaces) + " " + animals[index])
        }
    }
    printFarmInventory(7, 16, 8);
}

{
    // Funções e Efeitos Colaterais
    
}