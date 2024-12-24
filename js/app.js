
$(function () {

    'use strict';

    // Showing page loader
    $(window).on('load', function () {
        
        populateColorPlates();
        setTimeout(function () {
            $(".page_loader").fadeOut("fast");
        }, 100);

        if ($('body .filter-portfolio').length > 0) {
            $(function () {
                $('.filter-portfolio').filterizr(
                    {
                        delay: 0
                    }
                );
            });
            $('.filteriz-navigation li').on('click', function () {
                $('.filteriz-navigation .filtr').removeClass('active');
                $(this).addClass('active');
            });
        }
    });

    // Made the left sidebar's min-height to window's height
    var winHeight = $(window).height();
    $('.dashboard-nav').css('min-height', winHeight);

    // Magnify activation
    $('.portfolio-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });

    $(".car-magnify-gallery").lightGallery();

    $(document).on('click', '.compare-btn', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $.jnoty("Car has been removed from compare list", {
                header: 'Warning',
                sticky: true,
                theme: 'jnoty-warning',
                icon: 'fa fa-check-circle'
            });

        } else {
            $(this).addClass('active');
            $.jnoty("Car has been added to compare list", {
                header: 'Success',
                sticky: true,
                theme: 'jnoty-success',
                icon: 'fa fa-check-circle'
            });
        }
    });

    $(document).on('click', '.wishlist-btn', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $.jnoty("Car has been removed from wishlist list", {
                header: 'Warning',
                sticky: true,
                theme: 'jnoty-warning',
                icon: 'fa fa-check-circle'
            });

        } else {
            $(this).addClass('active');
            $.jnoty("Car has been added to wishlist list", {
                header: 'Success',
                sticky: true,
                theme: 'jnoty-success',
                icon: 'fa fa-check-circle'
            });
        }
    });

    // Header shrink while page scroll
    adjustHeader();
    doSticky();
    placedDashboard();
    $(window).on('scroll', function () {
        adjustHeader();
        doSticky();
        placedDashboard();
    });

    // Comon slick strat
    $('.slick').slick({
        dots: false,
        infinite: true,
        touchThreshold : 100,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    });

    // Partners strat
    $('.custom-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    // Accordion strat
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Cardetailsslider-2 strat
    $('.slider-fors').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-navs'
    });
    $('.slider-navs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-fors',
        dots: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    // Banner 2 start initialization.
    if($(document).find('.slide').length > 0) {
        function sliderPluggin(activeslide = 0) {
            const slides = document.querySelectorAll('.slide');
            slides[activeslide].classList.add('active');
            function clearActiveClasses() {
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
            }

            for (const slide of slides) {
                slide.addEventListener('click', () => {
                    clearActiveClasses();
                    slide.classList.add('active');
                });
            }
        }

        sliderPluggin(0);
    }

    //product-slider-box
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping:true
    });

    //featured-slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //slide-container
    (function() {
        var slideContainer = $('.slide-container');
        slideContainer.slick({
            arrows: false,
            initialSlide:0,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4,
            swipeToSlide:true,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    })();

    if($(document).find('.slider-container').length > 0) {
        const sliderContainer = document.querySelector('.slider-container')
        const slideRight = document.querySelector('.right-slide')
        const slideLeft = document.querySelector('.left-slide')
        const upButton = document.querySelector('.up-button')
        const downButton = document.querySelector('.down-button')
        const slidesLength = slideRight.querySelectorAll('div').length

        let activeSlideIndex = 0

        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

        upButton.addEventListener('click', () => changeSlide('up'))
        downButton.addEventListener('click', () => changeSlide('down'))

        const changeSlide = (direction) => {
            const sliderHeight = sliderContainer.clientHeight
            if(direction === 'up') {
                activeSlideIndex++
                if(activeSlideIndex > slidesLength - 1) {
                    activeSlideIndex = 0
                }
            } else if(direction === 'down') {
                activeSlideIndex--
                if(activeSlideIndex < 0) {
                    activeSlideIndex = slidesLength - 1
                }
            }

            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        }
    }

    // Header shrink while page resize
    $(window).on('resize', function () {
        adjustHeader();
        doSticky();
        placedDashboard();
    });

    function adjustHeader()
    {
        var windowWidth = $(window).width();
        if(windowWidth > 0) {
            if ($(document).scrollTop() >= 100) {
                if($('.header-shrink').length < 1) {
                    $('.sticky-header').addClass('header-shrink');
                }
                if($('.do-sticky').length < 1) {
                    $('.company-logo img').attr('src', 'img/logos/logo.png');
                }
            }
            else {
                $('.sticky-header').removeClass('header-shrink');
                if($('.do-sticky').length < 1 && $('.fixed-header').length == 0 && $('.fixed-header2').length == 0) {
                    $('.company-logo img').attr('src', 'img/logos/logo.png');
                } else {
                    $('.company-logo img').attr('src', 'img/logos/logo.png');
                }
            }
        } else {
            $('.company-logo img').attr('src', 'img/logos/logo.png');
        }
    }

    function doSticky()
    {
        if ($(document).scrollTop() > 40) {
            $('.do-sticky').addClass('sticky-header');
            //$('.do-sticky').addClass('header-shrink');
        }
        else {
            $('.do-sticky').removeClass('sticky-header');
            //$('.do-sticky').removeClass('header-shrink');
        }
    }

    function placedDashboard() {
        var headerHeight = parseInt($('.main-header').height(), 10);
        $('.dashboard').css('top', headerHeight);
    }

    // Page scroller initialization.
    $.scrollUp({
        scrollName: 'page_scroller',
        scrollDistance: 300,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="fa fa-chevron-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // Counter
    function isCounterElementVisible($elementToBeChecked) {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $elementToBeChecked.offset().top;
        var BotElement = TopElement + $elementToBeChecked.height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    }

    $(window).on('scroll', function () {
        $(".counter").each(function () {
            var isOnView = isCounterElementVisible($(this));
            if (isOnView && !$(this).hasClass('Starting')) {
                $(this).addClass('Starting');
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
    });

    // Countdown activation
    $( function() {
        // Add background image
        //$.backstretch('../img/nature.jpg');
        var endDate = "December  27, 2019 15:03:25";
        $('.countdown.simple').countdown({ date: endDate });
        $('.countdown.styled').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>Days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Seconds</span></div>");
            }
        });
        $('.countdown.callback').countdown({
            date: +(new Date) + 10000,
            render: function(data) {
                $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
            },
            onEnd: function() {
                $(this.el).addClass('ended');
            }
        }).on("click", function() {
            $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });

    });

    $(".range-slider-ui").each(function () {
        var minRangeValue = $(this).attr('data-min');
        var maxRangeValue = $(this).attr('data-max');
        var minName = $(this).attr('data-min-name');
        var maxName = $(this).attr('data-max-name');
        var unit = $(this).attr('data-unit');

        $(this).append("" +
            "<span class='min-value'></span> " +
            "<span class='max-value'></span>" +
            "<input class='current-min' type='hidden' name='"+minName+"'>" +
            "<input class='current-max' type='hidden' name='"+maxName+"'>"
        );
        $(this).slider({
            range: true,
            min: minRangeValue,
            max: maxRangeValue,
            values: [minRangeValue, maxRangeValue],
            slide: function (event, ui) {
                event = event;
                var currentMin = parseInt(ui.values[0], 10);
                var currentMax = parseInt(ui.values[1], 10);
                $(this).children(".min-value").text( currentMin + " " + unit);
                $(this).children(".max-value").text(currentMax + " " + unit);
                $(this).children(".current-min").val(currentMin);
                $(this).children(".current-max").val(currentMax);
            }
        });

        var currentMin = parseInt($(this).slider("values", 0), 10);
        var currentMax = parseInt($(this).slider("values", 1), 10);
        $(this).children(".min-value").text( currentMin + " " + unit);
        $(this).children(".max-value").text(currentMax + " " + unit);
        $(this).children(".current-min").val(currentMin);
        $(this).children(".current-max").val(currentMax);
    });

    // Select picket
    // $('.selectpicker').selectpicker();

    // // Search option's icon toggle
    // $('.search-options-btn').on('click', function () {
    //     $('.search-section').toggleClass('show-search-area');
    //     $('.search-options-btn .fa').toggleClass('fa-chevron-down');
    // });

    // Our Partbers toggle
    (function () {
        $('.our-partners .item').each(function () {
            var itemToClone = $(this);
            for (var i = 1; i < 4; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-" + (i))
                    .appendTo($(this));
            }
        });
    }());

    //CALL NOW button enabling Based on EST time 9 to 6 PM working days Monday to Saturday
        function callnowEnablement(){
           // Get the current date/time
                    var currentTime = new Date();
                    // Define options for getting EST time
                    var options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    // Get the current EST time
                    var current_estTime = currentTime.toLocaleString('en-US', options);
                    // Get the current day in EST (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
                    var currentDay = currentTime.toLocaleString('en-US', { timeZone: 'America/New_York', weekday: 'long' });
                    if (currentDay !== 'Sunday') { // Check if the current day is within Monday to Saturday
                        var estHour = currentTime.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false });
                        // Check if the current hour is between 9:00 AM (9) and 6:00 PM (17) EST
                        if (!(parseInt(estHour) >= 9 && parseInt(estHour) <= 17) ){
                            // alert("Current time in EST: " + current_estTime + "\nCurrent day in EST: " + currentDay);
                            $("#thank_you_call_link").attr("href", "javascript:void(0)")  
                            $("#scroll_call_link").attr("href", "javascript:void(0)")
                            $("#thankyou_cl").attr("href", "javascript:void(0)")
                            $("#call_link_sales").attr("href", "javascript:void(0)")
                            $('#thankyou_call_div').hide();
                            
                            $('#thankyou_main_call')
                            .css('pointer-events', 'none') // Disable clicking
                            .css('opacity', '0.5') // Visually indicate disabled state
                            .removeAttr('onclick'); // Remove onclick attribute
                        }
                    } 
                    else{
                        $("#thank_you_call_link").attr("href", "javascript:void(0)")
                        $('#thankyou_main_call')
                            .css('pointer-events', 'none') // Disable clicking
                            .css('opacity', '0.5') // Visually indicate disabled state
                            .removeAttr('onclick'); // Remove onclick attribute
                        $("#scroll_call_link").attr("href", "javascript:void(0)")
                            .css('opacity', '0.5'); // Visually indicate disabled state

                        $('#thankyou_call_div').show();
                        
                    } 
        }

    //End of Call Now Enablement 

    // text call enabling Based on EST time 9 to 6 PM working days Monday to Saturday

// Get the current date/time
var currentTime = new Date();
// Define options for getting IST time
var options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
// Get the current IST time
var current_istTime = currentTime.toLocaleString('en-US', options);
// Get the current day in IST (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var currentDay = currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long' });

if (currentDay !== 'Sunday') { // Check if the current day is within Monday to Saturday
    var istHour = currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false });
    // Check if the current hour is between 9:00 AM (9) and 6:00 PM (17) IST
    if (!(parseInt(istHour) >= 9 && parseInt(istHour) <= 17)) {
        // Hide the button
        $('#thankyou_main_text').hide();
    } else {
        // Show the button
        $('#thankyou_main_text').show();
    }
} else {
    // Hide the button on Sundays
    $('#thankyou_main_text').hide();
}

//End of call text Enablement 

    // Background video playing script
    $(document).ready(function () {
        callnowEnablement();
        //set timing for call now button
        setTimeout(function() {
            // Enable link after form is loaded
            callnowEnablement();
          }, 1000); // Adjust timeout as needed
        
        //
        $(".player").mb_YTPlayer(
            {
                mobileFallbackImage: 'img/banner/banner-1.jpg'
            }
        );
    });

    // Multilevel menuus
    $('[data-submenu]').submenupicker();

    // Expending/Collapsing advance search content
    $('.show-more-options').on('click', function () {
        if ($(this).find('.fa').hasClass('fa-minus-circle')) {
            $(document).find('#options-content').addClass('show');
            $(this).find('.fa').removeClass('fa-minus-circle');
            $(this).find('.fa').addClass('fa-plus-circle');
        } else {
            $(document).find('#options-content').removeClass('show');
            $(this).find('.fa').removeClass('fa-plus-circle');
            $(this).find('.fa').addClass('fa-minus-circle');
        }
    });

    var videoWidth = $('.sidebar-widget').width();
    var videoHeight = videoWidth * .61;
    $('.sidebar-widget iframe').css('height', videoHeight);

    // Megamenu activation
    $(".megamenu").on("click", function (e) {
        e.stopPropagation();
    });

    // Dropdown activation
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    // Full  Page Search Activation
    $(function () {
        $('a[href="#full-page-search"]').on('click', function(event) {
            event.preventDefault();
            $('#full-page-search').addClass('open');
            $('#full-page-search > form > input[type="search"]').focus();
        });

        $('#full-page-search, #full-page-search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });
    });

    // Slick Sliders
    $('.slick-carousel').each(function () {
        var slider = $(this);
        $(this).slick({
            infinite: true,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0'
        });

        $(this).closest('.slick-slider-area').find('.slick-prev').on("click", function () {
            slider.slick('slickPrev');
        });
        $(this).closest('.slick-slider-area').find('.slick-next').on("click", function () {
            slider.slick('slickNext');
        });
    });

    $(".dropdown.btns .dropdown-toggle").on('click', function() {
        $(this).dropdown("toggle");
        return false;
    });

    // Dropzone initialization
    Dropzone.autoDiscover = false;
    $(function () {
        $("div#myDropZone").dropzone({
            url: "/file-upload"
        });
    });

    // Filterizr initialization
    $(function () {
        //$('.filtr-container').filterizr();
    });

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".fa")
            .toggleClass('fa-minus fa-plus');
    }

    $('.panel-group').on('shown.bs.collapse', toggleChevron);
    $('.panel-group').on('hidden.bs.collapse', toggleChevron);

    // Switching Color schema
    function populateColorPlates() {
        var plateStings = '<div class="option-panel option-panel-collased">\n' +
            '    <h2>Change Color</h2>\n' +
            '    <div class="color-plate default-plate" data-color="default"></div>\n' +
            '    <div class="color-plate midnight-blue-plate" data-color="midnight-blue"></div>\n' +
            '    <div class="color-plate yellow-plate" data-color="yellow"></div>\n' +
            '    <div class="color-plate blue-plate" data-color="blue"></div>\n' +
            '    <div class="color-plate green-light-plate" data-color="green-light"></div>\n' +
            '    <div class="color-plate yellow-light-plate" data-color="yellow-light"></div>\n' +
            '    <div class="color-plate green-plate" data-color="green"></div>\n' +
            '    <div class="color-plate green-light-2-plate" data-color="green-light-2"></div>\n' +
            '    <div class="color-plate red-plate" data-color="red"></div>\n' +
            '    <div class="color-plate purple-plate" data-color="purple"></div>\n' +
            '    <div class="color-plate brown-plate" data-color="brown"></div>\n' +
            '    <div class="color-plate olive-plate" data-color="olive"></div>\n' +
            '    <div class="setting-button">\n' +
            '        <a id="scroll_call_link" href="tel:+1781 755 8400" ><i class="fa fa-phone"></i></a>\n' +
            '    </div>\n' +
            '</div>';
    
        var currentTime = new Date();
        var timeZone = currentTime.toLocaleString('en-US', {timeZone: 'America/New_York'});
        var currentHour = new Date(timeZone).getHours();
    
        // Show the button only if the current hour is between 9 AM and 5 PM in New York time
        if (currentHour >= 1 && currentHour < 24) {
            $('body').append(plateStings);
        }
    }
    
    // Call the function
    populateColorPlates();
    
    $(document).on('click', '.color-plate', function () {
        var name = $(this).attr('data-color');
        $('link[id="style_sheet"]').attr('href', 'css/skins/' + name + '.css');
    });

    $(document).on('click', 'setting-button', function () {
        $('.option-panel').toggleClass('option-panel-collased');
    });
});

// Apply Select2 to dropdown
$(document).ready(function() {
    $('#year').select2();
    $('#make').select2();
    $('#model').select2();
    $('#part').select2();

    // mobile
    $('#yearphone').select2();
    $('#makephone').select2();
    $('#modelphone').select2();
    $('#partphone').select2();
  });

// mCustomScrollbar initialization
(function ($) {
    $(window).resize(function () {
        $('#map').css('height', $(this).height() - 110);
        if ($(this).width() > 768) {
            $(".map-content-sidebar").mCustomScrollbar(
                {theme: "minimal-dark"}
            );
            $('.map-content-sidebar').css('height', $(this).height() - 110);
        } else {
            $('.map-content-sidebar').mCustomScrollbar("destroy"); //destroy scrollbar
            $('.map-content-sidebar').css('height', '100%');
        }
    }).trigger("resize");
})(jQuery);




function getdetails(event) {
    var vin = document.getElementById('vinnumber').value;
    fetch('https://wp.assrsolutions.com/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': `application/x-www-form-urlencoded`
      },
      body : 'vin='+vin,
    })
    .then((response) => response.json() )
    .then((result) => { 
      selectyear(result.year.toString().trim());
      selectmake(result.make.toString().trim());
      selectmodel(result.model.toString().trim());
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
    }

    function selectyear(year) {
    var dropdown = document.getElementById("year");
    var optionToSelect = year;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
    }

    function selectmake(make) {
    var dropdown = document.getElementById("make");
    var optionToSelect = make;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
    }

    function selectmodel(model) {
    var dropdown = document.getElementById("model");
    var optionToSelect = model;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
}

function getdetailsphone(event) {
    var vin = document.getElementById('vinnumberphone').value;
    fetch('https://wp.assrsolutions.com/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': `application/x-www-form-urlencoded`
      },
      body : 'vin='+vin,
    })
    .then((response) => response.json() )
    .then((result) => { 
        if (result.year) {
            selectyearphone(result.year.toString().trim());
        }
    //   selectyearphone(result.year.toString().trim());
    //   selectmakephone(result.make.toString().trim());
      if (result.make) {
        selectyearphone(result.make.toString().trim());
        }
    //   selectmodelphone(result.model.toString().trim());
      if (result.model) {
        selectyearphone(result.model.toString().trim());
        }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
    }

    function selectyearphone(year) {
    var dropdown = document.getElementById("yearphone");
    var optionToSelect = year;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
    }

    function selectmakephone(make) {
    var dropdown = document.getElementById("makephone");
    var optionToSelect = make;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
    }

    function selectmodelphone(model) {
    var dropdown = document.getElementById("modelphone");
    var optionToSelect = model;
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === optionToSelect) {
        dropdown.options[i].selected = true;
        break;
      }
    }
}


// window.onload = () =>{
//     fetch('js/car-list.json')
//     .then(response => response.json())
//     .then(data => {
//       var temp = "<option value='' >Select Make</option>";
//       data.forEach((item) =>{
//         temp += '<option value="'+ item.brand +'" >'+ item.brand +'</option>';
//       });
//       document.getElementById('make').innerHTML = temp;
//       document.getElementById('makephone').innerHTML = temp;
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
//     }

//     const model = document.getElementById('make').addEventListener("change", function() {
//     const make = document.getElementById('make').value ;
//     fetch('js/car-list.json')
//     .then(response => response.json())
//     .then(data => {
//       var modelstemp = "<option value='' >Select Model</option>";
//       data.forEach((item) =>{
//         if(item.brand === make){
//           item.models.forEach((modelitem) =>{
//             modelstemp += '<option value="'+ modelitem +'" >'+ modelitem +'</option>';
//           })
//         }
//       });
//       document.getElementById('model').innerHTML = modelstemp;
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
//     });

//     const makephone = document.getElementById('makephone').addEventListener("change", function() {
//     const makephone = document.getElementById('makephone').value ;
//     fetch('js/car-list.json')
//     .then(response => response.json())
//     .then(data => {
//       var modeltemp = "<option value='' >Select Model</option>";
//       data.forEach((item) =>{
//         if(item.brand === makephone){
//           item.models.forEach((modelitem) =>{
//             modeltemp += '<option value="'+ modelitem +'" >'+ modelitem +'</option>';
//           })
//         }
//       });
//       document.getElementById('modelphone').innerHTML = modeltemp;
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// });

function validatePhoneNumber(phoneNumber) {
    // Regular expression pattern for phone numbers
    
    var pattern = /^(\+\d{1}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    // Check if the phone number matches the pattern
    
    return pattern.test(phoneNumber);
}

function findpart(){
    const vinnumber = document.getElementById('vinnumber').value;
    const year = document.getElementById('year').value;
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const part = document.getElementById('part').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactnumber = document.getElementById('contactnumber').value;
    const URL = window.location.href;
    email_validation = isValidEmail(email)
    $('#select2-year-container').css('border', '');
            $('#select2-make-container').css('border', '');
            $('#select2-model-container').css('border', '');
            $('#name').css('border', '');
            $('#email').css('border', '');
            $('#contactnumber').css('border', '');
    
    if (!vinnumber || !year || !make || !model || !part || !contactnumber) {
        document.getElementById('errorAlert').style.display = 'block';
    } else {
        document.getElementById('errorAlert').style.display = 'none';
        // Submit the form
        // this.submit();
    }
    
    if(document.getElementById('year').value === ''){
        $('#select2-year-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#year').focus(); // Focus on the select box
        
    }else if(document.getElementById('make').value === ''){
       
        
        $('#select2-make-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#make').focus();
    }else if(document.getElementById('model').value === ''){
        
        $('#select2-model-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#model').focus();
        
    }
    // else if(document.getElementById('name').value === ''){
    //     $('#name').css('border', '1px solid red');
    //     $('#name').focus();
        
    // }
    else if(document.getElementById('email').value === ''||email_validation==false){
        $('#email').css('border', '1px solid red');
        $('#email').focus();
        
    }
    else if(document.getElementById('contactnumber').value === ''){
        $('#contactnumber').css('border', '1px solid red');
        $('#contactnumber').focus();
       
    }
    
    else{
        document.getElementById('contactnumber').style.border = '1px solid #ced4da';

        var test_result = validatePhoneNumber(contactnumber);
        if (test_result==true){

            //new code from asif

            const data = {
                year : year,
                make : make,
                model :model,
                part : part,
                vinnumber : vinnumber,
                name : name,
                email : email,
                contactnumber : contactnumber,
                URL : URL
            }


            fetch('https://rtsusedtransmission.com/optimal.php', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json charset=utf-8',
                },
                body: JSON.stringify(data),
            })
            .then(function(response){ return response.json()})
            .then(function(data){
                if(data.message == '1'){
                    console.log(data);
                    console.log(data.message);
                    document.getElementById('vinnumber').value='';
                    document.getElementById('name').value='';
                    document.getElementById('email').value='';
                    document.getElementById('contactnumber').value='';
                    
                     window.location.href='thank-you.html';
                }
            })
                  
        

        }else{
            alert('Please enter valid phone number !')
        }  
    }

}

function isValidEmail(email) {
    // Regular expression for validating email addresses
    var emailRegex = /^((?!\.{5}[\s.]{4})([^\s]+@[^\s]+(\.[^\s]+)+))$/;
    return emailRegex.test(email);
}

function findpartphone() {
    const vinnumber = document.getElementById('vinnumberphone').value;
    const year = document.getElementById('yearphone').value;
    const make = document.getElementById('makephone').value;
    const model = document.getElementById('modelphone').value;
    const part = document.getElementById('partphone').value;
    const name = document.getElementById('namephone').value;
    const email = document.getElementById('emailphone').value;
    const contactnumber = document.getElementById('contactnumberphone').value;
    const URL = window.location.href;

            $('#select2-yearphone-container').css('border', '');
            $('#select2-makephone-container').css('border', '');
            $('#select2-modelphone-container').css('border', '');
            $('#namephone').css('border', '');
            $('#emailphone').css('border', '');
            $('#contactnumberphone').css('border', '');

    email_validation = isValidEmail(email)

    
    
    if (!vinnumber || !yearphone || !makephone || !modelphone || !partphone || !contactnumberphone) {
        
        document.getElementById('errorAlertphone').style.display = 'block';
    } else {
        document.getElementById('errorAlertphone').style.display = 'none';
        // Submit the form
        // this.submit;
    }

    if(document.getElementById('yearphone').value === ''){
        $('#select2-yearphone-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#yearphone').focus(); // Focus on the select box
        
    }

    else if(document.getElementById('makephone').value === ''){
        $('#select2-makephone-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#makephone').focus(); // Focus on the select box
    }
    else if(document.getElementById('modelphone').value === ''){
        $('#select2-modelphone-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#modelphone').focus(); // Focus on the select box
            
    }

    else if(document.getElementById('partphone').value === ''){
        $('#select2-partphone-container').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#makephone').focus(); // Focus on the select box
    }
    // else if(document.getElementById('namephone').value === ''){
    //     $('#namephone').css('border', '1px solid red');
    //     $('#namephone').focus();
        
    // }
    else if(document.getElementById('emailphone').value === ''||email_validation==false){
        $('#emailphone').css('border', '1px solid red');
        $('#emailphone').focus();
        
    }
    else if(document.getElementById('contactnumberphone').value === ''){
        $('#contactnumberphone').css('border', '1px solid red'); // Highlight the select box with a red border
        $('#contactnumberphone').focus(); // Focus on the select box
        
    }
  
    else{
        document.getElementById('contactnumberphone').style.border = '1px solid #ced4da';

        var test_result = validatePhoneNumber(contactnumber);
        if (test_result==true){

            const data = {
                year : year,
                make : make,
                model :model,
                part : part,
                vinnumber : vinnumber,
                name : name,
                email : email,
                contactnumber : contactnumber,
                URL : URL
            }
            //https://rtsusedtransmission.com/testoptimal.php'
            fetch('https://rtsusedtransmission.com/optimal.php', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json charset=utf-8',
                },
                body: JSON.stringify(data),
            })
            .then(function(response){ return response.json()})
            .then(function(data){
                if(data.message == '1'){
                    console.log(data);
                    console.log(data.message);
                    document.getElementById('vinnumber').value='';
                    document.getElementById('name').value='';
                    document.getElementById('email').value='';
                    document.getElementById('contactnumber').value='';
                    
                     window.location.href='thank-you.html';
                }
            })
            .catch(error => console.error('Error:', error));


            
        
        // fetch('https://rtsusedtransmission.com/optimal.php', {
        //     method: 'POST',
        //     headers: {
        //       'Content-type': 'application/x-www-form-urlencoded',
        //     },
        //     body: 'year='+ year + '&make=' + make + '&model=' + model + '&part=' + part + '&vinnumber=' + vinnumber + '&name=' + name + '&email=' + email + '&contactnumber=' + contactnumber +'&URL='+ URL
        // })
        // .then(function(response){ return response.json()})
        // .then(function(data){
        //     if(data.message == '1'){
        //         document.getElementById('vinnumberphone').value='';
        //         document.getElementById('namephone').value='';
        //         document.getElementById('emailphone').value='';
        //         document.getElementById('contactnumberphone').value='';
        //          window.location.href='thank-you.html';
                
        //     }
        // })
        // .catch(error => console.error('Error:', error));
        
    }

    else{
        alert('Please enter valid phone number !')
    }
}
}

window.onload = () => {

    function getURLParameters() {
      var queryString = window.location.search.slice(1);
      var parameters = {};
      if (queryString) {
        var pairs = queryString.split('&');
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          var key = decodeURIComponent(pair[0]);
          var value = decodeURIComponent(pair[1] || '');
          parameters[key] = value;
        }
      }
      return parameters;
    }
    var params = getURLParameters();

    const bannertitle = params['title'].replace(/Optimal AutoParts - /g, '');

    document.getElementById('bannertitle').innerHTML = bannertitle;

    document.getElementById('title').innerHTML = params['title'];

    document.getElementById('heading').innerHTML = params['heading'];
 
    document.getElementById('content').innerHTML = params['content'];
}

var modeldata = [{"make": "Acura", "models": ["CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TLX", "TSX", "Vigor", "ZDX"]},{"make": "AMC", "models": ["Ambassador", "American", "AMX", "Classic", "Concord", "Eagle", "Gremlin", "Hornet", "Javelin", "Marlin", "Matador", "Pacer", "Rambler", "Rebel", "Spirit", "Other"]},{"make": "Alfa", "models": ["147", "164 Sedan", "1750", "4C", "Alfetta", "GTV6", "Giulia", "Giulia 1600", "Giulietta", "Milano", "Mito", "Spider-1600", "Spider-1600 Duetto", "Spider-2000", "Stelvio"]},{"make": "Aston Martin", "models": ["DB11", "Rapide", "Vantage"]},{"make": "Asuna", "models": ["Sunfire", "Sunrunner", "SE/GT"]},{"make": "Audi", "models": ["100", "200", "4000 2 & 4 Door Sedan", "4000 Quattro", "5000 & 5000 Quattro", "80 Series", "90 Series", "A3", "A4", "A5", "A6", "A7", "A8", "AllRoad", "Cabriolet", "Coupe GT", "Coupe Quattro", "Fox", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "Sport Coupe", "Super 90", "TT", "V8 Quattro"]},{"make": "Austin", "models": ["Mini"]},{"make": "Autocar", "models": ["Any"]},{"make": "Avanti", "models": ["DC Avanti"]},{"make": "Bentley", "models": ["Bentayga", "Mulsanne", "Continental GT"]},{"make": "BMW", "models": ["1M", "128i", "135i", "1602", "1800", "228i", "230i", "2002", "2500", "2800", "3.0", "318i", "320i", "323i", "325e", "325i", "328i", "328i GT", "330e", "330i", "330i GT", "335i", "335i GT", "340i", "340i GT", "428i", "430i", "435i", "440i", "524TD", "525i", "528e", "528i", "530e", "530i", "533i", "535i", "535i GT", "540i", "545i", "550i", "550i GT", "630CSi", "633CSi", "635CSi", "640i", "640i GT", "645Ci", "650i", "728", "732", "733i", "735i", "740e", "740i", "745i", "750i", "760i", "840i", "850i", "ActiveE", "ActiveHybrid 3", "ActiveHybrid 5", "ActiveHybrid 7", "Alpina B6", "Alpina B7", "I3", "I8", "L6", "M1", "M2", "M3", "M4", "M5", "M6", "M235i", "M240i", "M550i", "M760i", "M850i", "X1", "X2", "X3", "X4", "X5", "X5M", "X6", "X6M", "Z3", "Z4", "Z8", "Other"]},{"make": "Bricklin", "models": ["SV-1"]},{"make": "Brockway", "models": ["Any"]},{"make": "Buick", "models": ["Allure", "Apollo", "Cascada", "Century", "Electra (1979 Down)", "Electra (1980 Up)", "Enclave", "Encore", "Envision", "Lacrosse", "LeSabre (1979 Down)", "LeSabre (1980 Up)", "Limited", "Lucerne", "Park Ave (1979 Down)", "Park Ave (1980 Up)", "Rainier", "Reatta", "Regal", "Regal Somerset (1984 Down)", "Rendezvous", "Riviera", "Roadmaster (1979 Down)", "Roadmaster (1980 Up)", "Skyhawk", "Skylark", "Somerset (1985 Up)", "Special", "Terraza", "Verano", "Other"]},{"make": "Cadillac", "models": ["Allante", "ATS", "Brougham", "CT6", "CTS", "Catera", "Cimarron", "Concours", "DeVille (1979 Down)", "DeVille (1980 Up)", "DHS", "DTS (2005 Down)", "DTS (2006 Up)", "ELR", "Eldorado (1966 Down)", "Eldorado (1967 Up)", "Escalade", "Escalade-ESV", "Escalade-EXT", "Fleetwood (1979 Down)", "Fleetwood (1980 Up)", "Seville (incl STS)", "SRX", "STS", "XLR", "XT4", "XT5", "XTS", "Other"]},{"make": "Checker", "models": ["Cab"]},{"make": "Chevy", "models": ["Astra", "Astro", "Aveo", "Beretta", "Blazer, Full Size (1994 Down)", "Blazer (2019 Up)", "Blazer, S10/S15", "Bolt", "C2", "Camaro", "Caprice (1979 Down)", "Caprice (1980 Up)", "Captiva Sport", "Cavalier", "Celebrity", "Chevelle", "Chevette", "Chevy Pickup FWD (Non US Mkt)", "Chevy Small Car (Non US Mkt)", "Citation", "City Express", "Cobalt", "Corsa", "Corsica", "Corvair", "Corvette", "Cruze", "El Camino (1963 Down)", "El Camino (1964-1977)", "El Camino (1978 Up)", "Epica", "Equinox", "HHR", "Impala (1979 Down)", "Impala (1980 Up)", "Lumina Car", "Lumina Van", "Luv (See Also Isuzu Mini P-Up)", "Malibu", "Meriva", "Metro", "Monte Carlo", "Monza", "Nova & Chevy II (1967 Down)", "Nova (1968 Up)", "Optra", "Orlando", "Prizm", "S10/S15/Sonoma", "Sonic", "Spark", "Spectrum", "Sprint", "SS", "SSR", "Suburban-10 (1988 Down)", "Suburban-20 (1988 Down)", "Suburban-30 (1966 Down)", "Suburban-1000 (1963-1966)", "Suburban-1500", "Suburban-2500 (1967 Up)", "Suburban-3500", "Tahoe", "Tigra", "Tornado", "Tracker", "TrailBlazer", "TrailBlazer-EXT", "Traverse", "Trax", "Truck-10 Series (1987 Down)", "Truck-20 Series (1988 Down)", "Truck-30 Series (1988 Down)", "Truck-1500 Series (1988-1999)", "Truck-2500 Series (1988-2000)", "Truck-3500 Series (1988-2001)", "Truck-Avalanche 1500", "Truck-Avalanche 2500", "Truck-C3100", "Truck-C3600", "Truck-C3800", "Truck-Colorado", "Truck-Forward Control", "Truck-Kodiak", "Truck-Luv Mini Pup", "Truck-S10/S15/Sonoma", "Truck-Silverado 1500 (1999 Up)", "Truck-Silverado 2500 (1999 Up)", "Truck-Silverado 3500 (2001 Up)", "Truck-Tilt Cab", "Uplander", "Van 10", "Van 20", "Van 30", "Van Express 1500", "Van Express 2500", "Van Express 3500", "Vectra", "Vega", "Venture", "Volt", "Zafira", "Other"]},{"make": "Chrysler", "models": ["200", "300", "300M", "Aspen", "Atos", "Attitude", "Cirrus", "Concorde", "Conquest", "Cordoba", "Crossfire", "E Class", "Fifth Avenue - FWD", "Fifth Avenue - RWD (1979 Up)", "Imperial", "LHS", "Laser", "Lebaron", "New Yorker - FWD", "New Yorker - RWD", "Newport", "Pacifica", "Prowler", "PT Cruiser", "Sebring", "TC", "Town and Country", "Voyager", "Other"]},{"make": "Citroen", "models": ["Any"]},{"make": "Daewoo", "models": ["Lanos", "Leganza", "Nubira"]},{"make": "Daihatsu", "models": ["Charade", "Hijet", "Rocky"]},{"make": "Delorean", "models": ["Any"]},{"make": "Desoto", "models": ["Any"]},{"make": "Diamond", "models": ["Reo"]},{"make": "Dodge", "models": ["400", "600", "Aries", "Aspen", "Avenger", "Caliber", "Caravan", "Challenger (Chrysler)", "Challenger (Mitsubishi)", "Charger", "Colt-not Vista", "Colt Vista", "Cricket", "D50/Ram 50 (See also Plymouth Arrow Truck)", "Dakota", "Dart", "Daytona", "Diplomat", "Durango", "Dynasty", "Intrepid", "Journey", "Lancer", "Magnum", "Mirada", "Monaco (1978 Down)", "Monaco (1990 Up)", "Neon", "Nitro", "Omni", "Promaster 1500", "Promaster 2500", "Promaster 3500", "Raider", "Ramcharger", "Rampage", "Shadow", "Spirit", "St Regis", "Stealth", "Stratus", "Truck-100 Series (1989 Down)", "Truck-200 Series (1980 Down)", "Truck-300 Series (1980 Down)", "Truck-400 Series", "Truck-150 (1978-1993)", "Truck-250 Series (1981-1993)", "Truck-350 Series (1981-1993)", "Truck-450 Series", "Truck-1500 (1994 Up)", "Truck-2500 Series (1994 Up)", "Truck-3500 (1994 Up)", "Truck-4500 Series", "Truck-5500 Series", "Truck-D50/Ram 50", "Truck-Dakota", "Truck-Forward Control", "Truck-Rampage", "Van 100", "Van 150", "Van 200", "Van 250", "Van 300", "Van 350", "Van 1500", "Van 2500", "Van 3500", "Van (Promaster City)", "Van (Sprinter 2500)", "Van (Sprinter 3500)", "Verna", "Viper", "Other"]},{"make": "Eagle", "models": ["2000 GTX", "Premier", "Summit", "Talon", "Vision"]},{"make": "Edsel", "models": ["Any"]},{"make": "FWD", "models": ["Trucks"]},{"make": "Ferrari", "models": ["Any"]},{"make": "Fiat", "models": ["1100R", "124 (1983 Down, includes Spider)", "124 Spider (2016 Up)", "128", "131/Brava", "500", "600", "850", "Spider (includes 2000)", "Strada", "X 1/9", "Other"]},{"make": "Fisker", "models": ["Karma"]},{"make": "Ford", "models": ["500", "Aerostar", "Aspire", "Bronco (Full Size)", "Bronco II", "C-Max", "Contour", "Cortina", "Courier", "Crown Vic (1982 Down)", "Crown Vic (1983 Up)", "Ecosport", "Edge", "Escape", "Escort", "Excursion", "EXP", "Expedition", "Explorer", "Fairlane", "Fairmont", "Falcon", "Festiva", "Fiesta", "Five Hundred", "Flex", "Focus", "Focus RS", "Freestar", "Freestyle", "Fusion", "Galaxie", "Granada", "GT", "Ikon", "KA", "LTD (1978 Down)", "LTD (1979 Up)", "LTD II", "Maverick", "Mondeo", "Mustang", "Pinto", "Probe", "Ranchero (1967-1970)", "Ranchero (1971-1976)", "Ranchero (1977 up)", "Ranchero (1957-1959)", "Ranchero (1960-1966)", "Ranger", "Taurus", "Taurus X", "Tempo", "ThinkCity-Electric", "Thunderbird", "Torino", "Transit 150", "Transit 250", "Transit 350", "Transit Connect", "Truck-Courier", "Truck-F100", "Truck-F150", "Truck-F150 Raptor", "Truck-F250 not Super Duty (1999 Down)", "Truck-F250 Super Duty (1999 Up)", "Truck-F350 not Super Duty (1997 Down)", "Truck-F350 Super Duty (1999 Up)", "Truck-F450 not Super Duty (1997 Down)", "Truck-F450 Super Duty (1999 Up)", "Truck-F550 Super Duty (1999 Up)", "Truck-Forward Control", "Truck-Ranger", "Van E100", "Van E150", "Van E200", "Van E250", "Van E300", "Van E350", "Van E450 Super Duty", "Van E550 Super Duty", "Windstar", "Other"]},{"make": "Freightliner", "models": ["Any"]},{"make": "Freuhauf", "models": ["Any"]},{"make": "GMC", "models": ["Acadia", "Jimmy, Full Size", "Jimmy, S10/S15", "Safari Van", "Sprint", "Suburban-10 (1988 Down)", "Suburban-20 (1988 Down)", "Suburban-30 (1965-1966)", "Suburban-1000 (1965-1966)", "Suburban-1500 (2001 Down)", "Suburban-2500 (1967 Up)", "Syclone", "Terrain", "Truck-1000 Series (1966 Down)", "Truck-1500 Series (1999 Down)", "Truck-2500 Series (2000 Down)", "Truck-3500 Series (2001 Down)", "Truck-Canyon", "Truck-Envoy", "Truck-Envoy XL", "Truck-Envoy XUV", "Truck-Forward Control", "Truck-S10/S15/Sonoma", "Truck-Sierra 1500 (1999 Up)", "Truck-Sierra 2500 (1999 Up)", "Truck-Sierra 3500 (2001 Up)", "Truck-Sierra Denali", "Truck-Sierra Denali 1500 (2011 Up)", "Truck-Sierra Denali 2500 (2011 Up)", "Truck-Sierra Denali 3500 (2011 Up)", "Truck-Topkick", "Truck-Yukon (except XL)", "Truck-Yukon XL1500", "Truck-Yukon XL2500", "Typhoon", "Van 1000", "Van 1500", "Van 2500", "Van 3500", "Van Savana 1500", "Van Savana 2500", "Van Savana 3500"]},{"make": "Genesis", "models": ["G70", "G80", "G90"]},{"make": "Geo", "models": ["Metro", "Prizm", "Spectrum", "Storm", "Tracker"]},{"make": "Hino", "models": ["Truck"]},{"make": "Honda", "models": ["600", "Accord", "Acty", "Civic", "Clarity", "Clarity Electric", "Crosstour", "CRV", "CRX", "CRZ", "DelSol", "Element", "FCX", "Fit", "HRV", "Insight", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S2000"]},{"make": "Hudson", "models": ["Any"]},{"make": "Hummer", "models": ["H1", "H2", "H3"]},{"make": "Hyundai", "models": ["Accent", "Azera", "Elantra", "Entourage", "Equus", "Excel", "Genesis", "Ioniq", "Kona", "Kona Electric", "Nexo", "Pony", "Santa Fe", "Scoupe", "Sonata", "Stellar", "Tiburon", "Tucson", "Veloster", "Veracruz", "XG Series"]},{"make": "IH", "models": ["(All except Scout)", "Scout & Scout II"]},{"make": "Infiniti", "models": ["EX35", "EX37", "FX", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "JX35", "M30", "M35", "M37", "M45", "M56", "Q40", "Q45", "Q50", "Q60", "Q70", "QX4", "QX30", "QX50", "QX56", "QX60", "QX70", "QX80"]},{"make": "Isuzu", "models": ["Amigo", "Ascender", "Axiom", "Gemini", "IMark", "Impulse", "Oasis", "Optima", "Reach", "Rodeo", "Stylus", "Trooper/Trooper II", "Truck (Big)", "Truck-(Mini Pickup)", "Truck-(Mini Pickup) Hombre", "Truck i280 (Pickup)", "Truck i290 (Pickup)", "Truck i350 (Pickup)", "Truck i370 (Pickup)", "Vehicross"]},{"make": "Jaguar", "models": ["120", "140", "150", "E Pace", "F Pace", "F Type", "I Pace", "Mark 10", "S Type", "Sedan", "Vanden Plas (1997 Down)", "Vanden Plas (1998 to 2007)", "Vanden Plas (2008 Up)", "X Type", "XE", "XF", "XJ Series (2008 Up)", "XJR (1993)", "XJR (1995 to 1997)", "XJR (1998 to 2007)", "XJR (2008 Up)", "XJS", "XJ6", "XJ8 (2008 Up)", "XJ8 (2007 Down)", "XJ12", "XK Series (2007 Up)", "XKE", "XKR (2006 Down)", "XKR (2007 Up)", "XK8"]},{"make": "Jeep", "models": ["Cherokee (except Grand Cherokee)", "CJSeries", "Comanche", "Commander", "Compass", "DJ Series", "FC Series", "Grand Cherokee", "Grand Wagoneer", "J-Series", "Jeepster", "Liberty", "Patriot", "Renegade", "Station Wagon", "Truck", "Wagoneer (except Grand Wagoneer)", "Wrangler"]},{"make": "Kaiser", "models": ["Any"]},{"make": "Kenworth", "models": ["Any"]},{"make": "Kia", "models": ["Amanti", "Besta", "Borrego", "Cadenza", "Forte", "K900", "Magentis", "Niro", "Optima", "Rio", "Rondo", "Sedona", "Sephia", "Sorento", "Soul", "Spectra", "Sportage", "Stinger"]},{"make": "Lada", "models": ["Any"]},{"make": "Lamborghini", "models": ["Any"]},{"make": "Lancia", "models": ["Any"]},{"make": "LandRover", "models": ["Defender", "Discovery (2004 Down)", "Discovery (2017 Up)", "Discovery Sport", "Freelander", "LR2", "LR3", "LR4", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Other"]},{"make": "Lexus", "models": ["250ES", "CT 200H", "ES300", "ES300H", "ES330", "ES350", "GS200t", "GS300", "GS350", "GS400", "GS430", "GS450", "GS460", "GS F", "GX460", "GX470", "HS250H", "IS200t", "IS250", "IS300", "IS350", "IS F", "LC500", "LC500h", "LFA", "LS400", "LS430", "LS460", "LS500", "LS500h", "LS600HL", "LX450", "LX470", "LX570", "NX200t", "NX300", "NX300h", "RC 200t", "RC 300", "RC 350", "RC F", "RX300", "RX330", "RX350", "RX400h", "RX450 Hybrid", "SC (excl 430)", "SC430", "UX 200", "UX 250h"]},{"make": "Lincoln", "models": ["Aviator", "Blackwood", "Continental", "LS", "Mark LT", "Mark Series", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Versailles", "Zephyr", "Other (includes Town Car)"]},{"make": "Lotus", "models": ["Elise", "Exige", "Evora", "Other"]},{"make": "MG", "models": ["MGB", "Midget", "Other"]},{"make": "Mac", "models": ["Any"]},{"make": "Marmon", "models": ["Truck"]},{"make": "Maserati", "models": ["BiTurbo", "Ghibli"]},{"make": "Maybach", "models": ["Any"]},{"make": "Mazda", "models": ["2", "3", "5", "6", "323", "626", "808", "929", "1200", "1800", "Cosmo", "CX3", "CX5", "CX7", "CX9", "GLC", "MPV Van", "MX3", "MX6", "Miata MX5", "Millenia", "Navajo", "Pickup-B1600", "Pickup-B1800", "Pickup-B2000", "Pickup-B2200", "Pickup-B2300", "Pickup-B2500", "Pickup-B2600", "Pickup-B3000", "Pickup-B4000", "Pickup-Rotary", "Protege", "RX2", "RX3", "RX4", "RX7", "RX8", "Tribute"]},{"make": "Mercedes", "models": ["170", "190", "200", "218", "219", "220", "230-4 Cyl", "230-6 Cyl", "240D", "250", "260E", "280", "300D (includes CD/D/SD/TD)", "300E", "300SL", "320", "350", "380", "400", "420", "450", "500", "560", "600", "AMG GT", "B Class", "C Class", "CL Class", "CLA Class", "CLK", "CLS", "E Class", "G Class", "GL Class", "GLA Class", "GLC Class", "GLE Class", "GLK Class", "GLS Class", "ML Series", "Metris", "R Class", "S Class", "SL Class", "SLC Class", "SLK", "SLR", "SLS", "Sprinter 2500", "Sprinter 3500", "Truck"]},{"make": "Mercury", "models": ["Bobcat", "Capri", "Comet", "Cougar", "Grand Marquis (1979 Down)", "Grand Marquis (1980 Up)", "LN7", "Lynx (except LN7)", "Marauder", "Mariner", "Marquis (not Grand)", "Merkur (includes XR4TI and Scorpio)", "Milan", "Monarch", "Montego", "Monterey", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager", "Zephyr", "Other"]},{"make": "Mini", "models": ["(Austin)", "Cooper", "Cooper Clubman", "Cooper Countryman", "Cooper Paceman"]},{"make": "Mitsubishi", "models": ["3000", "Cordia", "Diamante", "Eclipse", "Endeavor", "Expo", "Fuso", "Galant", "i MiEV", "Lancer", "Minicab", "Mirage", "Montero", "Montero-Sport", "Outlander", "Pickup (See also Dodge D50)", "Precis", "Raider", "RVR", "Sigma", "Space Wagon", "Starion", "Tredia", "Van"]},{"make": "Morris", "models": ["Any"]},{"make": "Nash", "models": ["Any"]},{"make": "Nissan", "models": ["1200", "1600", "200SX", "210", "240SX", "240Z", "260Z", "280-Z", "280-ZX", "300ZX", "350Z", "370Z", "310", "311", "410", "411", "510", "610", "710", "810", "Almera", "Altima", "Armada", "Axxess", "B210", "Cube", "F10", "Frontier", "GTR", "Juke", "Kicks", "Leaf", "Lucino", "Maxima (1981 Down)", "Maxima (1982 Up)", "Micra", "Murano", "NV 200", "NV 1500", "NV 2500", "NV 3500", "NX", "Pathfinder", "Patrol", "Platina", "Pulsar", "Qashqai", "Quest", "Rogue", "Rogue Sport", "Sentra", "Stanza (Excl Van)", "Stanza Van", "Tida", "Truck", "Truck-Titan", "Truck-Titan XD", "Tsubame", "UD Series", "Van GC22", "Versa", "X Trail", "Xterra"]},{"make": "Oldsmobile", "models": ["88 (1979 Down)", "88 (1980 Up)", "98 (1979 Down)", "98 (1980 Up)", "Achieva", "Alero", "Aurora", "Bravada", "Calais (1984 Down)", "Calais (1985 Up)", "Ciera", "Custom Cruiser (1979 Down)", "Custom Cruiser (1980 Up)", "Cutlass (1972 Down)", "Cutlass (1973 Up)", "F85", "Firenza", "Intrigue", "Omega", "Silhouette", "Starfire", "Supreme-Calais (1988 Up)", "Supreme-Cutlass (1988 Up)", "Supreme (1972 Down)", "Supreme (1973-1987)", "Toronado", "Other"]},{"make": "Opel", "models": ["Vauxhall", "Mokka", "Grandland", "Corsa"]},{"make": "Oshkosh", "models": ["Any"]},{"make": "Pace", "models": ["Arrow"]},{"make": "Packard", "models": ["Any"]},{"make": "Pantera", "models": ["Any"]},{"make": "Peterbilt", "models": ["Any"]},{"make": "Peugeot", "models": ["304", "403", "404", "405", "504", "505", "604"]},{"make": "Plymouth", "models": ["Acclaim", "Arrow-Car", "Arrow-Truck (See also Dodge D50)", "Barracuda", "Breeze", "Caravelle", "Champ", "Cricket", "Duster (1970-1976)", "Duster (1979-1980)", "Duster (1985-1987)", "Duster (1992-1994)", "Grand Fury (1979 Down)", "Grand Fury (1980 Up)", "Horizon", "Laser", "Neon", "Prowler", "Reliant", "Sapporo", "Scamp (1983 only)", "Scamp (except 1983)", "Sundance", "Trailduster", "Valiant", "Van 100", "Van 150", "Van 200", "Van 250", "Van 300", "Van 350", "Volare", "Voyager", "Other"]},{"make": "Pontiac", "models": ["1000", "2000-P/J/Sunbird", "6000", "Acadian", "Astre", "Aztek", "Bonneville (1979 Down)", "Bonneville (1980 Up)", "Catalina (1979 Down)", "Catalina (1980 Up)", "Fiero", "Firebird", "Firefly", "G3", "G4", "G5", "G6", "G8", "Grand AM", "Grand Prix", "GTO (New Style)", "GTO (Old Style)", "Lemans", "Matiz", "Montana", "Parisienne (1979 Down)", "Parisienne (1980 Up)", "Phoenix", "Pursuit", "Solstice", "Sunbird", "Sunburst", "Sunfire", "Sunrunner", "Tempest", "Torrent", "Trans Sport", "Van-Montana", "Ventura", "Vibe", "Wave", "Other"]},{"make": "Porsche", "models": ["356", "911/930", "912/e", "914", "918", "924", "928", "944", "968", "Boxster", "Carrera-GT", "Cayenne", "Cayman S", "Macan", "Panamera"]},{"make": "Renault", "models": ["18I", "Alliance", "Clio", "Dauphine", "Encore", "Fuego", "Gordini", "Lecar/R5", "Medallion", "Megane", "R8", "R10", "R12", "R15", "R16", "R17", "R30", "Other"]},{"make": "REO", "models": ["Any"]},{"make": "RollsRoyce", "models": ["Any"]},{"make": "Rover", "models": ["3 Litre", "100", "2000", "3500", "3500S"]},{"make": "Saab", "models": ["9-3 (1999 Up)", "9-5 (1999 Up)", "92x", "93 (1960 Down)", "94x", "95 (1972 Down)", "96", "97x", "99", "900 (incl Turbo)", "9000 (incl Turbo)", "Monte Carlo", "Sonett", "Sonett III"]},{"make": "Saturn", "models": ["Astra", "Aura", "EV1", "Ion", "L Series", "S Series", "Outlook", "Relay", "Sky", "Vue"]},{"make": "Scion", "models": ["FRS", "iA", "iM", "iQ", "tC", "xA", "xB", "xD"]},{"make": "Seat", "models": ["Cordova", "Ibiza", "Leon", "Toledo"]},{"make": "Simca", "models": ["Any"]},{"make": "Smart", "models": ["Fortwo"]},{"make": "SterlingRover", "models": ["Any"]},{"make": "Studebaker", "models": ["Any"]},{"make": "Subaru", "models": ["Ascent", "Baja", "Brat", "BRZ", "Chaser", "Crosstrek", "Forester", "Impreza", "Justy", "Legacy", "Loyale", "Outback (Impreza)", "Outback (Legacy)", "Sambar", "Streega", "SVX", "Tribeca", "WRX (2014 Down)", "WRX (2015 Up)", "XT", "XV Crosstrek", "Other"]},{"make": "Sunbeam", "models": ["Any"]},{"make": "Suzuki", "models": ["Aerio", "Carry", "Esteem", "Equator", "Forenza", "Forsa", "Kizashi", "Reno", "Samurai", "Sidekick", "SJ410", "Swift", "SX4", "Verona", "Vitara", "X90", "XL7"]},{"make": "Tesla", "models": ["Model 3", "Roadster", "S", "X"]},{"make": "Thomas", "models": ["Truck"]},{"make": "Toyota", "models": ["86", "4Runner", "Aristo", "Avalon", "CHR", "Camry", "Carina", "Celica", "Corolla", "Corolla iM", "Corolla FX/FX16", "Corona MKII", "Corona not MKII", "Cressida", "Crown", "Echo", "FJ Cruiser", "FX/FX16", "HiAce", "Highlander", "Land Cruiser", "Matrix", "Mirai", "MR2", "Paseo", "Previa", "Prius", "RAV4", "Sequoia", "Sienna", "Solara", "Starlet", "Stout", "Supra", "T100", "Tacoma", "Tercel", "Truck (except T100 &amp; Tundra)", "Tundra", "Van (See also Previa)", "Venza", "Yaris", "Yaris iA"]},{"make": "Triumph", "models": ["GT6", "Spitfire", "Stag", "TR2", "TR3", "TR4", "TR4A", "TR6", "TR7", "TR8", "TR250"]},{"make": "Utilimaster", "models": ["Step Van"]},{"make": "Volkswagen", "models": ["412/411", "Arteon", "Atlas", "Beetle/Bug", "Cabrio", "Cabriolet", "CC", "Corrado", "Dasher", "Derby", "Eos", "Fox", "Golf", "Golf GTI", "Jetta", "Jetta GLI", "Karmann Ghia", "Passat", "Phaeton", "Pointer", "Pointer Truck", "Quantum", "Rabbit", "Routan", "Scirocco", "Sedan", "Sharan", "Thing", "Tiguan", "Touareg", "Type 3", "Van-EuroVan", "Van-Transporter", "Van-Vanagon", "Other"]},{"make": "Volvo", "models": ["30 Series", "40 Series", "50 Series", "60 Series", "70 Series", "80 Series", "90 Series", "120 Series", "140 Series", "160 Series", "240", "260", "444/445", "544", "740", "760", "780", "850", "940", "960", "1800", "F7", "FE6", "S60", "S90", "Truck", "V60", "V90", "XC40", "XC60 (2013 Down)", "XC60 (2014 Up)", "XC70", "XC90"]},{"make": "VPG", "models": ["Any"]},{"make": "Western Star", "models": ["Any"]},{"make": "White", "models": ["Any"]},{"make": "Willys", "models": ["Any"]},{"make": "Winnebago", "models": ["Any"]},{"make": "Yugo", "models": ["Any"]}];
      
document.getElementById("make").onchange = function() {
    
var make = document.getElementById("make").value;
var modelstemp = "<option value='' >Select Model</option>";
modeldata.forEach((item) => {
  if(item.make == make){
    item.models.forEach((modelitem) => {
      modelstemp += '<option value="'+ modelitem +'" >'+ modelitem +'</option>';
    });
  }
});
document.getElementById('model').innerHTML = modelstemp;
};





document.getElementById("makephone").onchange = function() {
var make = document.getElementById("makephone").value;
var modelstemp = "<option value='' >Select Model</option>";
modeldata.forEach((item) => {
  if(item.make == make){
    item.models.forEach((modelitem) => {
      modelstemp += '<option value="'+ modelitem +'" >'+ modelitem +'</option>';
    });
  }
});

document.getElementById('modelphone').innerHTML = modelstemp;

};




// prevent-inspect

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });
// document.onkeydown = function(e) {
//     if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 117)) {
//         return false;
//     }
// };

//test
document.getElementById("make2").onchange = function() {
    alert('test')
    var make = document.getElementById("make2").value;
    var modelstemp = "<option value='' >Select Model</option>";
    modeldata.forEach((item) => {
      if(item.make == make){
        item.models.forEach((modelitem) => {
          modelstemp += '<option value="'+ modelitem +'" >'+ modelitem +'</option>';
        });
      }
    });
    document.getElementById('model').innerHTML = modelstemp;
    };
//end of test



