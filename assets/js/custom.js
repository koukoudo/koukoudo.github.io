(function($) {

    $(document).ready(function() {
        $('#btn-send-message').on('click', function (event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            $('#contact_number').val(Math.random() * 100000 | 0);
            // these IDs from the previous steps
            emailjs.sendForm('service_9624evn', 'template_3im2op7', '#contact-form')
                .then(function() {
                    $('#btn-send-message').val('Sent!');
                    $('#user_name').val('');
                    $('#user_email').val('');
                    $('#message').val('');
                });
        });
    });

    function isElementInViewport(elem) {

        // Get the scroll position of the page.
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round( elem.offset().top );
        var elemBottom = elemTop + elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    $(window).scroll(function() {

        var elem;
        
        $('.section-header').each(function() {
            elem = $(this);

            if (isElementInViewport(elem)) {
                if (elem.hasClass('start')) return;

                elem.addClass('start');
            }
        });

        elem = $('#about-name');

        if (isElementInViewport(elem)) {
            if (elem.hasClass('start')) return;

            elem.addClass('start');

            var typed = new Typed('#about-name', {
                strings: ['Hello.. ^500 my name is Nikolaos.'],
                typeSpeed: 15,
                startDelay: 1500,
                loop: false,
                showCursor: false
            });

            var typed = new Typed('#about-text', {
                strings: ['I am a fullstack software developer with a variety of personal and commercial projects under my belt, the most recent of which being a 25000-user music distribution application owned by Horus Music, written in PHP with the Symfony framework.',
                            'During my 10 years of programming, I have learned to work with a diverse array of technologies across the backend, frontend and database layers, including JavaScript, PHP, Java, Python, MySQL, HTML and CSS, among others.',
                            'With a degree in Computer Science and Economics, I have a unique ability to analyze complex business problems and translate them into user-friendly technical solutions.',
                            'In addition, my experience in IT customer support and technical leadership roles have taught me to collaborate effectively with a variety of stakeholders and develop with the end-user in mind, to ensure a final product of high quality.',
                            'I especially enjoy creative problem-solving, team work and chocolate at bedtime.',
                            'Thank you for listening to my shpiel.'],
                typeSpeed: 15,
                backSpeed: 1,
                startDelay: 3500,
                loop: false,
                showCursor: false
            });
        }

    });

})(jQuery);