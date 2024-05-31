const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }

    let numInt = parseInt(num);

    if (numInt == 1 || numInt == 2) {
        return 1;
    }

    let numbers = [1,1];
    let sum = 0;
    let i = 0;

    while (i < numInt-2) {
        sum = numbers[i] + numbers[i+1];
        numbers.push(sum);
        i++;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
