const mainBtn = document.querySelector('#main-btn');
const colorBoxes = document.querySelectorAll('.box');

let running = false;

function getRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";

   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function start() {
   // console.log(colorBoxes);
   if (running) {
      colorBoxes.forEach((box, idx) => {
         if (idx%2 === 0) {
            box.style.background = getRandomColor();
         }
         if (idx%5 === 0) {
            box.style.background = '#00FF00';
         }
         if (idx%2 !== 0 && idx%5 !== 0) {
            box.style.background = getRandomColor();
         }
      });
      setInterval(start, 1000);
   }
}

mainBtn.addEventListener('click', function() {
   mainBtn.innerText = "STOP";
   if (running) {
      running = false;
      mainBtn.innerText = "CHANGE COLORS";
   } else {
      running = true;
      start();
   }
});