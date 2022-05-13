const fibonacci = function(num) {
    let array = [1, 1];
    let fibonacciNum;
    if (parseInt(num) === 1 || parseInt(num) === 2) {
        return 1;
    }else if (parseInt(num) <= 0) {
        return "OOPS"
    } else {
        for (let i = 2; i < parseInt(num); i++) {
            let newNum = (array[i-2] + array[i-1]);
            array.push(newNum);
            fibonacciNum = array[parseInt(num)-1];
        }
        return fibonacciNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
