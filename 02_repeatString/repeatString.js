const repeatString = function(stringToRepeat, timesToRepeat) {
    if (timesToRepeat < 0) {
        return "ERROR";
    }

    let stringRepeated = "";
    for (let i = 0; i < timesToRepeat; i++) {
        stringRepeated += stringToRepeat;
    }
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
