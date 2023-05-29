const HourseRent = function(ammount) {
    this.ammount = ammount;
}

HourseRent.prototype.houseRentIncrementbyYearly = function() {
    this.ammount += 1000;

    console.log(`next year my house rent will be ${this.ammount}`);
}

HourseRent.prototype.houseRentDecrementbyYearly = function() {
    this.ammount -= 1000;

    console.log(`next year my house rent will be ${this.ammount}`);
}

const myHouse = new HourseRent(15000)

console.log(myHouse)
myHouse.houseRentIncrementbyYearly();
myHouse.houseRentIncrementbyYearly();
myHouse.houseRentIncrementbyYearly();
console.log(myHouse)
myHouse.houseRentDecrementbyYearly();
myHouse.houseRentDecrementbyYearly();
console.log(myHouse)