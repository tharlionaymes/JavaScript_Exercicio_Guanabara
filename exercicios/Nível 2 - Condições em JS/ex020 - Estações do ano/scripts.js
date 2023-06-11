let p = window.document.getElementById("paragrafo1")


function clicar(){
    let mes = String(window.prompt("Digite o mês (ex: Julho)"))
    
    mes = mes.toLowerCase()

    
    if (mes == "abril" || mes == "maio" || mes == "junho"){        
       
        p.innerHTML = `<p>No mês de ${mes} é <strong>OUTONO</strong></p>`
    }

    else if (mes == "julho" || mes == "agosto" || mes == "setembro"){        
       
        p.innerHTML = `<p>No mês de ${mes} é <strong>INVERNO</strong></p>`
    }

    else if (mes == "outubro" || mes == "novembro" || mes == "dezembro"){        
       
        p.innerHTML = `<p>No mês de ${mes} é <strong>PRIMAVERA</strong></p>`
    }

    else if (mes == "janeiro" || mes == "fevereiro" || mes == "março"){        
       
        p.innerHTML = `<p>No mês de ${mes} é <strong>VERÃO</strong></p>`
    }
    
    

}