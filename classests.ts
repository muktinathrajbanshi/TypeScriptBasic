//?cohesive

class youtubes{

    firstName : string;
    lastName : string;
    age : number; 

    //? The this keyword refers to the current instance of the class.
    //? Here, the parameter name and the name of the class's field are the same.
    //? Hence to avoid ambiguity, the class's field is prefixed with the this keyword.

    constructor(firstName : string, age  : number, lastName ? : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFirstName() {
        console.log("My first name is " + this.firstName + " "+ 
            this.age);
        
    }

    getLastName() {
        //
    }
}

let ytObj = new youtubes("Muktinath", 23);

ytObj.getFirstName();





//? Creating Instance objects
//? To create an instance of the class, use the new keyword
//? followed by the class name. The syntax for the same is given below-

//?! Syntax
//? var object_name = new class_name();