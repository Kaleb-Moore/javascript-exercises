const repeatString = function(string, num) {
    let answer = string;
    if (num === 0) {
        return ""
    } else if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 1; i < num; i++) {
            answer += string;
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
