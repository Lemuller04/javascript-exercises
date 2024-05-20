const removeFromArray = function(originalArray, ...itemsToRemove) {
    let result = [];
    let isToBeRemoved = 0;

    for (let i = 0; i < originalArray.length; i++) {
        isToBeRemoved = 0;

        for (let j = 0; j < itemsToRemove.length; j++) {
            if (originalArray[i] === itemsToRemove[j]) {
                isToBeRemoved = 1;
            }
        }

        if (!isToBeRemoved) {
            result.push(originalArray[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
