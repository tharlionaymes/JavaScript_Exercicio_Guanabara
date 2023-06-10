function clicar() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Aparece apenas o número do mês Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Aparece apenas o número da semana Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Ano: <strong>${ano}</strong></p>`
    saida.innerHTML += `<p>Mês: <strong>${meses[mes]}</strong></p>`
    saida.innerHTML += `<p>Dia da semana: <strong>${semana[sem]}</strong></p>`    
    saida.innerHTML += `<p>Dia: <strong>${dia}</strong></p>`    
    saida.innerHTML += `<p>Hora: <strong>${hora}</strong></p>`
    saida.innerHTML += `<p>Minutos: <strong>${min}</strong></p>`
    saida.innerHTML += `<p>Segundos: <strong>${seg}</strong></p><hr>`
}