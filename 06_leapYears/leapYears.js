const leapYears = function(year) {

    let mod4 = year % 4;
    let mod100 = year % 100;
    let mod400 = year % 400;
    
    if ((mod100 === 0 && mod400 === 0)) {
        return true;
    } else if ((mod4 === 0 && mod100 != 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
