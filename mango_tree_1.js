"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._healhty = true
    this._age = 0
    this._height = 0
    this.quantity = []
  }

  // Grow the tree
  grow() {
    this._age++
    this._height += getRandomNumber()
    if (this._age === 10)
      this._healhty = false
  }

  // Produce some mangoes
  produceMangoes() {
    this._goodQualityMango = 0
    this._badQualityMango = 0
    this._harvested = Math.round(Math.random()*10)
    let mango = new Mango()
    for (let i = 0; i < this._harvested; i++) {
      this.quantity.push(mango.checkQuality())
      if ( this.quantity[i] === 1) {
        this._goodQualityMango++
      } else {
        this._badQualityMango++
      }
    }
    this.quantity = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }

  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return 1
    } else {
      return 0
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)/10
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height.toFixed(2)} m | Fruits harvested = ${tree._harvested} (${tree._goodQualityMango} good ${tree._badQualityMango} bad)`)
} while (tree._healhty != false)

console.log(`The tree has met its end`)
