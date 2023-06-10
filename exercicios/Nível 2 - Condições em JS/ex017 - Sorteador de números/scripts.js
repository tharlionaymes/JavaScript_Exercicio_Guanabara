function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    
    let c = document.getElementById("contador")
    c.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function zerar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let c = document.getElementById("contador")
    c.innerHTML = "<strong> 1 e 100</strong>"


}