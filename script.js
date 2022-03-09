$(function(){
  $(".sidebar-collapse").sideNav();
  $(".sidebar-collapse").on('click', function(){
    $(this).toggleClass('active');
  });
});

// slider
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.slider').slider({
    height:600 ,
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
