// utility types

// partial : Makes the properties inside the wrapped type optional
interface User {
  id: number;
  name: string;
  birth: Date;
  status: boolean;
}

const myPartial: Partial<User> = {
  status: false,
};

// required : makes the properties of an optional type required
interface Vehicle {
  brand?: string;
  model?: string;
}

const myRequired: Required<Vehicle> = {
  brand: "Mercedes",
  model: "C-180",
};

//readonly : makes the type you wrap only readable
interface FootballTeam {
  name: string;
  dateOfFoundationYear: number;
}

let myReadOnly: Readonly<FootballTeam> = {
  name: "Fenerbahce",
  dateOfFoundationYear: 1907,
};
// myReadOnly.dateOfFoundationYear = 2222; //Cannot assign to 'dateOfFoundationYear' beacause it is read-only property.

//pick : allows you to select the keys you want from the type you are wrapping
interface PersonalComputer {
  brand: string;
  cpuCoreCount: number;
  gpuCoreCount: number;
  memSize: number;
  price: number;
}

const myPick: Pick<PersonalComputer, "brand" | "price"> = {
  brand: "Apple",
  price: 600,
};

//Omit : allows us to remove the properties inside the type you are wrapping
interface Bank {
  name: string;
  branch: string;
  balance: number;
}

const myOmit: Omit<Bank, "name"> = {
  branch: "Erzincan",
  balance: 24,
};