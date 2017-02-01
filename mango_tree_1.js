"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._umur = 0;
    this._tinggi = 0;
    this._qty = [];
    this._health = true;
  }

  // Grow the tree
  grow() {
    this._umur++
    if ( this._umur <= 10 ) {
      let tambah_tinggi = Math.random() * 1;
      this._tinggi += tambah_tinggi;
    } else {
      let tambah_tinggi = Math.random() * 1;
      this._tinggi += tambah_tinggi;
      this._health = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    for (var n = 1; n <= getRandomNumber(); n++) {
      this._qty.push(new Mango())
    }
    return this
  }

  // Get some fruits
  harvest() {
    var jumlahBuah = this._qty.length;
    this.good = Math.floor(Math.random() * jumlahBuah);
    this.bad = jumlahBuah - this.good
    return `(${this.good} good, ${this.bad} bad)`
  }
}

class Mango {
  constructor() {
    this.qty = 1
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

var tree = new MangoTree()
do {
    tree.grow();
    tree.produceMangoes();

    console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} Meter | Fruits Harvested = ${tree.harvest()}`);
} while (tree._health != false)
