// Classes, methods, and fields in TypeScript may be abstract.
// An abstract method or abstract field is one that hasn’t had an implementation provided.
// These members must exist inside an abstract class, which cannot be directly instantiated.
// The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members.
// When a class doesn’t have any abstract members, it is said to be concrete.
// Let’s look at an example:
//
// TypeScript'teki sınıflar, yöntemler ve alanlar soyut olabilir.
// Soyut bir yöntem veya soyut bir alan, bir uygulama sağlanmamış olandır.
// Bu üyeler, doğrudan örneklenemeyen bir soyut sınıfın içinde bulunmalıdır.
// Soyut sınıfların rolü, tüm soyut üyeleri uygulayan alt sınıflar için bir temel sınıf olarak hizmet etmektir.
// Bir sınıfın herhangi bir soyut üyesi olmadığında, somut olduğu söylenir. Bir örneğe bakalım:
abstract class AbsBase {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

// const absBase = new AbsBase(); // Cannot create an instance of an abstract class.
//

// We can’t instantiate Base with new because it’s abstract.
// Instead, we need to make a derived class and implement the abstract members:
//
// Base'i soyut olduğu için new ile örnekleyemeyiz.
// Bunun yerine, türetilmiş bir sınıf oluşturmamız ve soyut üyeleri uygulamamız gerekir:

class AbsDerived extends AbsBase {
  getName() {
    return "world";
  }
}

const absDerBase = new AbsDerived();
absDerBase.printName();
//
