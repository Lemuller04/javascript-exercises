const findTheOldest = function(objIn) {
    const sortedPeople = objIn.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }
        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1
    });
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
