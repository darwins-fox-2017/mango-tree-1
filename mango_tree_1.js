"use strict"

class MangoTree {
  constructor() {
    this.tinggi=0;
    this.umur=0;
    this.maksimalBuah;
    this.healt=true;
    this.colfruit=[];
    this.dipanen;
    this.maxumur=Math.floor(Math.random()*20);
  }

  grow() {
    this.umur=this.umur + 1;
    this.tinggi=parseFloat((this.tinggi + Math.random()*3).toFixed(2));
    this.maksimalBuah=Math.floor(Math.random()*30);
    if (this.umur>=this.maxumur) {
      this.healt=false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.harvest()
  }

  // Get some fruits
  harvest() {
    let numgood=0;
    let numbad=0;
    this.colfruit=[];
    for (var i = 0; i < this.maksimalBuah; i++) {
       let buah=new Mango()
       this.colfruit.push(buah.quality);
       if (buah.quality=='GOOD') {
          numgood=numgood+1;
       }else {
         numbad=numbad+1;
       }
    }
    this.dipanen= this.maksimalBuah +' (' +numgood +' good, ' +numbad +' bad)'
  }
}

class Mango {
  // Produce a mango
  constructor() {
     this.quality=getRandomNumber();
  }
}

function getRandomNumber() {
  var a=Math.random();
  if (a>0.5) {
    return 'GOOD';
  }else {
    return 'BAD';
  }
}
let mangga=new MangoTree();
/*mangga.grow();
console.log(mangga.tinggi);
mangga.grow();
console.log(mangga.tinggi,mangga.umur);
let buah=new Mango();
  console.log(buah.quality);*/

do {
  mangga.grow();
  mangga.produceMangoes();
  console.log(`[Year ${mangga.umur} Report] Height=${mangga.tinggi} | Fruits Harvested = ${mangga.dipanen}`);
} while (mangga.healt!=false);
