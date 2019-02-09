const addOne = (x) => {
    return x + 1;
  }

const multipleTwo = (x) => {
    return x * 2;
}

const pipe = (number, ...functions) => {
    let startIndex = 0;
    while(startIndex < functions.length) {
        number = functions[startIndex++](number);
    }
    return number;
}
pipe(1, addOne)
pipe(1, addOne, addOne)
pipe(1, addOne, addOne, multipleTwo)
