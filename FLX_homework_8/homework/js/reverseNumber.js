const reverseNumber = (a) => {
    let numberToString = a.toString();
    let sign = '';
    if (!Number(numberToString[0])) {
        sign = numberToString[0];
        numberToString = numberToString.substr(1);
    }
    const reversedNumber = (sign + numberToString.split('').reverse().join(''))-0;
    return reversedNumber;
}
reverseNumber(123);