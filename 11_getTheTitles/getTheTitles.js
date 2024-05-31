const getTheTitles = function(objIn) {
    const titles = objIn.reduce((obj, item) => {
        obj.push(item.title)
        return obj;
    }, []);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
