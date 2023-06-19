//use push to insert at the end
const arrP1 = [1,2,3];
const arrP2 = [9,10];
arrP1.push(4);
arrP1.push(5,6,7);
arrP1[arrP1.length] = 8;
arrP1.push(...arrP2)
console.log(arrP1);

//use unshift to insert at the beginning
const arrU1 = [5,6,7];
const arrU2 = [1,2,3];
arrU1.unshift(4);
arrU1.unshift(...arrU2)
console.log(arrU1);

//use splice to insert at the given index
const arrS1 = [1,2,3,5,9];
arrS1.splice(3, 0, 4);
const arrS2 = [6,7,8]
arrS1.splice(5, 0, ...arrS2)
console.log(arrS1);