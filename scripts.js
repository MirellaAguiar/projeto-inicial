var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome        = document.getElementById("nome");
var email       =  document.getElementById("email");
var telefone    =  document.getElementById("telefone");
var cep         =  document.getElementById("cep");
var estado      =  document.getElementById("estado");
var cidade      =  document.getElementById("cidade");
var bairro      =  document.getElementById("bairro");
var logradouro  =  document.getElementById("logradouro");
var numero      =  document.getElementById("numero");
var complemento =  document.getElementById("complemento");

var saida = document.getElementById("saida-de-dados");

function alertar(event){
//{ alert("Voce clicou no botao!!!" + " " + nome.value);

//var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
    //    alert("este número é par!");

   // }
   saida.inertText = "Nome:  "+ nome.value +
   "\n Email:  " + email.value;
   "\n telefone:  " + telefone.value;
   "\n cep:  " + cep.value;
   "\n estado:  " + estado.value;
   "\n cidade:  " + cidade.value;
   "\n bairro:  " + bairro.value;
   "\n logradouro:  " + logradouro.value;
   "\n numero:  " + numero.value;
   "\n comlemento:  " + complemento.value;
   
}