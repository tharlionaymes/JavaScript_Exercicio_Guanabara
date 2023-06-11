let p = window.document.getElementById("paragrafo1")


function clicar(){
    let n1 = Number(window.prompt("Primeiro Valor:"))

    let n2 = Number(window.prompt("Segundo Valor:"))

    let menu = Number(window.prompt(
        `        Valores informados: ${n1} e ${n2}

        O que você quer fazer?
        
        [1] SOMAR
        [2] SUBTRAIR
        [3] MULTIPLICAR
        [4] DIVIDIR`
    ))
    
    if (menu == 1){        
        p.innerHTML = `<h2> <strong>Calculando....</strong></h2>`
        p.innerHTML += `<p> ${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
    }
    else if (menu == 2){        
        p.innerHTML = `<h2> <strong>Calculando....</strong></h2>`
        p.innerHTML += `<p> ${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
    }
    else if (menu == 3){        
        p.innerHTML = `<h2> <strong>Calculando....</strong></h2>`
        p.innerHTML += `<p> ${n1} * ${n2} = <strong>${n1*n2}</strong></p>`
    }
    else if (menu == 4){        
        p.innerHTML = `<h2> <strong>Calculando....</strong></h2>`
        p.innerHTML += `<p> ${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
    }

}