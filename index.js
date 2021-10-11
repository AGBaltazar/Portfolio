/*These Functions will keep the panels hidden 
and create a navigation via nav and buttons */
$(document).ready(function(){
    $(".intro-panel").show();
    $(".about-double-panel").hide();
    $(".nav-grid").hide();
    $(".skills-double-panel").hide();
    $(".projects-panel").hide();
    $(".contact-panel").hide();
  });

$(".intro-button").click(function(){
    $(".intro-panel").hide();
    $(".nav-grid").show();
    $(".about-double-panel").hide();
    $(".skills-double-panel").hide();
    $(".projects-panel").hide();
    $(".contact-panel").hide();
});

$(".intro-card").click(function(){
  $(".intro-panel").show();
  $(".nav-grid").hide();
  $(".about-double-panel").hide();
  $(".skills-double-panel").hide();
  $(".projects-panel").hide();
  $(".contact-panel").hide();
});

$(".menu-button").click(function(){
  $(".intro-panel").hide();
  $(".nav-grid").show();
  $(".about-double-panel").hide();
  $(".skills-double-panel").hide();
  $(".projects-panel").hide();
  $(".contact-panel").hide();
});

$(".about-card").click(function(){
  $(".intro-panel").hide();
  $(".nav-grid").hide();
  $(".about-double-panel").show();
  $(".skills-double-panel").hide();
  $(".projects-panel").hide();
  $(".contact-panel").hide();
});

$(".skills-card").click(function(){
  $(".intro-panel").hide();
  $(".nav-grid").hide();
  $(".about-double-panel").hide();
  $(".skills-double-panel").show();
  $(".projects-panel").hide();
  $(".contact-panel").hide();
});

$(".projects-card").click(function(){
  $(".intro-panel").hide();
  $(".nav-grid").hide();
  $(".about-double-panel").hide();
  $(".skills-double-panel").hide();
  $(".projects-panel").show();
  $(".contact-panel").hide();
});

$(".contact-card").click(function(){
  $(".intro-panel").hide();
  $(".nav-grid").hide();
  $(".about-double-panel").hide();
  $(".skills-double-panel").hide();
  $(".projects-panel").hide();
  $(".contact-panel").show();
});

/** Upon reloadand load these functions will hide the panels 
  with more effect than jquery by using css hidden  */
$(function () {
  $('#projects').removeClass('hidden');
});

$(function () {
  $('#skills').removeClass('hidden');
});

$(function () {
  $('#contact').removeClass('hidden');
});

$(function () {
  $('#about-me').removeClass('hidden');
});

$(function () {
  $('#nav-tiles').removeClass('hidden');
});