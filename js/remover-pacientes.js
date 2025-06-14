var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelectorAll("#tabela-pacientes");

tabela.addEventeListener("dblclick", function(event){
    event.target.parentNode.classListe.add("fadeOut");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});