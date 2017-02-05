"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.fruits = []
    this.alive = true
    this.harvested = 0
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.age++
    if(this.age <= 10){// tidak bertambah tinggi setelah umur 10
      this.height += (2-getRandomNumber())*getRandomNumber()
    }else if(this.age == 20){
      this.alive = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let maxFruits = Math.floor(getRandomNumber()*(41)+10)
    for(let i=0; i<maxFruits; i++){
      this.fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    this.goodFruits = 0
    this.badFruits = 0
    this.harvested = this.fruits.length

    for(let i=0; i<this.harvested; i++){
      if (this.fruits[i].quality == 'good') {
        this.goodFruits += 1
      }else{
        this.badFruits += 1
      }
    }

    this.fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let status = ['good','bad','good','good','good','good','good','good','good','good','good']
    this.quality = status[Math.floor(getRandomNumber()*11+1)]
  }
}

function getRandomNumber() {
  return Math.random()
}

let tree = new MangoTree()


while(tree.alive){
  tree.grow() // tambah tinggi
  tree.produceMangoes() // tambah buah
  tree.harvest()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested} | Bad Fruits = ${tree.badFruits} | Good Fruits = ${tree.goodFruits}`)
}

console.log('The tree has met its end :D');
