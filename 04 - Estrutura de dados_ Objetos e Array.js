{
    // Métodos
    let doh = "Doh";
    console.log(typeof doh.toUpperCase);
    console.log(doh.toUpperCase());

    let mack = [];
    mack.push("Mack");
    mack.push("the", "Knife");
    console.log(mack);
    console.log(mack.join(" "));
    console.log(mack.pop());
    console.log(mack);
}

{
    // Objetos
    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running", "television"]
    };
    console.log(day1.squirrel);
    console.log(day1.wolf);
    day1.wolf = false;
    console.log(day1.wolf);

    let description = {
        work: "Went to work",
        "touched tree": "Touched a tree"
    };
    console.log(description.work);
    console.log(description["touched tree"]);

    let anObject = { left: 1, right: 2 };
    console.log(anObject.left);
    delete anObject.left;
    console.log(anObject.left);
    console.log("left" in anObject);
    console.log("right" in anObject);
}

{
    // Mutabilidade
    let var1 = 10;
    let var2 = var1;
    let var3 = 10;
    console.log(var1 === var3);
    var1 = 15;
    console.log(var2);

    let object1 = { value: 10 };
    let object2 = object1;
    let object3 = { value: 10 };
    console.log(object1 === object3);
    object1.value = 15;
    console.log(object2.value);
}

{
    // Objetos como mapas
    var map = {};
    function storePhi(event, phi) {
        map[event] = phi
    }
    storePhi("pizza", 0.069);
    storePhi("touched tree", -0.081);

    console.log("pizza" in map);
    console.log(map["touched tree"]);

    for (let event in map) console.log("The correlation for '" + event + "' is " + map[event]);
}

{
    // Estudo aprofundado de Arrays
    let todoList = [];
    function rememberTo(task) {
        todoList.push(task);
    };
    function whatIsNext() {
        return todoList.shift();
    };
    function urgentlyRememberTo(task) {
        todoList.unshift(task);
    };

    rememberTo("Lavar"); 
    rememberTo("Secar"); 
    urgentlyRememberTo("Escovar");

    console.log(whatIsNext());
    console.log(whatIsNext());

    let index = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    console.log(index.indexOf(2));
    console.log(index.lastIndexOf(2));
    console.log(index.slice(2, 5));
    console.log(index.slice(2));

    function remove(array, index) {
        return array.slice(0, index)
            .concat(array.slice(++index));
    };
    let array = ["a", "b", "c", "d", "e"];
    console.log(remove(array, 2));
}

{
    // Strings e suas propriedades
    let string = "coconuts";
    console.log(string.slice(4, 7));
    console.log(string.indexOf("u"));
    console.log(string.indexOf("con"));

    let frase = "   caracters   \n  ";
    console.log(frase, frase.length);
    console.log(frase.trim(), frase.trim().length);

    let stringChar = "abc";
    console.log(stringChar.length);
    console.log(stringChar.charAt(1));
    console.log(stringChar[1]);
}

{
    // O Objeto Arguments
    function argumentCounter() {
        return arguments.length;
    }
    console.log(argumentCounter("Straw", "Tautology", "hominem"));

    // O Objeto Math
    function randomPointOnCircle(radius) {
        let angle = Math.random() * 2 * Math.PI;
        return { x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
    }
    console.log(randomPointOnCircle(2));

    console.log(Math.floor(Math.random() * 10));
    let numberRedond = 12.4;
    console.log(Math.floor(numberRedond));
    console.log(Math.ceil(numberRedond));
    console.log(Math.round(numberRedond));
    
    var myVar = 10;
    console.log("myVar" in window);
    console.log(window.myVar);

}