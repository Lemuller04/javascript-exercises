const palindromes = function (str) {
    let formattedStr = "";

    // PERFORMS A CHECK ON EACH CHARACTER OF THE STRING
    for (let i = 0; i < str.length; i++) {
        if (isValid(str[i])) {
            formattedStr += (str[i]).toLowerCase();
        }
    }

    let reversed = [...formattedStr].reverse().join(''); // REVERSES THE STRING
    let halfStr = formattedStr.slice(formattedStr.length/2); // GETS LAST HALF OF THE STRING
    let halfReversed = reversed.slice(reversed.length/2) // GETS LAST HALF OF THE REVERSED STRING

    // COMPARES EACH CHARACTER FROM LAST HALVES OF STRING AND REVERSED STRING
    for (let i = 0; i < halfStr.length; i++) {
        if (!(halfStr[i] === halfReversed[i])) {
            return false;
        }
    }

    // CHECKS IF A CHARACTER IS A VALID NUMBER OR LETTER IN THE ASCII TABLE
    function isValid(str) {
        c = str.charCodeAt();
        return (c > 64 && c < 91) || (c > 96 && c < 123) || (c > 47 && c < 58);
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
