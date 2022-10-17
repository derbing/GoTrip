var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPaus: true,
    autoplaySpeed: 2000,
});

$('.slider_btn--prev').click(function() {


    owl.trigger('next.owl.carousel', [300]);
})