const sumAll = function(num1, num2) {
    let answer = 0;
    if (num1 < num2 && num1 > 0 && isNumber(num1) && isNumber(num2)) {
        for (let i = num1; i <= num2; i++) {
            answer += i;
        }
    } else if (num2 < num1 && num2 > 0 && isNumber(num1) && isNumber(num2)){
        for (let i = num2; i <= num1; i++) {
            answer += i;
        }
    } else {
        return "ERROR";
    }

    return answer
};

let isNumber = (number) => {
    if (typeof(number) === 'string') {
        return false;
    } else {
        return true;
    }
}

// Do not edit below this line
module.exports = sumAll;
