// an object with an inferred type (string and number)
// const user = {
//     name: "Hayes",
//     id: 0
// };

// describing the objects "shape" with the "interface" declaration:

interface User {
    name: String;
    id: number;
};

/* 

declaring that a js object conforms to the shape of your new "interface" by using syntax like 
(: TypeName) after the variable declaration => if you mispelled "name", it would let you know

*/
const user: User = {
    name: "Hayes",
    id: 0
};


/* 

With TypeScript, you can create complex types by combining simple ones. 
There are two popular ways to do so: with unions, and with generics.

A popular use-case for union types is to describe the set of string or number 
literals that a value is allowed to be:
 
*/

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";

type LockStates = "locked" | "unlocked";

type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

/*

unions provide a way to handle different types too. For example, you may have a function
that takes an array or a string

*/ 

function getLength(obj: string | string[]) {
    return obj.length
}

// to learn the type of a variable, use typeof:

function wrapInArray(obj: string | string[]) {
    if(typeof obj === "string") {
        return [obj]
    }

    return obj
}

/*

Generics provide variables to types. A common example is an array. An array without 
generics could contain anything. An array with generics can describe the values that the 
array contains.

*/

type StringArray = Array<string>;

type NumberArray = Array<number>;

type ObjectWithNameArray = Array<{ name: string }>


// you can declare your own types using generics:

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

/* 

This is a shortcut to tell typescript
there is a const called "backpack", and that 
typescript shouldn't worry about where it came from. 

*/

declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack
const object = backpack.get();

// since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// the error will indicate that the type is a string and the number doesn't pass

/*
One of TypeScript’s core principles is that type checking focuses on 
the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are 
considered to be of the same type.

*/

interface Point {
    x: number;
    y: number;
};

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
};

const point = { x: 12, y: 24 };
/*

despite the type of "point" never being declared, this variable passes because it's shape is compared
to the shape of "Point" in the type check. same shape found, so the code passes

*/

logPoint(point);

// The shape-matching only requires a subset of the object’s fields to match:

const point3 = { x: 12, y: 24, z: 36};
logPoint(point3); // logs "12, 24"

const rect = { x: 12, y: 24, width: 100, height: 200};
logPoint(rect) // logs "12, 24"

const color = { hex: "#187ABF" };
logPoint(color);
// take note of the error above, "hex" isn't found in the "Point" Interface, only "x" and "y"