//Código modificado de: Jemima Abu.
// Link: https://webdesign.tutsplus.com/es/tutorials/animate-on-scroll-with-javascript--cms-36671

 import {totalPokemons} from './pokedex.js';

const scrollOffset = 200;
 
let scrollElements = document.querySelectorAll(".pokemons__item");
 
const elementInView = (el, offset = 0) => {
//devuelve el tamaño de un elemento y su posición relativa al viewport. .top(devuelve alto respecto al viewport)
  const elementTop = el.getBoundingClientRect().top;

    // innerHeight es el alto de la ventana.
    // clientHeight es el alto del documento.
    //puede variar entre estos dos.
    let heightViewport = window.innerHeight || document.documentElement.clientHeight;

  return (

    //Ej: 600 (height viewpoert) - offset = 300
    //si la elementTop es menos que 300px es true
    // elementTop <= (heightViewport - offset)

    //modificado, para que sea true dentro del viewport.
    elementTop >= (0 - scrollOffset) && elementTop <= (heightViewport - scrollOffset)
  );
};
 
const displayScrollElement = (scrollElement) => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = (scrollElement) => {
    if (scrollElement.classList.contains('scrolled')) {
        scrollElement.classList.remove('scrolled');
    }
}
 
const handleScrollAnimation = (scrollElements) => {
    for (const scrollElement of scrollElements) {
        if (elementInView(scrollElement, scrollOffset)) {
            displayScrollElement(scrollElement);
        } else {
            hideScrollElement(scrollElement);
        }
    }
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    window.onload = () => {
        handleScrollAnimation(scrollElements);
    }

    window.addEventListener('scroll', () => {
    if (scrollElements.length != totalPokemons) {
        scrollElements = document.querySelectorAll(".pokemons__item");
    }
    handleScrollAnimation(scrollElements);
    })

}
