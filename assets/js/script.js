/* 
DESCRIZIONE
Il programma dovrà stampare in console i numeri da 1 a 100 ma che:

    1- per i multipli di 3 stampi “Fizz” al posto del numero
    2- e per i multipli di 5 stampi “Buzz”.
    3- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

const numeratoreElement = document.getElementById('tabellone');
console.log(numeratoreElement);
for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    numeratoreElement.append(square);
    square.classList.add('square');
    if ((i % 3) === 0 && (i % 5) === 0) {
        square.innerHTML = ('FizzBuzz');
        function colorsquare(){
            document.getElementById('div').style.backgroundColor = "#ffffff";
        }
    } else if (((i % 3) === 0)) {
        square.innerHTML = ('Fizz');
    } else if (((i % 5) === 0)) {
        square.innerHTML = ('Buzz');
    } else {
        square.innerHTML = (i);
    }
}   

