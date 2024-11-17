// let varName:varType = varValue

// string type
let str: string = "string";

// number type
let num: number = 24;

// boolean type
let bool: boolean = false;

// undefined type
let und: undefined = undefined;

// object type
let arr: [] = [];
let nil = null;
let obj = {};

console.log(typeof str); // 'string'
console.log(typeof num); // 'number'
console.log(typeof bool); // 'bool'
console.log(typeof und); // 'undefined'
console.log(typeof arr); // 'object'
console.log(typeof nil); // 'object'
console.log(typeof obj); // 'object'

// ANY and UNKNOWN types are dynamic types and their values can change at runtime.
// ANY ve UNKNOWN türleri dinamik türlerdir ve değerleri çalışma zamanında değişebilir.

// any : can be assigned directly to a variable of a certain type.
// any : belirli bir tipteki değişkene doğrudan atanabilir.
let myNumber: number;
let myAny: any = "this is string";

myNumber = myAny;

// unknown: cannot be assigned to a variable of a certain type.
// unknown: belirli bir tipteki değişkene atanamaz.
let myBoolean: boolean;
let myUnknown: unknown = "this is string";

// myBoolean = myUnknown; // Type 'unknown' is not assignable to type 'boolean' | 'unknown' tipi 'boolean' tipine atanamaz'unknown' tipi 'boolean' tipine atanamaz
