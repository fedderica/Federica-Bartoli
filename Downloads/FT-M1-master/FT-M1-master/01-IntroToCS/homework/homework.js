'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num = num.split('').reverse();
  var suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma = suma + 2**i*num[i];
  } 
  return suma;
  
  }

function DecimalABinario(num) {
  // tu codigo aca
 var bin = []
  while (num !==0){
    bin.unshift(num%2)
    num=Math.floor(num/2)
  }
return bin.join("")
 
}
  

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}