"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0
    //this.count_umur = 0
    this.tinggi = 0
    this.kesehatan = true
    this.panen = 0
    this.keranjang = []
    this.panen = this.keranjang.length
    this.good = 0
    this.bad = 0
    
  }

  // Get current states here
  getAge() {
    return this.umur
  }

  getHeight() {
    return this.tinggi
  }

  getFruits() {
    return this.keranjang.length
  }

  getHealthyStatus() {
    // masih true
    return this.kesehatan
  }
  // Grow the tree
  grow() {
    this.umur += 1
    if(this.umur === 20) {
      this.kesehatan = false
    } else if (this.umur < 20) {
      this.tinggi += getRandomNumber()
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < getRandomNumber(); i++) {
      if (this.kesehatan !== false) {
        this.keranjang.push(new Mango)
      }
    }
    // console.log(this.keranjang)

  }

  // Get some fruits
  harvest() {
    this.good = 0
    this.bad = 0
    this.panen = this.keranjang.length

    if (this.keranjang !== []) {
      for (let j = 0; j < this.keranjang.length; j++) {
        if (this.keranjang[j].quality === "Good") {
          this.good++
        } else {
          this.bad++
        }
      }
    }
    this.keranjang = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality()
  }
}

function getRandomNumber() {
  return Math.round(Math.random()*100)/ 10 + 1
}

function quality() {
  if (getRandomNumber() >= 2) {
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
  console.log(`[Year ${tree.umur} Report] Height = ${tree.tinggi} m | Fruits panen = ${tree.panen} (${tree.good} good, ${tree.bad} bad)`);
} while (tree.kesehatan !== false)

console.log("The tree has met its end! :sad: ");