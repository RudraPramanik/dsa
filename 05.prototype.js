const Computer = function (name, model) {
    this.name = name;
    this.model = model

    // this.aboutComputer = function() {
    //     console.log(`this computer name is ${this.name} and the model is ${this.model}`)
    // }
}

Computer.prototype.aboutComputer = function () {
    console.log(`this computer name is ${this.name} and the model is ${this.model}`)
}

const dell = new Computer("dell", "dkl25");
const hp = new Computer("hp", "dd33");



// console.log(Computer.prototype === dell.__proto__);

// console.log(dell.hasOwnProperty("name"))

// console.log(dell)
// console.log(Object.getPrototypeOf(dell));
// console.log()





// let arr = [2, 3, 5]

// let obj = {
//     name: "code abc"
// }

// console.log(obj)
// console.log(Object())
// console.log(arr)
// console.log(new Array)



