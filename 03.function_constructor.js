const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer = function () {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`
    );
  };
};

const Compute1 = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer1 = () => {
    console.log(`this is  ${this.name} and the model is ${this.model}`);
  };
};

const mac = new Compute1('mac11', 'fkjs');
console.log(mac);
mac.aboutComputer1();

const dell = new Computer('dell', 'dkl25');
const hp = new Computer('hp', 'dd33');
console.log(dell);
console.log(hp);

dell.aboutComputer();

// const obj = {};

// obj.name = "code ABC";
// obj.playlist = 20;

// console.log(obj)

// 4 rules of Function Constructor

// 1. create an empty object {}
// 2. function is called this = {}
// 3. {} linked to the prototype
// 4. {} will return automatically
