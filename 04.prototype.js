const Computer = function(name, model) {
    this.name = name;
    this.model = model

    // this.aboutComputer = function() {
    //     console.log(`this computer name is ${this.name} and the model is ${this.model}`)
    // }
}

Computer.prototype.aboutComputer = function() {
    console.log(`this computer name is ${this.name} and the model is ${this.model}`)
}

const dell = new Computer("dell", "dkl25");
const hp = new Computer("hp", "dd33");
// console.log(dell)
// console.log(hp)

// dell.aboutComputer()



// const arr = [2, 5, 76, 23, 33, 22];

// const evenNumber = arr.filter(element => element % 2 === 0);



// console.log(Array.prototype)
// console.log(new Array())

// console.log(evenNumber)



Array.prototype.filter = function() {
    let arr = [];

    for(let i = 0; i< this.length; i++) {
        if(this[i] % 2 === 0) {
            arr.push(this[i]);
        }
    }

    return arr
}

const arr = [2, 5, 76, 23, 33, 22];

const evenNumber = arr.filter(element => element % 2 === 1);

console.log(evenNumber)

console.log([2, 3, 4, 5, 6,7].filter())
