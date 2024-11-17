// key of
// The expression 'keyof':
// Key variable names of another type and interface 
// can be assigned as values to another type using 'keyof'

interface MyInter {
  a: string;
  b: number;
  c: boolean;
}

type MyTest = keyof MyInter

const myTest1:MyTest = 'a';
const myTest2:MyTest = 'b';
const myTest3:MyTest = 'c';
// const myTest4:MyTest = 'd'; // type 'd' is not assignable to type 'keyof MyInter'