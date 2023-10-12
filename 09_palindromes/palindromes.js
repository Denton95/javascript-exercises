const palindromes = function (string) {
    let stringClean = string.toLowerCase().replace(/\W/g, '');
    let reverseStringClean = stringClean.split('').reverse().join('');

    return stringClean === reverseStringClean;
};

// Do not edit below this line
module.exports = palindromes;
