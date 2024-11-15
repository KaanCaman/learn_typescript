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

const result = addTwoNumber({ a: 24, b: 24 });
console.log(result); // 48
