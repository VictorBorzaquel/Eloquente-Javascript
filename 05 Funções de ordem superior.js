{ // Abstraindo Array transversal
    function forEach(array, action) {
        for (i = 0; i < array.length; i++) {
            action(array[i]);
        }
    }

    forEach(["Wampeter", "Foma", "Granfalloon"], console.log);


    let numbers = [1, 2, 3, 4, 5],
        sum = 0;

    forEach(numbers, function (number) {
        sum += number;
    });

    console.log(sum);
}

{ // forEach
    let numbers = [1, 2, 3, 4, 5],
        sum = 0;

    numbers.forEach(number => sum += number);

    console.log(sum);
}
{
    // Funções de ordem superior

    // Create function
    function greaterThan(n) {
        return function (m) { return m > n };
    }
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));

    // Alternar entre functions
    function noisy(f) {
        return function (arg) {
            console.log("calling with", arg);
            let val = f(arg);
            console.log("called with", arg, "- got", val);
            return val;
        };
    }
    noisy(Boolean)(0);

    // new control flux
    function unless(test, then) {
        if (!test) then();
    }
    function repeat(times, body) {
        for (i = 0; i < times; i++) body(i);
    }

    repeat(10, function (n) {
        unless(n % 2, function () {
            console.log(n, "is even");
        });
    });
}
{
    // Passando argumentos
}
{
    // JSON
    let ancestry = [
        {
            "name": "Emma de Milliano", "sex": "f",
            "born": 1876, "died": 1956,
            "father": "Petrus de Milliano",
            "mother": "Sophia van Damme"
        },
        {
            "name": "Carolus Haverbeke", "sex": "m",
            "born": 1832, "died": 1905,
            "father": "Carel Haverbeke",
            "mother": "Maria van Brussel"
        },
        {
            "name": "Victor", "sex": "f",
            "born": 1500, "died": 1580,
            "father": "Petrus de Milliano",
            "mother": "Sophia van Damme"
        },
        {
            "name": "Hugo Haverbeke", "sex": "m",
            "born": 1640, "died": 1930,
            "father": "Carel Haverbeke",
            "mother": "Maria van Brussel"
        }
    ]

    let object1 = {name: "X", born: 1980};
    let json = JSON.stringify(object1);
    let object2 = JSON.parse(json);

    console.log(json);
    console.log(object2);

    console.log(JSON.parse(json).born);

    // Filtrando um array
    console.log(ancestry.filter(person => person.father === "Carel Haverbeke"));
    
    // Transformando com map
    console.log(ancestry.map(person => person.name));

    // Resumindo com reduce
    console.log(ancestry.reduce((min, cur) => {
        if (cur.born < min.born) return cur;
        else return min;
    }));

    // Componibilidade
    function average(array) {
        function plus(a, b) { return a + b; }
        return array.reduce(plus) / array.length;
    }
    function age(p) { return p.died - p.born; }
    function male(p) { return p.sex === "m"; }
    function female(p) { return p.sex === "f"; }

    console.log(average(ancestry.filter(male).map(age)));
    console.log(average(ancestry.filter(female).map(age)));
}
{
    // Binding

}