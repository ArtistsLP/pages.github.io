$(document).ready(function () {
    function timer(container, days, hours, minutes, seconds) {
        const timerElement = $(container);
        const targetDate = new Date(timerElement.attr('data-date')).getTime();
        const daysElement = $(days);
        const hoursElement = $(hours);
        const minutesElement = $(minutes);
        const secondsElement = $(seconds);
    
        function updateTimer() {
            const now = new Date().getTime();
            const distance = targetDate - now;
    
            if (distance < 0) {
                clearInterval(interval);
                daysElement.text('00');
                hoursElement.text('00');
                minutesElement.text('00');
                secondsElement.text('00');
                return;
            }
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            daysElement.text(String(days).padStart(2, '0'));
            hoursElement.text(String(hours).padStart(2, '0'));
            minutesElement.text(String(minutes).padStart(2, '0'));
            secondsElement.text(String(seconds).padStart(2, '0'));
        }
    
        const interval = setInterval(updateTimer, 1000);
        updateTimer(); // initial call to display the countdown immediately
    }
    
    if($('#timer').length) {
        timer('#timer', '#days', '#hours', '#minutes', '#seconds');
    }
    if($('#timer2').length) {
        timer('#timer2', '#days2', '#hours2', '#minutes2', '#seconds2');
    } 
    
    if($('.swiper').length) {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                },
                576: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 3.2,
                },
                992: {
                    slidesPerView: 4,
                }
            }
        });
    }


    // faq 
    if($('.faq').length) {
        $('.faq-question').on('click', function() { 
            $(this).parent().toggleClass('active'); 
        });
    }

    // header fixed
    $(window).on('scroll', function() { 
        if($(window).scrollTop() > 200) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });

    // add revews 
    if($('.block-comments').length) {
        setTimeout(function() {
            $('.block-comments').append('   <div class="container"> <h2 class="block-title block-title-black">REVIEWS</h2><div class="reviews"> <div class="review"> <div class="review-top"> <p class="review-name">TRACEY HOOK</p><div class="review-stars"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star star-empty"></span></div></div><p class="review-date">April 17, 2024 / USA</p><p class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. </p></div><div class="review"> <div class="review-top"> <p class="review-name">TRACEY HOOK</p><div class="review-stars"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star star-empty"></span></div></div><p class="review-date">April 17, 2024 / USA</p><p class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. </p></div><div class="review"> <div class="review-top"> <p class="review-name">TRACEY HOOK</p><div class="review-stars"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star star-empty"></span></div></div><p class="review-date">April 17, 2024 / USA</p><p class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. </p></div></div></div>')
        }, 500);
    }

    // make anchor scrolling #anchor
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 1000);
    });


    if($(window).width() < 992) {
        //show menu
        $('.menu-toggle').on('click', function() {
            $('.menu').toggleClass('active');
        });

        // close menu when link clicked
        $('.menu a').on('click', function() {
            $('.menu').removeClass('active');
        });
    }

});