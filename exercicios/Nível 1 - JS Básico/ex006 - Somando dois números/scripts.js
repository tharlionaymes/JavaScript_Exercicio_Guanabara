function clicar(){
    let n1 = Number(window.prompt("Digite o primeiro número:"))

    let n2 = Number(window.prompt("Digite o segundo número:"))

    
    let soma = n1 + n2    

    let res = window.document.getElementById("resultado")

    res.innerHTML = `A <strong>soma</strong> entre ${n1} e ${n2} é igual a <strong>${soma}</strong>.`

}

