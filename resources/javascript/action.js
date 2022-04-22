(function($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function() {
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            // Scroll down
            navbar.fadeIn();
            navbar.removeClass('bg-transparent').addClass('navbar-light bg-light');
        } else if (st < lastScrollTop && st > 200) {
            // Scroll up but still lower than 200 (change that to whatever suits your need)
            navbar.addClass('navbar-light bg-light');
        } else {
            // Reached top
            navbar.addClass('navbar-light bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);