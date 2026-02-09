// function subscribe() {
//     for (var i = 0; i<5; i++) {
//         console.log(i);
//     }
//     console.log("finally out side the block " +i);
// }

// subscribe();

// let myNum : number;
// let myNum = 1;l

// let myStr : string;
// myStr = "Welcome to my Code";

// let myBool : boolean;
// myBool = true;

// let myAnyType : any;
// myAnyType = "hello";

// let arrStr : string[];
// arrStr = ["hello1", "hello2"];

// let arrNum : number[];
// arrNum = [1,2,3,4,5];

// let anytype;
// anytype = "check this out";
// console.log(anytype);

// !😎 2. Type Assertion 
//? Type assertions have two forms.
//? One is the "angle-bracket" syntax:
//? The other is the as-syntax:

let muktinath;
muktinath = "subscribe";
(<string>muktinath).length;

(muktinath as string).length;

