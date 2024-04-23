//Afspil video ved klik af play-knap//

document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("intro_videoPlayer");
  var playKnap = document.getElementById("intro_playKnap");

  playKnap.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      playKnap.style.display = "none";
    } else {
      video.pause();
    }
  });

  video.addEventListener("play", function() {
    playKnap.style.display = "none"; // Gem play knap, når videoen starter
  });

  video.addEventListener("pause", function() {
    playKnap.style.display = "none"; // Pause knappen forbliver gemt væk når videoen stoppes
  });
});

  
//Intro tekst fader ud, ved aktivering af play knap)
    document.getElementById('intro_playKnap').addEventListener('click', function() {
    var introTekst = document.querySelector('.intro-tekst');
    introTekst.classList.add('fade-out');
  });

  //Velkomst tekst fader ind, når play aktiveres//
  document.getElementById('intro_videoPlayer').addEventListener('play', function() {
  var introText = document.querySelector('.intro_velkomst-tekst');
  introText.classList.add('fade-in');
});


//Typewriting effekt på velkomst tekst//
var initialTxt = 'Hej med dig!! Jeg vil tage dig med på en rejse gennem tiden og vise dig alt fra fyldige former i renæssancen til slanke silhuetter i 1990erne.';
var replacementTxt = 'Så træd ind i en verden af skønhed, form og kultur og undersøg, sammen med mig, hvordan fortidens idealer møder nutidens realiteter.';
var speed = 50;
var pauseDuration = 2000;
var i = 0;

// Function til typewriting effekt
function typeWriter(callback) {
  if (i < initialTxt.length) {
    document.getElementById("intro_paragraf").innerHTML += initialTxt.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(callback);
    }, speed);
  } else {
    setTimeout(callback, pauseDuration); // Pause mellem hver tekst del (hvor tiden er angivet i øverste del med pauseDuration)
  }
}

//Indsæt ny tekst, når den første del er skrevet op, med id nr. 2
function replaceText() {
  document.getElementById("intro_paragraf").innerHTML = '';
  initialTxt = replacementTxt;
  i = 0;
  typeWriter(function() {
    console.log("Text replacement is complete.");
  });
}

// Autoplay typewriting effekt når siden indlæses
window.onload = function() {
  typeWriter(replaceText);
};