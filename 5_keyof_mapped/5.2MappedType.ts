// mapped type
// is a type type that we create by taking another key and specifying a new variable type.

type Prop = "a" | "b" | "c";

type NewType = {
  [P in Prop]: number;
};

const prop: Prop = "a";
const newType: NewType = {
  a: 1,
  b: 2,
  c: 3,
};

// example 2 :

// Create another type by taking a type as a generic type and manipulating it
type Prop2 = {
  id?: number;
  name?: string;
  bio: string;
};

type MyPartialNonNullableType<T> = {
  [P in keyof T]-?: T[P];
}; // keys = ['id', 'name','bio']

type MyPartialNullableType<T> = {
  [P in keyof T]: T[P];
}; // keys = ['id?','name?','bio']

type Prop3 = MyPartialNonNullableType<Prop2>;
type Prop4 = MyPartialNullableType<Prop2>;

const prop3: Prop3 = {
  id: 1,
  name: "Kaan",
  bio: "Developer",
};

const prop4: Prop4 = {
  id: undefined,
  name: undefined,
  bio: "hacker",
};
