function clicar() {
    let anoNasc = window.prompt("Em que ano você nasceu?")
    
    let agora = new Date
    let saida = document.getElementById('saida')
    let ano = agora.getFullYear()

    idade = ano - anoNasc


    saida.innerHTML = `<p>Quem naseu em ${anoNasc} vai completar ou já completou <strong>${idade}</strong> anos em ${ano}</p>`
    
}