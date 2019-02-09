const getMin = (a, b, ...args) => {
    const array = [];
    array.push(a, b,...args);
    array.sort();
    return(array[0]);
}
getMin();