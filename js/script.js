// ELEMENTI FORM
// ELEMENTI INPUT FORM
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-tratta');
var formEta = document.getElementById('form-eta');
var prezzo = formKm.value * 0.21;

// ELEMENTI BUTTONS
var formGenera = document.getElementById('form-genera');
var formAnnulla = document.getElementById('form-annulla');


// ELEMENTI BIGLIETTO
var biglNome = document.getElementById('ticket-nome');
var biglCosto = document.getElementById('ticket-costo');
var biglOfferta = document.getElementById('ticket-offerta');
var biglCarrozza = document.getElementById('ticket-carrozza');
var biglCodiceCp = document.getElementById('ticket-codice');


// Eventi Click Genera
formGenera.addEventListener('click',
  function() {


    // Calcolo costo biglietto intero
    var prezzo = formKm.value * 0.21;
    offerta = 'Prezzo standard';
    console.log(prezzo);

    // Calcolo eventuali sconti
    if (formEta.value == 'min') {
      prezzo = prezzo - ( prezzo * 20 / 100);
      var offerta = 'Sconto minorenni';
    } else if (formEta.value == 'over') {
      prezzo = prezzo - ( prezzo * 40 / 100);
      var offerta = 'Sconto over 65';
    }

    // Genera n° Carrozza
    var carrozza = Math.floor(Math.random() * 10) + 1;

    // Genera CodiceCP
    var codiceCp = Math.floor(Math.random() * 1000) + 1;


    // Genera contenuto biglietto
    biglNome.innerHTML = formNome.value; //Nome passeggero
    biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro'; //Costo biglietto
    biglOfferta.innerHTML = offerta; //Tipologia offerta
    biglCarrozza.innerHTML = carrozza; //N° carrozza
    biglCodiceCp.innerHTML = codiceCp; //N° codice CP
  }
)


// Eventi Click Annulla
formAnnulla.addEventListener('click',
  function() {
    // Reset valori form
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'mag';

    // Reset valori biglietto
    biglNome.innerHTML = '';
    biglCosto.innerHTML = '';

    // Hide ticket
    var ticketPrev = document.getElementById('ticket-preview');
    ticketPrev.className = 'hidden';
  }
)





// //ELEMENTI PRINTABLE TICKET
// var btnPrint= document.getElementById('btn-print');
// btnPrint.addEventListener('click',
//   function() {
//
//     // Hide / change ticket name
//     var printName = document.getElementById('pass-id');
//     printName.className = 'hidden';
//
//   }
// )
