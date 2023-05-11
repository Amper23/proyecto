
var bgImages = [
  '../img/fondouv.jpg',
  '../img/fondouv2.jpg'
];
var bgIndex = 0;

function changeBackground() {
  var bg = document.querySelector('.background-img');
  bg.classList.add('fade-out');
  setTimeout(function() {
      bg.style.backgroundImage = 'url(' + bgImages[bgIndex] + ')';
      console.log("contador" + bgIndex);
    bg.classList.remove('fade-out');
    bg.classList.add('fade-in');
    bgIndex++;
    if (bgIndex >= bgImages.length) {
      bgIndex = 0;
    }
    setTimeout(function() {
      bg.classList.remove('fade-in');
      changeBackground();
    }, 9000);
  }, 1000);
}

changeBackground();

