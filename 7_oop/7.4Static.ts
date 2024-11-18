// Classes may have static members.
// These members aren’t associated with a particular instance of the class.
// They can be accessed through the class constructor object itself:
//
// Sınıflar statik üyelere sahip olabilir.
// Bu üyeler sınıfın belirli bir örneği ile ilişkili değildir.
// Bunlara sınıf kurucu nesnesinin kendisi aracılığıyla erişilebilir:
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
//

// Static members can also use the same public, protected, and private visibility modifiers:
// Statik üyeler de aynı public, protected ve private görünürlük değiştiricilerini kullanabilir:
class MyClass2 {
  private static x = 0;
}
// console.log(MyClass2.x); // Property 'x' is private and only accessible within class 'MyClass2'.
//

// Static members are also inherited:
// Statik üyeler de miras alır.
class B {
  static getGreeting() {
    return "Hello world";
  }
}
class D extends B {
  myGreeting = D.getGreeting();
}
