//creo array di numeri
const numberList = [];
//assegno i numeri da 1 a 100 alle celle dell'array
for(let i = 1; i <= 100; i++){
    numberList.push(i);
}
//assegno gli elementi dell'array al div number-grid dinamicamente
const numberGrid = document.getElementById('number-grid');
console.log(numberGrid);

////////////////
//creo la funzione
function greenNumber(){
    return this.classList.toggle('green');
}


