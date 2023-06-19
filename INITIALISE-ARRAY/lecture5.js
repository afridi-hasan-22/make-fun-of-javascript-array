//Array Of Object
const favChannels = [
  { name: "Stack Learner", url: "https://youtube.com/stacklearner" },
  { name: "Js Bangladesh", url: "https://youtube.com/jsbangladesh" },
  { name: "Traverse Media", url: "https://youtube.com/traversemedia" },
  { name: "Wes Bos", url: "https://youtube.com/wesbos" },
];

//Array of Functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const funcs = [sum, sub, times, div, mod];
const a = 10;
const b = 20;

//Loop and call all functions from an array
for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  console.log(`[${funcs[i].name}] Result : ${result}`);
}

//Two dimensional Traerse
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

//Metrix sum with Array
const metrixA = [
    [1,3],
    [2,8],
    [4,6]
];

const metrixB = [
    [3,8],
    [2,6],
    [7,0]
];

const matrixSum = (metrixA, metrixB) => {
    const result = [];
    for(let i = 0; i < metrixA.length; i++){
        const row = [];
        for(let j = 0; j < metrixA[i].length;j++){
            row.push(metrixA[i][j] + metrixB[i][j])
        }
        result.push(row)
    }
    return result;
};

const matrixC = matrixSum(metrixA,metrixB);
console.log(matrixC);




