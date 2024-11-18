// You can use TypeScript to control whether certain methods or properties are visible to code outside the class.
// TypeScript'i, belirli yöntemlerin veya özelliklerin sınıf dışındaki kodlara görünür olup olmadığını kontrol etmek için kullanabilirsiniz.

// public
// The default visibility of class members is public. A public member can be accessed anywhere:
// Sınıf üyelerinin varsayılan görünürlüğü public'tir. Public bir üyeye her yerden erişilebilir:

class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();

// Because public is already the default visibility modifier,
// you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.
//
// public zaten varsayılan görünürlük değiştiricisi olduğundan,
// bunu bir sınıf üyesine yazmanız gerekmez, ancak stil/okunabilirlik nedenleriyle bunu yapmayı seçebilirsiniz.
//
//

// protected
//
// protected members are only visible to subclasses of the class they’re declared in.
// protected üyeler yalnızca bildirildikleri sınıfın alt sınıfları tarafından görülebilir.

class Greeter2 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter2 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
    //                          ^^^^^^^^^^^^^^
  }
}
const g2: Greeter2 = new SpecialGreeter();
g2.greet(); // OK
// g2.getName(); // Property 'getName' is protected and only accessible within class 'Greeter2' and its subclasses.

//
//

// private
// private is like protected, but doesn’t allow access to the member even from subclasses:
// private protected gibidir, ancak alt sınıflardan bile üyeye erişime izin vermez:

class PBase {
  private x = 0;
}

class PDerived extends Base {
  showX() {
    // Can't access in subclasses
    // console.log(this.x); // Property 'x' does not exist on type 'PDerived'.
  }
}
