export const reverseNumber = (num) => {
    const usedNum = num.toString();
    let result = '';
    for (let i = usedNum.length - 1; i >= 0; i -= 1) {
        result += usedNum[i];
    }
    return parseInt(result);
};

export const isPerfectSquare = (num) => {
    for (let i = 0; i <= num / 2; i += 1) {
        if (i ** 2 === num) return true;
    }
    return false;
};

export const factorial = (num) => {
    let result = 1;
    if (num === 0) return 1;
    for (let i = 1; i <= num; i += 1) {
        result *= i;
    }
    return result;
};

export const findGCD = (num1, num2) => {
    let result = 0;
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    if (min > 0) {
        for (let i = 1; i <= min; i += 1) {
            if ((num1 % i === 0) && (num2 % i === 0)) result = i;
        }
    } else if (min < 0) {
        for (let i2 = min; i2 <= max; i2 += 1) {
            if ((num1 % i2 === 0) && (num2 % i2 === 0)) result = i2 * (-1);
        }
    }
    return result;
};

export const mergeStrings = (...text) => {
    return text.join('');
};
