window.alert("Seja bem-vindo(a) ao meu site!!!")

function clicar(){
    let numero = window.prompt("Digite um número:")
    
    let dobro = numero * 2
    
    let metade = numero / 2

    let res = window.document.getElementById("resultado")

    res.innerHTML = `O <strong>DOBRO</strong> de ${numero} é ${dobro} e a <strong>METADE</strong> é ${metade}.`

}

