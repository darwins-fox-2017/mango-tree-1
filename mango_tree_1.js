"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, healthy, harvested, good, bad, quality) {
    this.age = age || 0
    this.height = height || 0
    this.healthy = healthy || true
    this.harvested = harvested || 0
    this.good = good || 0
    this.bad = bad || 0
    this.quality = quality || []
  }

  // Get current states here
  getAge() {
    return age
  }

  getHeight() {
    return height
  }

  getFruits() {
    return quality.length
  }

  getHealthyStatus() {
    return healthy
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
        this.quality.push(new Mango)
      }
    }

  }

  // Get some fruits
  harvest() {
    this.good = 0
    this.bad = 0
    this.harvested = this.quality.length

    if (this.quality !== []) {
      for (let j = 0; j < this.quality.length; j++) {
        if (this.quality[j].quality === "Good") {
          this.good += 1
        } else {
          this.bad += 1
        }
      }
    }
    this.quality = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality()
  }
}

function getRandomNumber() {
  // return Math.random(Math.random());
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
console.log("The tree is alive! :') ");

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height.toFixed(1)} m | Fruits harvested = ${tree.harvested} (${tree.good} good, ${tree.bad} bad)`);
} while (tree.healthy !== false)

console.log("The tree has met its end! :'( ");
