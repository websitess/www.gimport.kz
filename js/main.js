$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true
    });

    $('.partners-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
         }       
      },
            {
                breakpoint: 540,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }       
      },
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
        }       
        }
        ]
    })
});

// more lang
$(function(){
    $('.langs .more--btn').on('click', function(){
        $('.langs ul').slideToggle();
        return false;
    });

    // Scroll to top
    if ($('.back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});


// map
$(function(){
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [43.205833, 76.828675],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: 'улица Ораза Рымжанова, 35'
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/logo-in-map.png',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
});


// Modal
$(document).ready(function() {
	$('.open--modal').on('click', function(){
		var link = $(this).attr('data-modal');
		$(link).fadeIn();
		return false;
	});

	$('.modal .close, .modal__layer').on('click', function() {
		$(this).parents('.modal, .mobile-contacts').fadeOut();
		return false;	
	});

	$('[name="tel"]').inputmask('+7 (999) 999-99-99');
});

$(function(){
    $('.nav--btn').on('click', function(){
        var menu = document.querySelector('header .nav');
        if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(menu).slideDown();  
            $(this).addClass('open');
        }
    })
    return false;
});

$('.phone--btn').on('click', function(){
    var social = document.querySelector('header .col--phone');
    $(social).slideDown();
    $(document).bind('touchstart', function(e){
        if(!(e.target).closest("header .col--phone")){
            $('header .col--phone').slideUp();
        }
        e.stopPropagation();
    });
    return false;
})