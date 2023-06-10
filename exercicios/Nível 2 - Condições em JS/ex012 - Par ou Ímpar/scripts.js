function clicar(){ 

    let n1 = Number(window.prompt(`Digite um número:`))

    let res = window.document.getElementById("resultado")

    let msg = ""

    if (n1 % 2 == 0){
        msg = "PAR"
    }
    else{
        msg = "ÍMPAR"
    }

    res.innerHTML = `<p> O número ${n1} digitado é <strong>${msg}</strong>.</p>`
}

