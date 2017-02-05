"use strict"

class MangoTree {

  constructor() {
    this.umur=0;
    this.tinggi=0;
    this.max_fruits = 20;
    this.fruits=0;
    this.harvested=0;
    this.health=true;
  }

  getAge(){
    return this.umur;
  }

  getHeight(){
    return this.tinggi
  }

  getFruits(){
    return this.fruits
  }

  getHealthyStatus(){
    return this.health
  }

  grow() {
    var tinggi=Math.random();
    this.umur++;
    if(this.umur<=10){
      this.tinggi+=tinggi;
    }
    if(this.umur>=20) {
      this.health=false;
    }
    this.fruits = Math.floor((Math.random() * 9) + 1);
  }

  harvest() {
    var good = Math.floor((Math.random() * this.fruits) + 1);
    var bad = this.fruits - good;
    return this.fruits+' ('+good+' good, '+bad+' bad)';
  }
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
    tree.grow();

    console.log("[Year "+tree.getAge()+" Report] Height = "+tree.getHeight()+" Meter | Fruits Harvested = "+tree.harvest());
} while (tree.getHealthyStatus() != false)

console.log(`The tree has met its end. :sad:`);