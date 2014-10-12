function parallax() {
    $('#mainheader').css('background-position', 'center bottom ' + ( - scrollPos / 5) + 'px');
    $('#title').css('opacity', '1' - (scrollPos / 300))
}
function animations() {
    windowHeight = $(window).height();
    delay = 400;
    aboutPos = $('#info').offset().top - windowHeight + delay;
    skillsPos = $('#skills').offset().top - windowHeight + delay;
    if (scrollPos > aboutPos) {
        $('#circle-minimal').addClass('popup-minimal');
        $('#circle-individual').addClass('popup-individual');
        $('#circle-responsive').addClass('popup-responsive')
    }
    if (scrollPos > skillsPos) {
        $('.progress-text').addClass('progress-text-animate');
        $('.progress-html').addClass('progress-html-animate');
        $('.progress-css').addClass('progress-css-animate');
        $('.progress-responsive').addClass('progress-responsive-animate');
        $('.progress-jquery').addClass('progress-jquery-animate');
        $('.progress-wordpress').addClass('progress-wordpress-animate');
        $('.progress-php').addClass('progress-php-animate')
    }
}
$(document).ready(function() {
    $(window).load(function() {
        $('#loading').fadeOut(800);
        setTimeout(function() {
            $('.btn-more').addClass('show')
        }, 900)
    });
    $(window).scroll(function() {
        scrollPos = $(this).scrollTop();
        parallax()
    });
    $('#menu').click(function() {
        setTimeout(function() {
            $('nav').toggleClass('show')
        }, 100);
        return false
    });
    $('.menu-close').click(function() {
        setTimeout(function() {
            $('nav').toggleClass('show')
        }, 100);
        return false
    });
    $('.footerimg').click(function() {
        $(this).addClass('go')
    });
    svgeezy.init(false, 'png')
});
