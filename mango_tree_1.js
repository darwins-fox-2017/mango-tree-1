"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._maxAgeTree = 10
    this._currentAgeTree = 0
    this._heightTree = 0
    this._maxMangoTotal = 0
    this._harvestedMango = 0
    this._healthyMangoTree = true
  }

  // Get current states here
  getAge() {
    return this._currentAgeTree
  }

  getHeight(tes) {
    return this._heightTree+= getRandomNumber()

  }

  getFruits() {
    return this.maxMangoTotal
  }

  getHealthyStatus() {
    return this._healthyMangoTree = false
  }

  // Grow the tree
  grow() {
    this.getHeight()
    this._currentAgeTree++
    if( this._currentAgeTree === this._maxAgeTree) this.getHealthyStatus()
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._maxAgeTree == 10) {
      return this._maxMangoTotal = 0
    } else {
      return this._maxMangoTotal = Math.round(getRandomNumber()*10)
    }
  }

  // Get some fruits
  harvest() {
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.badQualityMango = 0
    this.goodQualityMango = 0
  }
}

function getRandomNumber() {
  return Math.round(Math.random()*100)/100
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree._currentAgeTree}] Height = ${tree._heightTree} m | Fruits harvested = ${tree._harvestedMango}`)
} while (tree._healthyMangoTree != false)

console.log(`The tree has met its end. :sad:`)
console.log(tree.produceMangoes())
