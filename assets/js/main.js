// Lista Cognomi
// Chiedere all'utente il cognome
// Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
// Stampa la lista ordinata alfabeticamente
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomeUser = prompt("Inserisci cognome");
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
cognomi.push(cognomeUser);
cognomi.sort();

// for (var i = 0, c=0; i < cognomi.length; i++, c++){
//     var persone = cognomi[i];
//     var ordAlfabetico =document.getElementById("ordine_alfabetico").innerHTML;
//     document.getElementById("ordine_alfabetico").innerHTML = ordAlfabetico + "<li>" + persone + "</li>";
//     if (cognomeUser == cognomi) {
//         console.log(cognomi[i]);
//         console.log(c);
//         break
//     }
// }

var positionCognomeUser = cognomi.indexOf(cognomeUser) + 1;
console.log(positionCognomeUser);