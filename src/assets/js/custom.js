// Initialize Owl Carousel for testimonials
$(document).ready(function(){
          
    var navbar = $(".navbar");
    var navbarOffset = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > navbarOffset) {
            navbar.removeClass("fixed-top");
        } else {                    
            navbar.addClass("fixed-top");
        }
    });

    $('#carouselExample').carousel({
        interval: 3000 // Set the autoplay interval in milliseconds (2 seconds in this example)
    });

    $("#testimonialCarousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true, // Show navigation buttons
        dots: false, // Hide navigation dots
        navText: [
            '<i class="fas fa-chevron-left"></i>', // Icon for the previous button
            '<i class="fas fa-chevron-right"></i>' // Icon for the next button
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#owl1").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this example)
        autoplayHoverPause: false, // Don't pause autoplay on hover
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#owl2").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this example)
        autoplayHoverPause: false, // Don't pause autoplay on hover
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});

$(document).ready(function () {
    var owl = $('#owl-gallery2');

    owl.owlCarousel({
        items: 4,
        autoplay:true,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        },
        onInitialized: addZoomClass
    });

    setInterval(function () {
        owl.trigger('next.owl.carousel');
    }, 10000);

    owl.on('changed.owl.carousel', function (event) {
        // Remove zoom and active classes from all slides
        $('.owl-item').removeClass('zoomed active-left active-center active-right active-second');

        // Get the active index
        var activeIndex = event.item.index;

        // Add zoom class to the active slide
        owl.find('.owl-item').eq(activeIndex).addClass('zoomed active-center');

        // Add zoom class to the adjacent slides
        if (activeIndex > 0) {
            owl.find('.owl-item').eq(activeIndex - 1).addClass('zoomed active-left');
        }

        if (activeIndex < owl.find('.owl-item').length - 1) {
            owl.find('.owl-item').eq(activeIndex + 1).addClass('zoomed active-right');
        }

        // Check if there is a third slide and add zoom class
        if (activeIndex + 1 < owl.find('.owl-item').length) {
            owl.find('.owl-item').eq(activeIndex + 1).addClass('zoomed active-second');
        }
    });

    function addZoomClass(event) {
        // Add zoom class to the first slide on initialization
        $(event.target).find('.owl-item').eq(0).addClass('zoomed active-center');
    }
});