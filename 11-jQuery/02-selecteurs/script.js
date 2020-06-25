// LES SELECTEURS EN jQuery

$(document).ready(function () {

    //Cibler un element html
    // $("button").click(function () {
    //     $("p").hide();
    // });

    //Cibler un element avec son id
    // $("button").click(function () {
    //     $("#test").hide();
    // });

    //Cibler un element avec sa classe
    // $("button").click(function () {
    //     $(".maClasse").hide();
    // });

    //Cibler tous les elements de la page
    // $("button").click(function () {
    //     $("*").hide();
    // });

    //Cibler les elements p qui ont la classe test
    // $("button").click(function () {
    //     $("p.test").hide();
    // });

    //Cibler le premier element p
    // $("button").click(function () {
    //     $("p:first").hide();
    // });

    //Cibler le premier li du premier element ul
    $("button").click(function () {
        $("ul li:first").hide();
    });
});