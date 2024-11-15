// generic
// The “...<T>” generic is used if you don't know what the basis will be and you don't know the type you are facing.
type ArrType<T> = {
  a: T;
};

interface Customer {
  name: string;
  age: number;
}

const arr1: ArrType<string>[] = [
  {
    a: "test1",
  },
];

const arr2: ArrType<number>[] = [
  {
    a: 24,
  },
];

const arr3: ArrType<boolean>[] = [
  {
    a: true,
  },
  {
    a: false,
  },
];

const arr4: ArrType<Customer>[] = [
  {
    a: {
      name: "kaan",
      age: 23,
    },
  },
];

console.log(arr1,arr2,arr3,arr4);
