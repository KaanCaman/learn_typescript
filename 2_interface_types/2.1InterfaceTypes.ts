// interface
// define InterPoint
interface InterPoint {
  x: number;
  y: number;
}
// define myInterPoint var.
const myInterPoint: InterPoint = { x: 2, y: 4 };
console.log(myInterPoint); // {x:4,y:2}

// Types
// define TypePoint
type TypePoint = {
  a: number;
  k: number;
};

// define myTypePoint var.
const myTypePoint: TypePoint = { a: 4, k: 2 };
console.log(myTypePoint); // {a:4,k:2}

// Interface vs Type
// Type naming and Interface are very similar.
// In most cases you can use one in place of the other,
// all the properties that interface offers are also valid for type.
// The big difference is that type cannot be reopened
// for new property but interface is always extandable.

// define Animal
interface Animal {
  name: string;
}

// We can extend interface.
// define Bear extends Animal
interface Bear extends Animal {
  honey: boolean;
}

// define bear var.
const bear: Bear = { name: "Kaan", honey: true };
console.log(bear.name, bear.honey); // Kaan true

// New fields can also be added to the interface
interface InterWindow {
  title: string;
}

interface InterWindow {
  ts: string;
}

const interWindow: InterWindow = { title: "Hello World!", ts: "good" };
console.log();

// vs

// define Vehicle.
type Vehicle = {
  wheels: number;
};

//We can extend type with Intersection &
// define Motorbike extends Vehicle
type Motorbike = Vehicle & {
  clutch: string;
};

// define motorbike var.
const motorbike: Motorbike = { wheels: 2, clutch: "by hand" };
console.log(motorbike.wheels, motorbike.clutch); //  2, by hand

// new fields cannot be added
type TypeWindow = { title: string };

// type TypeWindow = { ts: string };// Duplicate identifer
