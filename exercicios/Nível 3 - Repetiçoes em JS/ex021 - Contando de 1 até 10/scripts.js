function clicar() {
    let saida = document.getElementById('paragrafo1')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }   
    saida.innerHTML += ` &#x1F3C1;`
}