function exibe(){
    var peso = document.querySelector("#peso");
    peso = peso.value;
    var altura = document.querySelector("#altura");
    altura = altura.value;
    if((altura == "") || (peso == "")){
    	alert("Nenhum campo pode ficar em branco");
    	return;
    }
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    alert("Seu imc é: "+ imc);

}