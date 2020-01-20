function calcularPotencial(){
    var valorCarga = document.querySelector("#valor-carga").value;
    var valorDistancia = document.querySelector("#valor-distancia").value;

    var undCarga = document.querySelector("#undcarga").value;
    var undDistancia = document.querySelector("#und-distancia").value;
    
    const k = 9 *  Math.pow(10, 9);
    var output = document.querySelector("#output-potencial");

    if(!valorCarga | !valorDistancia ){
        output.textContent = "Digite os valores nos campos acima!" 
    }else if (valorDistancia < 0){
        output.textContent = "O valor da distância não pode ser negativo!"
    }else if(valorCarga == 0 | valorDistancia == 0 ){
        output.textContent = "Os valores para os campos não podem ser zero"
    }else{

        
        valorCarga = valorCarga * undCarga;
        

        valorDistancia = valorDistancia / parseInt(undDistancia);
        var resultado = (k * valorCarga) / valorDistancia;

        var valorNotacao = resultado.toExponential().toString().split("e");
        var exp = parseInt(valorNotacao[1]);
        
        if (resultado > 1 ){
            resultado = resultado / (Math.pow(10, exp));
        }
        else if (resultado < 1){
            resultado = resultado * Math.pow(10, exp * (-1) );
        }

        output.innerHTML = resultado.toPrecision(3) + ' x 10<sup>' + exp + '</sup> V';


    }


}


function calcularDistancia(){



    var valorq1 = document.querySelector("#valor-q1").value;
    var valorq2 = document.querySelector("#valor-q2").value;
    var distanciaMaior = document.querySelector("#valor-distancia2").value;

    var undq1 = document.querySelector("#und-q1").value;
    var undq2 = document.querySelector("#und-q2").value;
    var undDistancia = document.querySelector("#und-distancia2").value;

    var output = document.querySelector("#output-distancia");

    if(!valorq1 | !valorq2 | !distanciaMaior ){
        output.textContent = "Digite os valores nos campos acima!" ;
    }else if (distanciaMaior < 0){
        output.textContent = "O valor da distância não pode ser negativo!";
    }else if(valorq1 == 0 | valorq2 == 0 | distanciaMaior == 0 ){
        output.textContent = "Os valores para os campos não podem ser zero" ;
    }else if(valorq1 < 0 | valorq2 < 0){
        output.textContent = "Digite apenas o módulo da carga" ;
    }else{


    valorq1 = valorq1 * undq1;
    valorq2 = valorq2 * undq2;
    distanciaMaior = distanciaMaior / parseInt(undDistancia);

    var distanciaMenor = (valorq1 * distanciaMaior) / (valorq1 + valorq2);

  
        output.innerHTML = distanciaMenor.toPrecision(3) + " metros" ;
    }
}