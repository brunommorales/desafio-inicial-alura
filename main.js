function tocaSom (idElementoAudio) {
   const elemento =  document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();   
    }
    else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou Seletor inválido')
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }   

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
            
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
