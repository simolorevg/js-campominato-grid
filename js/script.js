//creo array di numeri
const numberList = [];
//assegno i numeri da 1 a 100 alle celle dell'array
for(let i = 1; i <= 100; i++){
    numberList.push(i);
}
//creo le funzioni
/**
 * Descrizione: colora lo sfondo di verde
 * @returns {StyleSheet}
 */
function greenNumber(){
    return this.classList.toggle('green');
}
/**
 * Descrizione: quando viene avviato, mostra a schermo il suo contenuto
 * @param {string}
 * @returns {String}
 */
function alertNumber(){
    let numberContent = this.innerText;
    return alert(numberContent);
}
/**
 * Descrizione: serve per poter inserire automaticamente i numeri all'interno della griglia
 * @param {HTMLElement} a
 * @returns {HTMLElement}
 */
function createGridNumber(a){
    const gridItemNumber = document.createElement('div');//creo un elemento html div
    gridItemNumber.innerText = a;//ci inserisco un numero
    gridItemNumber.classList.add('grid-item');//aggiungo al div la classe grid-item
    return gridItemNumber;//consegno come risultato l'elemento terminato
}
const numberGrid = document.getElementById('number-grid');//creo l'elemento che conterrà i numero nella griglia
console.log(numberGrid);
let gridNumber;//questa variabile mi servirà sia per l'inserimento dinamico dei numeri, ma anche per la visione del numero al click più tardi
//inizio l'inserimento dinamico degli elementi
for(let x = 0; x < numberList.length; x++){
    gridNumber = createGridNumber(x);//eseguo la funzione createGridNumber per ogni elemento dell'array
    gridNumber.addEventListener('click', greenNumber);//al click faccio diventare lo sfondo della cella verde
    gridNumber.addEventListener('click', alertNumber);//al click mostra il numero
    numberGrid.append(gridNumber);// lo inserisco all'interno della griglia genitore
}


