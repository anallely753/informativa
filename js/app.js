window.addEventListener('load', function(){	
	// Carousel de seccion de cursos:
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  breakpoint: 1500,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.carousel-logos').owlCarousel({
    loop:false,
    autoplay:true,
    lazyLoad:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:5,
        },
        1000:{
            items:8,
        }
    }
});
$(".owl-carousel.carousel-talleres").owlCarousel({
          autoplay:false,
          nav: true,
          lazyLoad:true,
          loop:true,
          dots:true,
          items: 1,
          responsiveClass:true,
          responsive:{
              600:{
              	nav:true,
                items:2,
                dots:true,
              }
          }

});

addEventListener('DOMContentLoaded', () => {
	// Menu desplegable:
	const btn__menu = this.document.querySelector('.btn__menu');
	if (btn__menu){
		btn__menu.addEventListener('click', () => {
			const menu__items = this.document.querySelector('.menu__items');
			const nav_extend = this.document.querySelector('.nav-menu-extend ');
			// Se muestra u oculta la clase 'show' dependiendo del caso
			menu__items.classList.toggle('show');
			nav_extend.items.classList.toggle('dis-des-1020');
		});
	}
});

// Movimiento frontal y trasero de card
function flipCards(){
	const btns = document.querySelectorAll(".card__flip");

	btns.forEach((btn) => {
		btn.addEventListener('click', e => {
			// console.log(e.target.id);
			btn.parentNode.parentNode.parentNode.classList.toggle('is-flipped');
		});
	});
}

flipCards();

// Navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});