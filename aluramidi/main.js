function tocaSom(IdElement){
    const elemento = document.querySelector(IdElement);

    if(elemento != null && elemento.localName ==='audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for(let cont = 0; cont < listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(IdAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
}
