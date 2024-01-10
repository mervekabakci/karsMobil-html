$(window).on('load', function () {
  if ($('.preloader').length) {
    $('.preloader').remove();
  }
});

//User Profile Menu button
$(".userButton").click(function(){
  $("#profileCanvas").addClass("active");
})

//Menu button
$(".menuButton").click(function(){
  $("#menuCanvas").addClass("active");
})

//acık olan canvasların kapanması ıcın
$("#center").click(function(){
  if($(".off-canvas").hasClass("active")){
    $(".off-canvas").removeClass("active")
  }
})
//Accordion menu
$('.accButton').click(function() {
  var content = $(this).next('.accContent');
  var isActive = $(this).hasClass("active");

  $(this).closest(".accMenu").find('.accButton').removeClass("active");

  $(this).toggleClass("active", !isActive);

  content.slideToggle(300);
  content.toggleClass("active");

  $('.accMenu .accContent').not(content).slideUp(300).removeClass("active");
});


if (typeof Fancybox !== 'undefined') {
  Fancybox.bind('[data-fancybox]', {
      compact: false,
      Carousel: {},
      Toolbar: false,
      Thumbs: false
  });
}
