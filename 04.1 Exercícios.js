{
    // A soma de um intervalo
    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
    console.log(range(5, 2));

    function range(start, end, step = start < end ? 1 : -1) {
        let result = [];

        if (step > 0) {
            for (count = start; count <= end; count += step) {
                result.push(count);
            }
        } else {
            for (count = start; count >= end; count += step) {
                result.push(count);
            }
        }
        return result;
    };
    function sum(array) {
        let result = 0;
        for (let value of array) result += value; // in = index, of = value
        return result;
    };

}
{
    // Invertendo um array
    function reverseArray(arr) {
        let arrayReverse = [];
        for (index = arr.length - 1; index >= 0; index--) {
            arrayReverse.push(arr[index]);
        }
        return arrayReverse;
    };
    function reverseArrayInPlace(arr) {
        let value;
        for (index = 0; index < Math.floor(arr.length) / 2; index++) {
            value = arr[arr.length - 1 - index];
            arr[arr.length - 1 - index] = arr[index]
            arr[index] = value
        }
        return arr;
    };

    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    var arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]

}
{
    // A lista
    function arrayToList(array) {
        if (array.length) {
            return { value: array.shift(), rest: arrayToList(array) };
        } else {
            return null;
        }
    }

    function listToArray(list) {
        let array = [];
        for (node = list; node; node = node.rest) {
            array.push(node.value);
        }
        return array
    }
    function prepend(value, list) {
        return { value, rest: list };

    }
    function nth(list, number) {
        let count = 0;
        for (node = list; node; node = node.rest, count++) {
            if (count === number) return node.value;
        }
        return undefined
    }


    // Your code here.

    console.log(arrayToList([10, 20]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(20, null));
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
}
{
    // Comparação "profunda"
        console.log(typeof null);
    function deepEqual(a, b) {
        if (a === b) return true;

        if (a == null || typeof a != "object" || 
            b == null || typeof b != "object") return false;
        
        let keysA = Object.keys(a), keysB = Object.keys(b);

        if (keysA.length != keysB.length) return false;
        
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }

        return true;
    }
    // Your code here.

    var obj = { here: { is: "an" }, object: 2 };
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, { here: 1, object: 2 }));
    // → false
    console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
    // → true
}