const Txttransisi = ['Undergraduate student class of 2020', 'Web Developer'];
let hitung = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
   if (hitung == Txttransisi.length){
    hitung = 0;
   }
   currentTxt = Txttransisi[hitung];
   words = currentTxt.slice(0, ++txtIndex);
   document.querySelector('.transisi-kata').textContent = words;

   if (words.length == currentTxt.length) {
    hitung++;
    txtIndex = 0;
   }

   setTimeout(ngetik, 500);

})();