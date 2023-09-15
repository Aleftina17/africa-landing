import ScrollReveal from "scrollreveal";

function ScrollRevealFunc () {
    ScrollReveal({
        distance: '60px',
        duration: 2800,
      })
      
      ScrollReveal().reveal('.partners, .discover', {
        origin: 'top'
      })
      
      ScrollReveal().reveal(' .discover__title, .destination__title, .destination__text, .welcome__picture-img', {
        origin: 'left'
      })
      
      ScrollReveal().reveal('.discover__picture-scroll, .discover__text, .popular__controls, .btn-check-destination, .welcome__text', {
        origin: 'right'
      })
      
      ScrollReveal().reveal('.discover__form, .subscribe-form, .destination', {
        origin: 'bottom'
      })
}

export default ScrollRevealFunc 


  