/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

1. Salvare il prompt del nome
2. Salvare il prompt del cognome
3. Salvare il prompt del colore
4. Concatenare i dati con "23"
5. Stampare il risultato
*/

const firstname = prompt('Scrivi il tuo nome');
const lastname = prompt('Scrivi il tuo cognome');
const color = prompt('Scrivi il tuo colore preferito');

const password = firstname + lastname + color + '23'

console.log(password)

const message = 'La tua password è: ' + password

document.getElementById('header').innerHTML = message

console.log(message)
