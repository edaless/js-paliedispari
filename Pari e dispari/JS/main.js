// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function randomMinMax (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariODispari (numero){
    if(numero % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    };
}

const min = 1;
const max = 5;




const squadraUser = prompt("pari o dispari?");

console.log("squadraUser:  ", squadraUser)


const numUtente = parseInt(prompt("Dimmi un numero da " + min + " a " + max));
console.log("numUtente:  ", numUtente)
const numPc = randomMinMax (min, max);
console.log("numPc:  ", numPc)

const somma = numPc + numUtente;
console.log("somma:  ", somma)


if (squadraUser === pariODispari(somma)){
    console.log("hai vinto!");
}else{
    console.log("hai perso!");
};
















// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }