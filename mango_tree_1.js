"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    // Status = 0 it's mean The tree is die
    this.status = 1
    this.MAX_AGE = 10
    this.fruits = []
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this.isDie() && this.age >= 20) {
      this.status = 0
      return 'die'
    } else if(this.age <= 10){
      this.age += 1
      this.height += Randomize.getRandomHeight()
    } else {
      this.age += 1
    }
  }

  getAge(){
    return this.age
  }

  isDie(){
    return this.status == 0 ? true : false
  }

  // Produce some mangoes
  produceMangoes() {
    console.log(Randomize.getRandomNumber());
    for (var i = 0; i < Randomize.getRandomNumber(); i++) {
      this.fruits.push(new Mango())
      // console.log(this.fruits);
    }

  }

  // Get some fruits
  harvest() {
    let goodCount = 0
    let badCount = 0
    for (var i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality == 'Good') {
        goodCount++
      } else {
        badCount++
      }
    }
    return `${goodCount} Good and ${badCount} Bad`

  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = Randomize.getRandomQuality()
  }
}

class Randomize {
  constructor() {
  }

  static getRandomHeight() {
    return Math.random() * 1
  }

  static getRandomNumber() {
    return this.to_integer(Math.random() * 10)
  }

  static getRandomQuality() {
   return Math.random() > 0.5 ? 'Good' : 'Bad'
 }

 static to_integer(value){
   return parseInt(value)
 }
}

let mariMain = new MangoTree()
console.log('The tree is a alive!');

do {
  mariMain.grow()
  mariMain.produceMangoes()
  console.log(`Year : ${mariMain.getAge()} - Height : ${mariMain.height.toFixed(2)} | Fruits harvested : ${mariMain.harvest()}`);

} while (mariMain.getAge() < 20);
console.log('The tree has meet its end ):');
