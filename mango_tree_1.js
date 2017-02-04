"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.0
    this._fruits = []

    this._healty = true
    this._harvest = 0
    this._bad = 0
    this._good = 0
  }

  // Get current states here
  getAge(){
    return this._age
  }
  getHeight(){
    return this._height.toFixed(1)
  }
  getFruits(){
    return this._fruits
  }
  getHealty(){
    return this._healty
  }
  // Grow the tree
  grow() {
    this._age += 1
    if (this._age <= 10) {
      this._height += getRandomNumber() / 10
      // console.log(this._height);
    }
    if (this._age === 20) {
      this._healty = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (var i = 0; i < getRandomNumber(); i++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {


  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.quality()
  }
  quality(){
    if (getRandomNumber() < 5) {
      return 'Bad'
    }else {
      return 'Good'
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) +1
}

var tree = new MangoTree()

console.log(`These tree is alive! :smile:`);

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()

  console.log(`[Year ${tree.getAge()} Report] Height = ${tree.getHeight()} | Fruits harvested = ${tree._harvest} (${tree._good}) good, ${tree._bad} Bad `);
} while (tree.getHealty() != false);

console.log(`The tree has met its end. :sad:`);
