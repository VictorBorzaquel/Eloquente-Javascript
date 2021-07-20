{
    // Mínimo
    function min(x, y) {
        if (x > y) return y;
        else return x;
    }

    console.log(min(0, 10));
    console.log(min(0, -10));
}

{
    // Recursão
    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → ??

    function isEven(value) {
        if (value === 0) return true;
        else if (value === 1) return false;
        else if (value < 0) return isEven(-value);
        else return isEven(value - 2);
    }
}

{
    // Contando feijões
    console.log(countBs("BBC"));
    // → 2
    console.log(countChar("kakkerlak", "k"));
    // → 4

    function countBs(string) {
        return countChar(string, "B");
    };
    function countChar(string, character) {
        let count = 0;
        for (index = 0; index < string.length; index++) {
            if (string[index] === character) count++;
        }
        return count;
    };
}