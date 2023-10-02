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
                strings: ['Hello world!'],
                typeSpeed: 15,
                startDelay: 1500,
                loop: false,
                showCursor: false
            });

            var typed = new Typed('#about-text', {
                strings: ["My name is Nikolaos and I am a web developer based in Johannesburg, South Africa. &#127487;&#127462;",
                            "With around 10 years of programming experience, I specialize in developing and maintaining custom web sites and web applications.",
                            "The biggest merketplace today is virtual, with over 2 billion people visiting the web each day, meaning an online presence is more necessary than ever before.",
                            "Plus, technology can make business a whole lot easier - think automating workflows, tracking expenses, managing customers, all at the touch of a button.",
                            "These are just some of the great ways the web can help optimize, improve and simplify your business, and your life! .",
                            "I am passionate about creating quality digital solutions that can handle the heavy lifting of administrative tasks and broadcast your brand's unique mission to the world.",
                            "If you have an idea in mind for a site or an app, feel free to get in touch with me using the information below - it would be my honour to help you bring it to fruition."],
                typeSpeed: 15,
                backSpeed: 1,
                startDelay: 3500,
                loop: false,
                showCursor: false
            });
        }

    });

})(jQuery);