let contador = 0

let c = document.getElementById("contador")

function contar(){
      
    contador ++
    
    c.innerHTML = contador

}

function zerar(){
    
    contador = 0       
    
    c.innerHTML = contador
}