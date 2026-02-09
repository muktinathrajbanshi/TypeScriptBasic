//?cohesive

class youtubes{

    firstName : string;
    lastName : string;
    age : number; 

    getFirstName() {
        console.log("My first name is " + this.firstName);
        
    }

    getLastName() {
        //
    }
}

let ytObj = new youtubes();
ytObj.firstName = "Muktinath";
ytObj.getFirstName();





//? Creating Instance objects
//? To create an instance of the class, use the new keyword
//? followed by the class name. The syntax for the same is given below-

//?! Syntax
//? var object_name = new class_name();