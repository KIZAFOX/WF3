// let firstPerson = prompt(`Veuillez entrer un premier prénom: `, `Victor`);
// let firstPersonStatus = prompt(`Veuillez entrer un premier état du jour: `, `Bien`);

// let secondPerson = prompt(`Veuillez entrer un second prénom: `, `Maxime`);
// let secondPersonStatus = prompt(`Veuillez entrer un second état du jour: `, `Très bien`);

// let day = prompt(`Veuillez entrer un jour: `, `Mercredi`);
// let hour = +prompt(`Veuillez entrer une heure:`, 14);

// if(isNaN(hour)) {
//     alert(`Veuillez entrer une heure:`);
//     hour = +prompt(`Veuillez entrer un chiffre ou un nombre !`, 14);
// }

// document.getElementById(`conv`).innerHTML = 
// `<h2>Une conversation entre ${firstPerson} & ${secondPerson}</h2>` + `<br>` +
// `<b>${firstPerson}</b> : Bonjour ! ` + `<br>` +
// `<b>${secondPerson}</b> : Bonjour <b>${firstPerson}</b> ! Comment vas-tu ? ` + `<br>` +
// `<b>${firstPerson}</b> : ${firstPersonStatus}, et toi ? ` + `<br>` +
// `<b>${secondPerson}</b> : ${secondPersonStatus}, je te remercie. ` + `<br>` +
// `<b>${firstPerson}</b> : Quelle heure est-il ? ` + `<br>` +
// `<b>${secondPerson}</b> : il est <b>${hour}</b> heures. ` + `<br>` +
// `<b>${firstPerson}</b> : D'acc, merci. ` + `<br>` +
// `<b>${secondPerson}</b> : Où manges-tu aujourd'hui ? ` + `<br>` +
// `<b>${firstPerson}</b> : Je rentre chez moi comme tout les <b>${day}s</b>.` + `<br>` +
// `<b>${secondPerson}</b> : D'acc.`  + `<br>`;

// /////////////////////////////////////////////////////////////////////////////////

// let age = prompt(`Quel âge avez-vous ?`, 19);

// if(age >= 21){
//     document.getElementById(`age`).innerHTML = `Vous avez la majorité internationale ! Vous avez ${age} ans !`;
// }else if(age >= 18){
//     document.getElementById(`age`).innerHTML = `Vous êtes majeur ! Vous avez ${age} ans !`;
// }else{
//     document.getElementById(`age`).innerHTML = `Vous êtes mineur ! Vous avez ${age} ans !`;
// }

// ///////////////////////////////////////////////////////////////////////////////

// let value1 = prompt("Valeur 1", 5), value2 = prompt("Valeur 2", 441), value3 = prompt("Valeur 3", 913);
// let equals = document.getElementById(`equals`);

// function getValues(value1, value2, value3){
//     return `<b>${value1}, ${value2}, ${value3}</b>`;
// }

// if(value1 === value2 && value1 === value3){
//     equals.innerHTML = `Les trois variables sont identiques : ` + this.getValues(value1, value2, value3);
// }else if(value1 === value2 || value1 === value3 || value2 === value3){
//     equals.innerHTML = `Deux des variables sont de valeurs égales : ` + this.getValues(value1, value2, value3);
// }else if(value1 != value2 && value1 != value3){
//     equals.innerHTML = `Les trois variables sont différentes : ` + this.getValues(value1, value2, value3);
// }

// /////////////////////////////////////////////////////////////////////////////

// let value = prompt("Entrez une valeur entre 0 & 10", 0);

function writeHTML(value, id){
    var tag = document.createElement("p");
    var text = document.createTextNode(value);
    tag.appendChild(text);
    var element = document.getElementById(id);
    element.appendChild(tag);
}

// if(value < 0 || value > 10){
//     console.error(`Veuillez entrer une valeur comprise entre 0 & 10 !`)
// }else if(value === 3){
//     for(let i = 1; i <= value; i++){
//         this.writeHTML(`${i} -> ${i * 2}`, `byTwo`);
//     }
// }else{
//     for(let i = 1; i <= value; i++){
//         this.writeHTML(`${i} -> ${i * 2}`, `byTwo`);
//     }
// }

// /////////////////////////////////////////////////////////////////////////////

// let value5 = prompt("Donne moi une valeur"), evenOrOdd = prompt("pair ou impair ?");

// for(let i = 0; i <= value5; i++){
//     if(evenOrOdd === "pair"){
//         if (i % 2 === 0) {
//             this.writeHTML(i, `evenOrOdd`);
//         }
//     }else if(evenOrOdd === "impair"){
//         if (i % 2) {
//             this.writeHTML(i, `evenOrOdd`);
//         }
//     }
// }

// /////////////////////////////////////////////////////////////////////////////

let pyramid = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 0);

function createPyramid(value){
    this.writeHTML(`#`.repeat(value), `pyramid`);
}

for(let i = 1; i <= pyramid; i++){
    this.createPyramid(i);
}