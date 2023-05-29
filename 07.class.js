// // class expretion
// const myName = class {

// }

// // class declaration

// class MyName {

// }



class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}


const dell = new Computer('Dell', "sldk33");

console.log(dell);
dell.aboutComputer();