//creo array di numeri
const numberList = [];
//assegno i numeri da 1 a 100 alle celle dell'array
for(let i = 1; i <= 100; i++){
    numberList.push(i);
}
const numberGrid = document.getElementById('number-grid');
console.log(numberGrid);
//creo la funzione
/**
 * 
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
function alertNumber(a){
    return alert(a);
}
/**
 * Descrizione: serve per poter inserire automaticamente i numeri all'interno della griglia
 * @param {HTMLElement} a
 * @returns {HTMLElement}
 */
function createGridNumber(a){
    
}
//inserisco dinamicamente i numeri all'interno dell'array



