// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!
let res = document.getElementById("contador")
let computador = 0
let jogador = 0

function sortear() {
    // As variáveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    
    let min = 1 
    
    let max = 100
    
    let dif = max - min
    
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    
    computador = min + Math.trunc(dif * aleatorio) //O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.    
}

function jogar() {

    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor <strong>${computador}</strong>!</p>`
        document.getElementById('botao').style.visibility = 'hidden'    
    }
        

}
