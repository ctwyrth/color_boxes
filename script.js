const mainBtn = document.querySelector('#main-btn');
const colorBoxes = document.querySelectorAll('.box');

let running = false;
let count = 0;

function getRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";

   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function getRandomValue() {
   let padding = "";
   padding += Math.random() * 3;
   padding += 'rem';
   console.log(padding);
   return padding;
}

function start() {
   // console.log(colorBoxes);
   if (running) {
      colorBoxes.forEach((box, idx) => {
         if (idx%2 === 0) {
            box.style.background = getRandomColor();
            box.style.padding = getRandomValue();
         }
         if (idx%5 === 0) {
            if (count%2 === 0) {
               box.style.background = '#000000';
            } else {
               box.style.background = '#FFFFFF';
            }
         }
         if (idx%2 !== 0 && idx%5 !== 0) {
            box.style.background = getRandomColor();
         }
      });
      count++;
      setInterval(start, 1000);
   }
}

mainBtn.addEventListener('click', function() {
   mainBtn.innerText = "STOP";
   if (running) {
      running = false;
      count = 0;
      mainBtn.innerText = "CHANGE COLORS";
   } else {
      running = true;
      start();
   }
});