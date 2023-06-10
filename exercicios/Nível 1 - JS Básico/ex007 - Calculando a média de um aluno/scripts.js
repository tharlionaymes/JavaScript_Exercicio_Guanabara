function clicar(){
    let nome = String(window.prompt("Digite o nome do aluno:"))

    let n1 = Number(window.prompt(`Qual foi a 1º nota de ${nome}:`))

    let n2 = Number(window.prompt(`Digite foi a 2º nota de ${nome} :`))

    
    let media = (n1 + n2) / 2    

    let res = window.document.getElementById("resultado")

    res.innerHTML = `<p> Calculando a média final de <strong>${nome}</strong>.</p>`
    
    res.innerHTML += `<p> As notas obtidas foram <strong>${n1}</strong> e <strong>${n2}</strong>.</p>`
    
    res.innerHTML += `<p> A média final será <strong>${media}</strong>.</p>`
}

