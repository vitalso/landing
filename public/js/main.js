$(function () {

// SLider for gallery
$('.gallery-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

  $('.buttons').find('.next-slide').on('click' , function(){
    $('.gallery-slider').slick('slickNext');
  });

  $('.buttons').find('.prev-slide').on('click' , function(){
    $('.gallery-slider').slick('slickPrev');
  });

// Lightbox for gallery
$('.gallery-image').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

// Scroll to Contact section
  $('.new .primary').on('click' , function(e){
    e.preventDefault();
    var hash = $(this).attr('href');

      $('html, body').animate({scrollTop: $(hash).offset().top}, 1000);
  })

// Cookie banner
$('.close').on('click' , function(e){
  e.preventDefault();
  $('.cookie').addClass('hide');
});

// Publications lightbox
$('.publications-cover').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

// Publications lightbox
$('.recording-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

});
