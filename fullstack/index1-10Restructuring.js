// var name = "Everest";
// var height = 8848;
// var output = function () {
//   console.log(`Mt. ${this.name} is ${this.height} meters tall.`);
// }

var adventureClimbing = {
  name: "Everest",
  height: 8848,
  output() {
    console.log(`Mt. ${this.name} is ${this.height} meters tall.`);
  }
};

adventureClimbing.output();
