// SNACK 1

// const zucchine = [
//     {
//         nome: "zucchina1",
//         peso: 1,
//     }, {
//         nome: "zucchina2",
//         peso: 2,
//     }, {
//         nome: "zucchina3",
//         peso: 3,
//     }, {
//         nome: "zucchina4",
//         peso: 4,
//     }, {
//         nome: "zucchina5",
//         peso: 5,
//     }, {
//         nome: "zucchina6",
//         peso: 6,
//     }, {
//         nome: "zucchina7",
//         peso: 7,
//     }, {
//         nome: "zucchina8",
//         peso: 8,
//     }, {
//         nome: "zucchina9",
//         peso: 9,
//     }, {
//         nome: "zucchina10",
//         peso: 10,
//     }
// ]

// let pesoTotale = 0;

// for (let i = 0; i < zucchine.length; i++) {
//     const element = zucchine[i];
//     pesoTotale += element.peso
// }


// for (const zucchina of zucchine) {
//     pesoTotale += zucchina.peso
// }
// console.log(pesoTotale)


// SNACK 2

// const zucchine = [
//     {
//         nome: "zucchina1",
//         lunghezza: 18,
//     }, {
//         nome: "zucchina2",
//         lunghezza: 5,
//     }, {
//         nome: "zucchina3",
//         lunghezza: 10,
//     }, {
//         nome: "zucchina4",
//         lunghezza: 20,
//     }, {
//         nome: "zucchina5",
//         lunghezza: 7,
//     }, {
//         nome: "zucchina6",
//         lunghezza: 3,
//     }, {
//         nome: "zucchina7",
//         lunghezza: 30,
//     }, {
//         nome: "zucchina8",
//         lunghezza: 25,
//     }, {
//         nome: "zucchina9",
//         lunghezza: 21,
//     }, {
//         nome: "zucchina10",
//         lunghezza: 2,
//     }
// ]

// let totallyNormalZucchine = [];
// let unnecessaryLongZucchine = [];
// let sommaLunghezzaNormal = 0;
// let sommaLunghezzaLong = 0;

// for (const zucchina of zucchine) {
//     if (zucchina.lunghezza < 15){
//         totallyNormalZucchine.push(zucchina.lunghezza)
//     } else {
//         unnecessaryLongZucchine.push(zucchina.lunghezza)
//     }
// }

// for (const zucchina of totallyNormalZucchine) {
//     console.log("è lunga" + zucchina)
//     sommaLunghezzaNormal +=  zucchina
// }

// console.log(sommaLunghezzaNormal)

// for (const zucchina of unnecessaryLongZucchine) {
//     sommaLunghezzaLong += zucchina
// }

// console.log(sommaLunghezzaLong)

// SNACK 3

let stringa = "ciao";

console.log(stringa)
let stringaReverse = reverseString(stringa)
console.log(stringaReverse)

function reverseString (elemento) {
    let elementoSplit = elemento.split("")
    let elementoReverse = elementoSplit.reverse();
    let elementoJoin = elementoReverse.join("")
    return elementoJoin
}

// SNACK 4

let numeri = [1, 2, 3];
let lettere = ["a", "b", "c"];

let numeriLetter = arrayJoin (numeri, lettere)
console.log(numeriLetter)

function arrayJoin (array1, array2) {
    let fusioneArray = []

        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            fusioneArray.push(element)
            for (let i = 0; i < array2.length; i++) {
                const element = array2[i];
                if (!fusioneArray.includes(element)){
                    fusioneArray.push(element)
                }
            }
        }

        return fusioneArray
    }

