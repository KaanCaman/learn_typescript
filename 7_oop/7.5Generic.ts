// Classes, much like interfaces, can be generic.
// When a generic class is instantiated with new,
// its type parameters are inferred the same way as in a function call:
//
// Sınıflar, tıpkı arayüzler gibi, genel olabilir.
// Genel bir sınıf new ile örneklendiğinde,
// tür parametreleri bir fonksiyon çağrısında olduğu gibi çıkarılır:
//
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b: Box<String> = new Box("hello!");
