// Crée par Joachim Zadi le 24/06/2020 à 05:15
// ===========================================

// ETAPE 1
// *******

//On selectionne les elements de la page
let formulaire = document.getElementById('formulaire');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');

// ETAPE 2
// *******

// Le systeme genere un nombre aleatoire (1 <-> 10)
let alea = Math.floor(Math.random() * 10) + 1;
let nbCoup = 0;
let nombreChoisi;

// ETAPE 3
// *******
//On verifie que la saisie est un nombre
saisie.addEventListener('keyup', () => {
    if (isNaN(saisie.value)) {
        //On affiche le message d'erreur
        erreur.style.display = 'inline';
    } else {
        //On masque le message d'erreur
        erreur.style.display = 'none';
    }
});

// ETAPE 4
// *******

//On valide le formulaire
formulaire.addEventListener('submit', function (e) {
    //On desasctive le comportement par defaut du navigateur
    e.preventDefault();

    //On verifie les infos saisie par l'utilisateur
    if (isNaN(saisie.value) || saisie.value.trim() == '') {
        //On met une couleur de bordure rouge
        saisie.style.borderColor = 'red';
    } else {
        //On increment le nombre de coup
        nbCoup++;

        //On met une couleur de bordure silver
        saisie.style.borderColor = 'silver';

        //On recupere la saisie de l'utilisateur
        nombreChoisi = saisie.value;

        //On reinitialise le champ de saisie
        saisie.value = '';

        //On appelle la fonction de verification
        verifier(nombreChoisi);
    }
});

// ETAPE 5
// *******

//On ecrit la fonction de verifiaction
function verifier(nombre) {

    //On c ree l'element qui va encapsuler notre message
    let instruction = document.createElement('p');

    if (nombre < alea) {
        instruction.className = "alert alert-danger";
        instruction.textContent = `Coup N°${nbCoup}  [${nombre}], c'est plus grand`;
    } else if (nombre > alea) {
        instruction.className = "alert alert-danger";
        instruction.textContent = `Coup N°${nbCoup}  [${nombre}], c'est plus petit`;
    } else {
        instruction.className = "alert alert-success";
        instruction.textContent = `Brave le nombre à trouver etait ${alea}`;
    }
    document.getElementById('instructions').prepend(instruction);
}




