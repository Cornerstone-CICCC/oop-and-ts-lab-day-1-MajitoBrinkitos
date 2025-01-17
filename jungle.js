//Base class Animal
class Animal {
    #name
    #species
    #energy

    static remainingAnimals = []

    constructor(name, species, energy) {
        this.#name = name
        this.#species = species
        this.#energy = energy
        Animal.remainingAnimals.push(this)
    }

    //Check level of energy before an attack
    checkEnergyLevel() {
        if(this.#energy === 0) {
            return `This animal cannot attack. It needs to eat!`
        } else if (this.#energy < 10) {
            return `This animal doesn't have enough energy to attack. Still needs to eat!`
        } else {
            return `This animal can attack!`
        }
    }

    //Feeding the animal
    eatLevel() {
        if(this.#energy < 200) {
            this.#energy += 10;
            if(this.#energy > 200) {
                this.#energy = 200;
            }
        }
        return `${this.#name} ate and increased their energy level to ${this.#energy}. Let's attack!!!`;
    }

    //getters
    getName() { 
        return this.#name
      }

    getSpecies() {
        return this.#species
    }

    getEnergy() {
        return this.#energy
    }

    //setters
    setName(name) {
        this.#name = name
    }

    setSpecies(species) {
        this.#species = species
    }

    setEnergy(energy) {
        this.#energy = energy
    }

    //Method: attack(target)
   attack(target){
    if(this.#energy === 0) {
        return `${this.#name} cannot attack. It needs to eat ASAP!!`;
    }

    this.#energy -= 10;
    if(this.#energy < 0) {
        this.#energy = 0;
    }

    target.setEnergy(target.getEnergy() - 10);
    if(target.getEnergy() < 0) {
        target.setEnergy(0);
    }

    if(this.#energy === 0 && target.getEnergy() === 0){
        return `${this.#name} and ${target.getName()} are out of energy`;
    } else if (this.getEnergy() === 0) {
        return `${target.getName()} has won!`;
    } else if (target.getEnergy() === 0) {
        return`${this.getName()} has won!`;
    }

    Animal.remainingAnimals = Animal.remainingAnimals.filter(
        animal => animal.getEnergy() > 0
    );

   }

   //method eat
   eat(){
    this.setEnergy(this.getEnergy() + 10);
    if(this.getEnergy() > 200) {
        this.setEnergy(200);
   }
    return `${this.getName()} ate and increased their energy level to ${this.getEnergy()}. Let's go and attack!`;

}
}

class Bird extends Animal {
  #canFly

  constructor(name, species, canFly) {
    super(name, species, 100) // Default energy level for Bird: 100
    this.#canFly = canFly
  }

  //getters
  get canFly() {
    return this.#canFly
  }

  //setter
  set canFly(canFly) {
    this.#canFly = canFly
  }

    //Methods
    //attack
    attack(target) {
        if (this.getEnergy() === 0) {
            return `${this.getName()} cannot attack. It needs to eat!`;
        }

        this.setEnergy(this.getEnergy() - 20);
        if(this.getEnergy() < 0){
            this.setEnergy(0);
        }

        target.setEnergy(target.getEnergy() - 20);
        if(target.getEnergy() < 0){
            target.setEnergy(0);
        }

       if(this.getEnergy() === 0 && target.getEnergy() === 0){
            return `${this.getName()} and ${target.getName()} are out of energy`;
       } else if (this.getEnergy() === 0){
            return `${target.getName()} has won!`;
       } else if (target.getEnergy() === 0){
        return `${this.getName()} has won!`;
       }

        Animal.remainingAnimals = Animal.remainingAnimals.filter(animal => animal.getEnergy() > 0);
    }

    //eat
    eat() {
        this.setEnergy(this.getEnergy() + 10);
        if(this.getEnergy() > 100){
            this.setEnergy(100);
        }
        return `${this.getName()} ate and increased their energy level to ${this.getEnergy()}. Let's go and attack!!`;
    }
}

class Mammal extends Animal {
    #furColor

    constructor(name, species, furColor) {
        super(name, species, 200) //Default level of energy for Mammal
        this.#furColor = furColor
    }

    //Getters and Setters for furColor
    get furColor() {
        return this.#furColor
    }

    set furColor(furColor) {
        this.#furColor = furColor
    }

    //Attack
    attack(target) {
        if(this.getEnergy() === 0){
            return `${this.getName()} cannot attack. It needs to eat!`;
        }

        this.setEnergy(this.getEnergy() - 50);
        if(this.getEnergy()<0){
            this.setEnergy(0);
        }

        target.setEnergy(target.getEnergy() - 50);
        if(target.getEnergy() < 0){
            target.setEnergy(0);
        }

        if(this.getEnergy() === 0 && target.getEnergy() === 0){
            return `${this.getName()} and ${target.getName()} are out of energy`;
        } else if(this.getEnergy() === 0){
            return `${target.getName()} has won!`
        } else if (target.getEnergy() === 0) {
            return `${this.getName()} has won`;
        }

        Animal.remainingAnimals = Animal.remainingAnimals.filter( animal => animal.getEnergy() > 0);
    }

    eat(){
        this.setEnergy(this.getEnergy() + 20);
        if(this.getEnergy() > 200){
            this.setEnergy(200);
        }
        return `${this.getName()} ate and increased their energy level to ${this.getEnergy()}. Let's go and attack!`;
    }
}

class Reptile extends Animal {
    #coldBlooded;

    constructor(name, species, coldBlooded) {
        super(name, species, 100)
        this.#coldBlooded = coldBlooded
    }

    //Getters and Setters for furColor
    get coldBlooded() {
        return this.#coldBlooded
    }

    set coldBlooded(coldBlooded) {
        this.#coldBlooded = coldBlooded
    }

    attack(target){
        if (this.getEnergy() === 0) { 
            return `${this.getName()} cannot attack. It needs to eat!`; 
        }

        this.setEnergy(this.getEnergy() - 30); 
        if (this.getEnergy() < 0) { 
            his.setEnergy(0); 
        }

        target.setEnergy(target.getEnergy() - 30); 
        if (target.getEnergy() < 0) { 
            target.setEnergy(0); 
        }

        if (this.getEnergy() === 0 && target.getEnergy() === 0) {
             return `${this.getName()} and ${target.getName()} are out of energy.`; 
            } else if (this.getEnergy() === 0) { 
                return `${target.getName()} has won!`; 
            } else if (target.getEnergy() === 0) { 
                return `${this.getName()} has won!`; 
            }
        
            Animal.remainingAnimals = Animal.remainingAnimals.filter( animal => animal.getEnergy() > 0);
    }

    //eat method
    eat(){
        this.setEnergy(this.getEnergy() + 15);
        if (this.getEnergy() > 100){
            this.setEnergy(100);
        }
        return `${this.getName()} ate and increased their energy level to ${this.getEnergy()}. Let's go and attack!`;
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.getName()}, Species: ${eagle.getSpecies()}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.getName()}, Species: ${lion.getSpecies()}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.getName()}, Species: ${snake.getSpecies()}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle)

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals.map(animal => animal.getName()).join(", ")}`);

// Example eating
console.log("\n--- Eating ---");
console.log(eagle.eat());
console.log(`${eagle.getName()}'s energy: ${eagle.getEnergy()}`);
console.log(lion.eat());
console.log(`${lion.getName()}'s energy: ${lion.getEnergy()}`);
console.log(snake.eat());
console.log(`${snake.getName()}'s energy: ${snake.getEnergy()}`);