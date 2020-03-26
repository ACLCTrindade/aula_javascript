//FUNÇÃO

function Load()
{
    alert("Funciona")
}

function FuncaoAlterar(elemento)
{
    console.log(elemento.value);
}

function Clicou()
{
    document.getElementById("clica").innerHTML = "<b>Obrigado por <i>clicar</i></b>";
    //alert("Obrigado por clicar");
   
}

function Redirecionar()
{
    //window.open("https://google.co.ao");
    window.location.href = "https://google.co.ao";
}

function Trocar(elemento)
{
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("passar").innerHTML = "Obrigado por passar o mouse";
    //alert("passou");
}

function Voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("passar").innerHTML = "Passe o mouse aqui";
}

/*var validar = 0;
function ValidarIdade(idade)
{
    if(idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
}

var idade = prompt("Qual é a sua idade");
ValidarIdade(idade);
console.log(validar);*/

/*function soma(n1, n2)
{
    return n1+n2;    
}

function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome);
}

alert(setReplace("utiliza java ou php", "php", "C#"));
alert(soma(5, 5));*/

//DATA
/*var d = new Date();
alert(d);*/

//LAÇOS DE REPETIÇÃO
/*var count = 0;

while(count < 5)
{
    console.log(count);
    count++;
}*/

/*for(var i = 0; i < 5; i++)
{
    console.log(i);
}*/

//CONDICIONAIS
/*var idade = prompt("Qual é a sua idade?");
if(idade >= 18)
{
    alert("Maior de idade");
}
else
{
    alert("Menor de idade");
}*/

//LISTA DE DICIONÁRIO
/*var frutas = [{nome:"Banana", cor:"Amarela"},  {nome:"pera", cor:"verde"}];
console.log(frutas[1].cor);*/

//DICIONÁRIO
/*var fruta = {nome:"Banana", cor:"Amarela"};
console.log(fruta.nome);
*/

//ARRAY
//var lista = ["carro","mota","bina"];
//lista.push("camião"); //Adcionar elemento a lista.
//lista.pop();//tira o último elemento da lista.
//console.log(lista.length); //também funciona com o alert.
//console.log(lista.reverse());//inverte a ordem do array
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert("Olá mundo");

//STRING
//var nome = "Trindade";
//var idade = 25;
//var idade2 = 12;
//var frase ="C# é a melhor linguagem do mundo";

//alert(nome + " tem " + idade + " anos");

//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Java", "C#"));
//alert(frase.replace("Java", "C#"));

//console.log(idade + idade2);

//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());