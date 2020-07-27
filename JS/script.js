/*var idade=18;
if (idade>=18){
    console.log("Maior de idade!");
}
else{
    console.log("Menor de Idade");
}*/
/*var mes= 1;

switch(mes){
    case 1: console.log("Janeiro");
    break;
    case 2: console.log("Fevereiro");
    break;
    case 3: console.log("Março");
    break;
    case 4: console.log("Abril");
    break;

    default: console.log('Mes não existe');
}*/



/*var nome= 'Rafael';

var num1 = 10;
var num2 = 5;

var resultado = num1 % num2;

var lista=[10,20,30];
var objeto = {
    nome:'João', 
    sobrenome:'Silva'
};

var pessoa = null;

console.log(resultado, lista, objeto, pessoa);*/


var numero = 0;
while(numero < 3){
    console.log(numero);
    numero = numero+1;
}

do{
    console.log(numero);
    numero = numero+1;
}
    while(numero < 3){
    }

for(var numero=0;numero<3; numero++){
    console.log('Olá ' + numero);

}

var lista =  [10,20,30];

for (var e in lista){//atalho para percorrer lista (var e(vetor) in lista(lista))
    console.log(e); //imprime os indices do vetor.
    console.log(lista[e]);//imprime o elemento de cada posição
}

var nome = {
    nome: 'Rafael',
    sobrenome:'Silva'
};

for (var n in nome){
    // [n]nome da propriedade 
    console.log(n + ": "+ nome[n]);
}

