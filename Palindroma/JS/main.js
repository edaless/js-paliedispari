// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.





function inverso(campione){
    let strInversa = "";
    // ciclo che genera la parola inversa
    for (let i = (campione.length - 1); i >= 0; i--){
        strInversa += campione[i];
    }
    // console.log(strInversa);
    return strInversa;
}

function palindromità(campione){
    if (campione === inverso(campione)){
        return true;
    }else{
        return false;
    };
}


const parola = prompt("dimmi una parola");

if(palindromità(parola)){
    console.log("La parola '" + parola + "' è PALINDROMA");
}else{
    console.log("La parola '" + parola + "' NON è PALINDROMA");
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