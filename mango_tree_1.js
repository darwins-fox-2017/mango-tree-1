"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age        = 0
    this.height     = 0
    this.healthy    = true
    this.harvested  = 0
    this.good       = 0
    this.bad        = 0
    this.qty        = []
  }

  // Get current states here
  getAge() {
    return this.age
  }

  getHeight() {
    return this.height
  }

  getFruits() {
    return this.qty.length
  }

  getHealthyStatus() {
    return this.healthy
  }
  // Grow the tree
  grow() {
    this.age++
    if(this.age === 10) {
      this.healthy = false
    } else if (this.age < 10) {
      this.height += getRandomNumber()
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < getRandomNumber(); i++) {
      if (this.healthy !== false) {
        this.qty.push(new Mango)
      }
    }

  }

  // Get some fruits
  harvest() {
    this.good = 0
    this.bad = 0
    this.harvested = this.qty.length

    if (this.qty !== []) {
      for (let j = 0; j < this.qty.length; j++) {
        if (this.qty[j].quality === "Good") {
          this.good += 1
        } else {
          this.bad += 1
        }
      }
    }
    this.qty = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality()
  }
}

function getRandomNumber() {
  return Math.round(Math.random()*100)/20
}

function quality() {
  if (getRandomNumber() >= 3) {
    return "Good"
  } else {
    return "Bad"
  }
}

let tree = new MangoTree()
console.log("The tree is alive! :smile: ");

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested} (${tree.good} good, ${tree.bad} bad)`);
} while (tree.healthy !== false)

console.log("The tree has met its end! :sad: ");
