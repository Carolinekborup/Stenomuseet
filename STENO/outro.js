// OUTRO //
//Autoplay med forsinkelse på outro video
const myTimeout = setTimeout(playVideo, 19000);

function playVideo() {
  var videoOutro = document.getElementById("outro_videoPlayer");
  videoOutro.play();
}

//Element der gør at character går ud
const video = document.getElementById('outro_videoPlayer');

// Set the volume to 0
video.volume = 0;

// Mute the video
video.muted = true;

// Unmute the video
video.muted = false;



//Typewriting effekt på outro tekst
var outroTxt = 'Nu er vi kommet til rejsens slutning, og du ved nu lidt mere om kropsidealer gennem tiden og hvilke samfundsmæssige faktorer, som kan spille ind i vores tanker og syn på kroppen.';
var outroReplacementTxt = 'Som du kan se har kropsidealer ændret sig meget gennem tiden. De er altid formet af, hvordan samfundet ser ud i den pågældende tid. Alle kroppe er unikke og sammensat af forskellige gener, størrelser og former.';
var speedOutro = 50;
var pauseDurationOutro = 3000;
var iOutro = 0;

// Function til typewriting effekt
function typeWriterOutro(callback) {
  if (iOutro < outroTxt.length) {
    document.getElementById("outro_paragraf").innerHTML += outroTxt.charAt(iOutro);
    iOutro++;
    setTimeout(function() {
      typeWriterOutro(callback);
    }, speedOutro);
  } else {
    setTimeout(callback, pauseDurationOutro); // Pause mellem hver tekst del (hvor tiden er angivet i øverste del med pauseDuration)
  }
}

//Indsæt ny tekst, når den første del er skrevet op, med id nr. 2
function replaceTextOutro() {
  document.getElementById("outro_paragraf").innerHTML = '';
  outroTxt = outroReplacementTxt;
  iOutro = 0;
  typeWriterOutro(function() {
    console.log("Text replacement is complete.");
  });
}

// Autoplay typewriting effekt når siden indlæses
window.onload = function() {
  typeWriterOutro(replaceTextOutro);
};
