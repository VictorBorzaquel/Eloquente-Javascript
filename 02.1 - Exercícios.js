{
    // Triângulo com Loop
    for (line = "#"; line.length <= 7; line += "#") {
        console.log(line);
    }
}

{
    // FizzBuzz
    for (count = 1; count <= 100; count++) {
        let output = "";
        if (count % 3 === 0) output += "Fizz";
        if (count % 5 === 0) output += "Buzz";
        console.log(output || count);
    }
}

{
    // Tabuleiro de Xadrez
    let size = 8;
    let output = "";
    for (line = 0; line < size; line++){
        for (character = 0; character <= size; character++) {
            if ((character + line) % 2 === 0) output += "#";
            else output += " ";
        }
        output += "\n";
    }
    console.log(output)
}