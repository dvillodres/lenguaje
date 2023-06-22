console.log("************** DELIVERABLE 01 INIT *********************");

const head = (data: number[]) : number => {
    const [firstElement] : number[] = data;
    return firstElement;
};

const tail = (data : number[]) : number[] => {
    const [, ...rest] : number[] = data;
    return rest;
}

const init = (data : number[]) : number[] => {
    data.pop();
    return data;
}

const last = (data : number[]) : number => {
    return data.pop();
}

console.log('head:', head([1, 2, 3, 4]));

console.log('tail:', tail([1, 2, 3, 4]))

console.log('init:', init([1, 2, 3, 4]))

console.log('last:', last([1, 2, 3, 4]))

console.log("************** DELIVERABLE 01 END *********************");
