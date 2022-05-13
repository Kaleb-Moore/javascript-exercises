const palindromes = function (string) {
    let spiltString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .join('');

    let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(' ').join('');
    console.log(spiltString, newString)
    if (spiltString === newString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
