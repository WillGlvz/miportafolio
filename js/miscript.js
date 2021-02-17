$(document).ready(function(){
  $('.carousel').carousel({fullWidth: true});
  setInterval(function(){
    $('.carousel').carousel('next');
  }, 5000);
  $('.scrollspy').scrollSpy();
});