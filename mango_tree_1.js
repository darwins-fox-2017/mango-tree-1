"use strict"

function tambahTinggi(min, max) {
  let num = Math.random() * (max - min) + min;
  return Math.floor(Math.round(num * 10) / 10)
}
class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.MAX_AGE = 20
    this.MAX_SIZE = 5
    this._age = 0
    this._height = 0.1;
    this.fruits = [];
    this._harvested = '';
    this._harvester = "test1";
    this._healthy = true;
    this.panen = ''
  }

  // Get current states here
  // Grow the tree
  grow() {
    // cukup tambah umur dan tinggi
    this._age += 1;
    this._height = this._height + tambahTinggi(10, 100)
    if(this._age === this.MAX_AGE)
      this._healthy = false;
  }

  // Produce some mangoes
  produceMangoes() {
    // hasil random push object ke fruits
    let num = Math.floor(Math.random() * 15)
    if (num !== 0) {
      for(let i=0; i<num+1; i++) {
        if(i % 3 === 0)
          this.fruits.push("bad")
        else
          this.fruits.push("good")
      }
    }
  }

  // Get some fruits
  harvest() {
    this._harvested = this.fruits.length;
    let a = 0;
    let b = 0;
    for(let i=0; i<this._harvested; i++) {
      if(this.fruits[i] === "good")
        a++
      else
        b++
    }
    this.fruits = [];
    this._harvester = `${this._harvested} (${a} good, ${b} bad)`;
    return this._harvester
    // menghitung jumlah fruits
  }
}

var tree = new MangoTree()
//console.log(`The tree is alive! :)`);
// tree.grow();
// tree.produceMangoes()
//
// console.log(tree.harvest())

do {
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ` + tree.harvest())
} while (tree._healthy !== false)
