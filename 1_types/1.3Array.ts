// array

// string array
let strArray: string[] = ['1', 'cm', 'an', 'false'];
let strArray2: Array<String> = ['z', 'i', 'j'];

// number array
let numArray:number[] = [3,4,5,9.2];
let numArray2: Array<Number> = [1, 2, 3, 4.5];


// Array<T>  === T[]

console.log(strArray[1], strArray2[2]); // 'cm', 'j'
console.log(numArray[0],numArray2[3]); // 3 , 4.5

