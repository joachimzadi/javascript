// Crée par Joachim Zadi le 23/06/2020 à 14:56
// ===========================================

// let p = document.querySelector('p');
// let div = p.parentNode;
// console.log(div)
// div.style.color = "blue";

// let b = document.body;
// console.log(b);
//
// let div = b.childNodes[3];
// console.log(div);
//
// let pPremier = div.childNodes[1];
// console.log(pPremier);

let tousLesP = document.querySelectorAll('.para');
console.log(tousLesP);

let p2 = tousLesP[1];
console.log(p2.lastChild.nodeValue);