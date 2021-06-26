$( document ).ready(function() {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('#schedule').click(function() {
        $('#sched').toggle("slide");
      });

    $('#contact').click(function() {
        $('#conta').toggle("slide");
      });

    $('#close').click(function() {
        $('.container').slideToggle("slide");
    });
});