
const slides = document.getElementsByClassName("ow-slide");
const siguiente = document.querySelector('.siguiente');
const atras = document.querySelector('.atras');

let index = 1;


if(document.body.classList.contains('home')){
  function slider(p) {

    const slidesArray = [...slides]

    console.log(slidesArray)

    
          slidesArray.forEach(e=>{
          e.style.display="none"
        })
  
  
    if (p > slides.length) {
      index = 1;
    }
    if (p < 1) {
      index = slides.length;
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
}



