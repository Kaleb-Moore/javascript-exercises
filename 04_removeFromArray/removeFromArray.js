const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        for (let i = 0; i != -1; i) {
            if (array.indexOf(arg) === -1) {
                i = -1;
            } else {
                array.splice(array.indexOf(arg), 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
