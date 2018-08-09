'use strict';
class Dog {
  constructor(name,breed,age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

class Cat {
    constructor(name,breed,age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

class Ferret {
    constructor(name,age,foodRequirements){
    this.name = name;
    this.age = age;
    this.foodRequirements = foodRequirements;
  }
}

class Bird {
    constructor(name,breed){
    this.name = name;
    this.breed = breed;
  }
}

class Fish {
    constructor(name,species,waterConditions){
    this.name = name;
    this.species = species;
    this.waterConditions = waterConditions;
  }
}

var caldwell = new Dog("caldwell", "toy poodle", "4 months");
      var puff = new Cat("Professor Puff", "Maine Coon", "6 years");
      var sugarDaddy = new Ferret("Sugar Daddy", "2 years", "raw meat");
      var darla = new Bird("Darla", "cockatoo");

