function calcularIMC() {
    var peso = document.getElementById("ipeso").value;
    var altura = document.getElementById("ialtura").value;
    var resultado = (peso / (altura * altura));
    var resultado_formatado = resultado.toFixed(1);
    var texto = document.getElementById("resultado");
    if(peso == "" || peso == 0 || altura == "" || altura == 0) {
        alert("Por favor, preencha todos os campos! 👇🏽 👍🏽");
        document.getElementById("resultado").innerHTML = "0";
    }
    else {
        if (resultado_formatado < 18.5) {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br/ >Você está abaixo do peso &#x1F62A`;
            texto.classList = "background_resultado";
        }
    
        else if (resultado_formatado >= 18.5 && resultado_formatado <= 24.9) {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br /> Você está no peso ideal &#x1F603`;
            texto.classList = "background_resultado";
    
        }
        else if (resultado_formatado >= 25 && resultado_formatado <= 29.9) {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br /> Você está com sobrepeso &#x1F610`;
            texto.classList = "background_resultado";
        }
        else if (resultado_formatado >= 30 && resultado_formatado <= 34.9) {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br /> Você está com obesidade grau I &#x1F641`;
            texto.classList = "background_resultado";
        }
        else if (resultado_formatado >= 35 && resultado_formatado <= 39.9) {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br /> Você está com obesidade grau II &#x1F61F`;
            texto.classList = "background_resultado";
        }
        else {
            texto.innerHTML = `Seu IMC é: ${resultado_formatado} <br /> Obesidade grau III  GRAVE! &#x270B <br /> Procure um médico(a) &#x1F468 &#x1F469`;
            texto.classList = "background_resultado";
        }
    }
}

function limpar() {
     document.getElementById("ipeso").value = "";
     document.getElementById("ialtura").value = "";
     document.getElementById("resultado").innerHTML = "0";
     document.getElementById("resultado").classList = "";

}
