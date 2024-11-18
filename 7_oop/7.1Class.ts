//
// a simple class defintion
// basit bir class tanımlaması

class Person {
  // a property of class
  // class'ın bir özelliği
  name: string;

  // constructor function to be executed when a new object is created
  // yeni bir nesne oluşturulduğunda çalıştırılacak kurucu fonksiyon
  constructor(name: string) {
    this.name = name;
  }

  // A function that we can run after creating an object from the class
  // Sınıftan nesne oluşturduktan sonra çalıştırabileceğimiz bir fonksiyon
  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person1: Person = new Person("Kaan");
person1.greet(); // Hello, my name is Kaan.
