console.log("************** DELIVERABLE 03 *********************");

const clone = (source) => {
    return {...source};
};


const source = {
    id: 1,
    name: 'source'
}

const cloned = clone(source);
cloned.name = 'cloned';

console.log('source:', source)
console.log('clone:', cloned)
console.log('Are the same object:', source === cloned);


const merge = (source, target) => {
    return {...target, ...source};
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log('source:', a)
console.log('target:', b)
console.log('merged:', merge(a, b))

console.log("************** DELIVERABLE 03 END *********************");

