$(document).ready(function() {

  var wind = document.querySelector('#wind');
  var wind2 = document.querySelector('#wind2');
  var plane = document.querySelector('#plane');
  var splash = document.querySelector('#splash');

//for wind
  wind.play();
  function stopWind() {
    wind.pause();
  }

  setTimeout(stopWind, 30000);

  wind2.play();
  function stopWind2() {
    wind2.pause();
  }

  setTimeout(stopWind2, 30000);

  //for plane
  plane.play();

  //for splash
  splash.pause();
  function splashSound() {
    splash.play();
  }

  setTimeout(splashSound, 30000);

});
