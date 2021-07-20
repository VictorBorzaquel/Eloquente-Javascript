{
    // Juntando
    let arrays = [[1, 2, 3], [4, 5], [6]];
    // Your code here.
    // → [1, 2, 3, 4, 5, 6]
    console.log(arrays.reduce((all, current) => all.concat(current)));
}
{
    // Diferença de idade entre mãe e filho

}
{
    // Todos e alguns
    function every(array, check) {
        array.forEach(element => {
            if (!check(element)) {
                return false
            }
        });
    }
    function some(array, check) {
        array.forEach(element => {
            if (check(element)) return true;
        });
        return false
    }
    // Your code here.

    console.log(every([NaN, NaN, NaN], isNaN));
    // → true
    console.log(every([NaN, NaN, 4], isNaN));
    // → false
    //console.log(some([NaN, 3, 4], isNaN));
    // → true
    //console.log(some([2, 3, 4], isNaN));
    // → false
}