class Computer {
    // private field
    #warenty
    constructor(name, model, warenty) {
        this.name = name;
        this.model = model;
        this.#warenty = warenty
    }

    aboutComputer() {
        this.#aboutWarenty()
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }


    // private method
    #aboutWarenty() {
        console.log(`${this.#warenty} years of warenty provide dell`)
    }
}

let dell = new Computer("Dell", "dk45", 3)
dell.aboutComputer()
// dell.#aboutWarenty()