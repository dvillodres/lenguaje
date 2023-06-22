console.log("************** DELIVERABLE 02 INIT *********************");

const concat = (firstArray: number[], secondArray: number[]) : number[] => {
    return [...firstArray, ...secondArray];
};

const concatMoreThanTwoArrays = (...arrays) : number[] => {
    return [...arrays].flat();
};

console.log('concat:', concat([1, 2, 3], [10, 20, 30]));

console.log('concat more than two arrays:', concatMoreThanTwoArrays(
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300]
));

console.log("************** DELIVERABLE 02 END *********************");
