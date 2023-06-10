function clicar(){ 

    let n1 = Number(window.prompt(`Digite um número:`))

    let n2 = Number(window.prompt(`Digite outro número:`))

    let res = window.document.getElementById("resultado")

    if (n1 > n2){
        res.innerHTML = `<p> Analisando os valores ${n1} e ${n2}, o maior valor é <strong>${n1}</strong>.</p>`
    }
    else if (n1 < n2){
        res.innerHTML = `<p> Analisando os valores ${n1} e ${n2}, o maior valor é <strong>${n2}</strong>.</p>`
    }
    else{
        res.innerHTML = `<p> Analisando os valores ${n1} e ${n2}, ambos são <strong>IGUAIS</strong>.</p>`
    }


}

