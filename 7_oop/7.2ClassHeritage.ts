// Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.
// Nesne yönelimli özelliklere sahip diğer diller gibi JavaScript'teki sınıflar da temel sınıflardan miras alabilir.

// implements
// You can use an implements clause to check that a class satisfies a particular interface.
// You can use an implements clause to check that a class satisfies a particular interface.
// An error will be issued if a class fails to correctly implement it.
//
// Bir sınıfın belirli bir arayüzü karşılayıp karşılamadığını kontrol etmek için bir implements cümlesi kullanabilirsiniz.
// Bir sınıf bunu doğru şekilde uygulayamazsa bir hata verilecektir:

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// error:
// Class 'Ball' incorrectly implements interface 'Pingable'.
// Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
/*  class Ball implements Pingable {
    pong() {
      console.log("pong!");
        }
    }
*/

// Classes may also implement multiple interfaces, e.g. class C implements A, B {...}
// Sınıflar birden fazla interface'i de uygulayabilir, örneğin class C implements A, B'yi {...}

//

// extends:

// Classes may extend from a base class.
// A derived class has all the properties and methods of its base class,
// and can also define additional members.
//
// Sınıflar bir temel sınıftan türetilebilir.
// Türetilmiş bir sınıf,
// temel sınıfının tüm özelliklerine ve yöntemlerine sahiptir ve ayrıca ek üyeler tanımlayabilir.

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
// Temel sınıf metodu
d.move();
// Derived class method
// Türetilmiş sınıf metodu
d.woof(3);

// Overriding Methods
//
// A derived class can also override a base class field or property.
//You can use the `super` syntax to access base class methods.
// Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.
// TypeScript enforces that a derived class is always a subtype of its base class.
// For example, here’s a legal way to override a method:
//
// Türetilmiş bir sınıf, bir temel sınıf alanını veya özelliğini de geçersiz kılabilir.
// Temel sınıf yöntemlerine erişmek için `super` sözdizimini kullanabilirsiniz.
// JavaScript sınıfları basit bir arama nesnesi olduğundan, "süper alan" kavramının olmadığını unutmayın.
// TypeScript, türetilmiş bir sınıfın her zaman temel sınıfının bir alt türü olduğunu zorunlu kılar.
// Örneğin, bir yöntemi geçersiz kılmanın yasal bir yolu:

class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const myVar: Derived = new Derived();
myVar.greet();
myVar.greet("reader");
