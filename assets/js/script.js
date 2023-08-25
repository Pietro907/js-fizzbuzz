/* 
DESCRIZIONE
Il programma dovrà stampare in console i numeri da 1 a 100 ma che:

    1- per i multipli di 3 stampi “Fizz” al posto del numero
    2- e per i multipli di 5 stampi “Buzz”.
    3- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

for (let i = 1; i<= 100; i++){
    console.log(i)
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log('FizzBuzz');
    } else if (((i % 3) === 0)) {
        console.log('Fizz');
    } else if (((i % 5) === 0)) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}