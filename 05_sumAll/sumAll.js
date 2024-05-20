const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) != 'number' || typeof(y) != 'number') {
        return "ERROR";
    }

    let result = 0;
    let add = (x < y) ? 1 : -1;

    while (x !== y) {
        result += x;
        x += add;
    }

    return result += x;
};

// Do not edit below this line
module.exports = sumAll;
