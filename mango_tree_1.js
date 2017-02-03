"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.qty = 0
    this.fruit = 0
    this.health = true;
  }

  // Get current states here
  getAge(){

  }

  getHeight(){

  }

  getFruits(){

  }

  getHealthyStatus(){

  }

  // Grow the tree
  grow() {
    //this.age++;
    //this.height += Math.floor(Math.random()*10);

    //if(this.age >= 6){
      //this.health = false;
    //}
    //return this
    // menambah age + 1
    // menambah tinggi pohon (random)
  }

  // Produce some mangoes
  produceMangoes() {
    this.qty += Math.floor(Math.random()*10);
  }

  // Get some fruits
  harvest() {
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
}

var manggo = new MangoTree()
manggo.grow();
manggo.grow();
manggo.grow();
manggo.grow();
manggo.grow();
manggo.grow();
manggo.produceMangoes();
console.log(manggo);
