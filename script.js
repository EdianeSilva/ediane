$(function(){
  $(".sidebar-collapse").sideNav();
  $(".sidebar-collapse").on('click', function(){
    $(this).toggleClass('active');
  });
});




// Show sideNav
$('.button-collapse').sideNav('');

$('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'right', 
    closeOnClick: true,
    draggable: true, 

  }
);


// slider
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.slider').slider({
    height:700 ,
    duration: 500,
  });
});

// seção projetos

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
