//AFSTEMNINGSBOKS
// Vi finder knappen, der skal starte afstemningen
var svarKnap = document.getElementById("knap_svar"); 
// Vi finder afstemningsboks 1
var afstemningFoer = document.getElementById("afstemning_foer");
// Vi finder afstemningsboks 2, der skal erstatte afstemningsboks 1
var afstemningEfter = document.getElementById("afstemning_efter"); 

//Funktion der skal erstatte afstemningsboks 1 med afstemningsboks 2
svarKnap.onclick = visAfstemning; 
function visAfstemning () {
    afstemningFoer.style.display = "none";
    afstemningEfter.style.display = "flex";
}

//AFSTEMNINGSBOKS - MODAL
//Dette ønsker vi skal ske: Diagram modal - Modalen skal åbnes ved tryk på vilkårlig knap i afstemningEfter. Her skal funktionen både åbne modalen og reset afstemningsboksen til afstemningFoer. Modalen skal lukkes ved tryk udenfor modalen eller ved tryk på 'X'.

// Her finder vi modalen
var modalAfstemning = document.getElementById("modal_afstemning");
// Her finder vi alle knapper med classen 'knap_valg'
var knapValg = document.getElementsByClassName("knap_valg");
// Her tager vi fat i 'X' til lukkeknappen
var modalLuk = document.getElementById("modal_luk");

// Da der er flere knapper med classen "knap_valg", skal vi loop igennem dem alle og sætte en eventListener på dem alle.
for (var i = 0; i < knapValg.length; i++) {
    knapValg[i].addEventListener("click", visModal);
}
// Når brugeren klikker en vilkårlig svarmulighed vises modalen med diagrammet
    function visModal () {
        modalAfstemning.style.display = "block";
    }

// Funktion til at lukke modalen 
function lukModal () {
modalAfstemning.style.display = "none";
}

// Når brugeren klikker 'X' lukkes modalen
modalLuk.onclick = lukModal;

// Når brugeren klikker andre steder end modalets indhold (modal_indhold) lukkes modalen.
 window.onclick = function(event) { // Når man trykker alle steder i vinduet (window.onclick) starter en funktion: function(event). Funktionen lukker modalen (lukModal). Function(event) fortæller handleren, at funktionen skal eksekveres, men at der er et 'event', der står uden for funktionen. Med event.target fortæller vi, hvad det er der skal stå uden for funktionen og dermed ikke resultere i lukning af modalen, hvis man trykker på det. 
  if (event.target == modalAfstemning) {
    lukModal();
  }
}

// AFSPILNING AF CIRKELDIAGRAM

