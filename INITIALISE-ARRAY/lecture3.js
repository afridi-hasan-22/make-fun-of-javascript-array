// traversing array
const arr = [45,5,78,63,99,14,55,39];
const n = arr[3];
const m = arr[6];
const x = 1;
const y = 0;
console.log(n , m , arr[x] , arr[y] , arr[x + y]);

//simple traverse 
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Array sum and avg
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);
console.log(sum / arr.length);

//find largest number
let largestNumber = arr[0];
for(let i = 1; i < arr.length; i++){
   if(arr[i] > largestNumber){
    largestNumber = arr[i];
   }
}
console.log(largestNumber);

