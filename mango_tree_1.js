"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._max = 20
    this._fruits = []
    this._harvested= ''
    this._healthy = true
  }

  // Get current states here
  getAge() {
    return this._age
  }

  getHeight() {
    return this._height
  }

  getFruits() {
    return this._fruits
  }

  getHealthyStatus() {
    return this._healthy
  }

  // Grow the tree
  grow() {
    if(this._age < this._max) {
      this._age += 1
      this._height += getRandomNumber()/2;
    } else {
      this._healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < getRandomNumber(); i++) {
      if (this._healthy !== false) {
        this._fruits.push(new Mango)
      }
    }
  }

  // Get some fruits
  harvest() {
    let fruits = this._fruits.length
    let good = 0
    let bad = 0
    for (let i = 0; i < fruits; i++) {
      if(this._fruits[i].quality == 'Bad') {
        bad+=1
      } else if(this._fruits[i].quality == 'Good') {
        good+=1
      }
    }
    this._fruits = []
    this._harvested = `${fruits} (${good} good, ${bad} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.qualityCondition = ['Good','Bad']
    this.quality = this.qualityCondition[this.getRan()]
  }

  getRan() {
    return Math.round(Math.random()*(2-1)+1)-1
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random()*(5-1)+1)
}

let tree = new MangoTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()

  console.log(`[Year ${tree._age} Report] Height = ${tree._height}m | Fruits harvested = ${tree._harvested}`)
} while (tree._healthy)

console.log(`The tree has met its end. :sad:`);
