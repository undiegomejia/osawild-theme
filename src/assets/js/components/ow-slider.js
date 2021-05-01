const slides = document.getElementsByClassName("ow-slide");
const siguiente = document.querySelector('.siguiente');
const atras = document.querySelector('.atras');

let index = 1;

function slider(p) {
  let i;

  if (p > slides.length) {
    index = 1;
  }
  if (p < 1) {
    index = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  return (
    (slides[index - 1].style.display = "block")
  );
}


atras.addEventListener('click', function(){
    slider((index += 1));
})

siguiente.addEventListener('click', function(){
    slider((index -= 1));
})

slider(index);

