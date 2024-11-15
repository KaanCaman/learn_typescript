// functions

// define AddProps
interface AddProps {
  a: number;
  b: number;
}

// define addTwoNumber Function
function addTwoNumber(prop: AddProps): string {
  return `${prop.a + prop.b}`;
}

// define addNumbers
function addNumbers(...params: Array<number>): number {
  let sum: number = 0;
  for (let index = 0; index < params.length; index++) {
    sum += params[index];
  }
  return sum;
}

const result = addTwoNumber({ a: 24, b: 24 });
const result2 = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result, result2); // 48 , 45
