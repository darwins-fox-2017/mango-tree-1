"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.healthy = true;
    this.good = 0;
    this.bad = 0;
    this.fruit = [];
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.age++
    if (this.age == 20) {
      this.healthy = false
    }
    if (this.age <= 10) {
      this.height += getRandomNumber()
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (var i = 0; i < getRandomNumber(); i++) {
      var mango = new Mango()
      mango.mangoQuality();
      this.fruit.push(mango)
      if (mango.quality == 'good') {
        this.good += 1;
      } else {
        this.bad += 1;
      }
    }
  }

  // Get some fruits
  harvest() {
    this.good = 0;
    this.bad = 0;
    this.fruit = [];
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = ""
  }

  mangoQuality() {
    this.quality = ['good', 'bad'][Math.round(Math.random() * 1)]
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random() * 3) / 2
}

// Driver code
var tree = new MangoTree()
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.fruit.length} | Good: ${tree.good} | Bad ${tree.bad}`)

} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);
