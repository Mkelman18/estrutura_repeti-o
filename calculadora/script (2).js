alert ("Programa para ver se vc passou");

var nomeDoAluno = "";
var primeiroNota = 0;
var segundaNota= 0;
var terceiraNota = 0;

var contador = 0;
do{
nomeDoAluno = prompt ("digite o nome do aluno")
primeiroNota = Number (prompt("Digite a primeiro nota"));
segundaNota= Number (prompt("Digite a segundo nota"));
terceiraNota = Number (prompt("Digite a terceira nota"));


var media = Number ((primeiroNota+ segundaNota + terceiraNota));

if (media >= 6.0){
    alert("vc passou")
} else {
    alert ("vc nao passou");
    
}


contador = contador+ 1;

}while (contador < 3);

alert ("terminou")

