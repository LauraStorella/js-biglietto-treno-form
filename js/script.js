// ELEMENTI FORM
// Dati passeggero
var formNome = document.getElementById('form-nome');  //Nome
var formKm = document.getElementById('form-tratta'); //Km
var formEta = document.getElementById('form-eta'); //Km

// Buttons
var btnGenera = document.getElementById('form-genera');
var btnAnnulla = document.getElementById('form-annulla');


// Altre Variabili
var formNomeValue;
var formKmValue;
var formEtaValue;

// EVENTI BUTTONS
// BTN GENERA
var btnGenera = document.getElementById('form-genera');
btnGenera.addEventListener('click',
  function() {
    // Elabora elementi Biglietto
    formNomeValue = formNome.value;
    biglNome.innerHTML = formNomeValue;
    biglCosto.innerHTML = prezzo.fixedTo(2) + ' Euro';
    // Elabora Km
    formKmValue = formKm.value;
    console.log(formKmValue);
    // Elabora eta
    formEtaValue = formEta.value;
    console.log(formEtaValue);

    // Calcolo prezzo
    var prezzo = formKmValue * 0.21;
    console.log(prezzo);

    // Calcolo sconti
    if (formEtaValue == 'min') {
      prezzo = prezzo - (prezzo * 20 / 100);
    } else if (formEtaValue == 'over') {
      prezzo = prezzo - (prezzo * 40 / 100);
    }
  }
)

// BTN ANNULLA
var btnAnnulla = document.getElementById('form-annulla');
btnAnnulla.addEventListener('click',
  function() {
    // Annulla Nome
    formNome.value = '';
    biglNome.innerHTML = '';

    // Annulla Km
    formKm.value = '';

    // Annulla Eta
    formEta.value = 'mag'

    // Hide ticket
    var ticketPrev = document.getElementById('ticket-preview');
    ticketPrev.className = 'hidden';
  }
)


// ELEMENTI BIGLIETTO
var biglNome = document.getElementById('ticket-nome');
var biglCosto = document.getElementById('ticket-costo');


//ELEMENTI PRINTABLE TICKET
var btnPrint= document.getElementById('btn-print');
btnPrint.addEventListener('click',
  function() {

    // Hide / change ticket name
    var printName = document.getElementById('pass-id');
    printName.className = 'hidden';

  }
)
