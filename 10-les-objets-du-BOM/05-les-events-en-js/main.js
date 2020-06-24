// Crée par Joachim Zadi le 23/06/2020 à 16:04
// ===========================================

let p1 = document.querySelector('p');

p1.addEventListener('click', function () {
    this.innerHTML = "<h2>Bravo, vous venez de me cliquer !!!</h2>";
    this.style.color = "red";
    this.style.textTransform = "uppercase";
});

let p2 = document.querySelectorAll('p')[1];
console.log(p2);

p2.addEventListener('mouseenter', function () {
    this.innerHTML = "<h2>Vous survolez le paragraphe 2</h2>";
    this.style.color = "blue";
    this.style.textTransform = "capitalize";
});

p2.addEventListener('mouseleave', () => {
    this.innerHTML = "Survolez-moi svp!";
    this.style.color = "orange";
});