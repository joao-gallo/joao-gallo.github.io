const blocos = document.getElementsByClassName('color');
blocos[0].style.backgroundColor = 'black'
blocos[1].style.backgroundColor = 'green'
blocos[2].style.backgroundColor = 'yellow'
blocos[3].style.backgroundColor = 'grey'

const paizinho = document.getElementById('pixel-board')
for (i = 0; i < 25; i += 1){
const pixel = document.createElement('div')
pixel.className = 'pixel'
pixel.style.backgroundColor = 'white'
pixel.style.color = 'black'
paizinho.appendChild(pixel)

}let cor = document.querySelector('.color');
cor.classList.add('selected');

let todasAsCores = document.querySelectorAll('.color');

function seleciona() {
  for (let i = 0; i < todasAsCores.length; i += 1)
   {
    todasAsCores[i].addEventListener('click', function(event) {
      cor.classList.remove('selected'); 
      event.target.classList.add('selected'); 
      cor = event.target; 
    }
    )
  }
}
 seleciona();

 function colorirPixels() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function() {
          let colorir = window.getComputedStyle(document.querySelector('.color.selected')).backgroundColor;
          if (pixels[i].style.backgroundColor !== colorir) {
              pixels[i].style.backgroundColor = colorir;
          } else {
              pixels[i].style.backgroundColor = 'unset';
          }
      })
  }
}
colorirPixels();


function limparQuadros() {
  let limpar = document.querySelector('#clear-board');
  limpar.addEventListener('click', function() {
      let pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
          pixels[i].style.backgroundColor = 'white'
      }
  })
}
limparQuadros();