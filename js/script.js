const numberList = [];
for(let i = 1; i <= 100; i++){
    numberList.push(i);
}//creo array di numeri
for(let x = 0; x < numberList.length; x++){
    document.getElementById('number-grid').innerHTML += `<div class = 'grid-item'>${numberList[x]}</div>`;
}
////////////////
//creo la funzione
function whatIsThisNumber(){
    this.classList.toggle('green');
}

