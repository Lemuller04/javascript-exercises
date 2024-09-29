const palindromes = function (str) {
    let formattedStr = "";

    // INCLUDES ONLY VALID ALPHANUMERIC CHARACTERS
    for (let i = 0; i < str.length; i++) {
        if (isValid(str[i])) {
            formattedStr += (str[i]).toLowerCase();
        }
    }

    for (let i = 0, l = formattedStr.length; i < l; i++) {
        if (formattedStr[i] != formattedStr[l - 1 - i]) {
            return false;
        }
    }

    // CHECKS IF A CHARACTER IS A VALID NUMBER OR LETTER IN THE ASCII TABLE
    function isValid(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
