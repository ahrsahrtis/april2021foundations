function simpleSlider(element = "#simple-slider", auto = false, pause){
    // get parent element
    var $this = $(element);

    // slides container
    var slidesCont = $this.children('.slides-container');

    //get all slides
    var slides = slidesCont.children('.slide');

    // get pager div
    var pager = $this.children('.pager');

    // get previous / next links
    var arrowsCont = $this.children('.arrows');
    var prevSlide = arrowsCont.children('.prev');
    var nextSlide = arrowsCont.children('.next');

    // total slides count
    var slidesCount = slides.length;

    //set currentslide to first child
    var currentSlide = slides.first();
    var currentSlideIndex = 1;

    var autoPlay = null;

    // hide all slides except first and add active class to first
    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');

    function fadeNext() {
        console.log("fadeNext function entering");
        currentSlide.removeClass('active').fadeOut(700);

        if (currentSlideIndex == slidesCount) {
            currentSlide = slides.first();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            currentSlideIndex = 1;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }

        pager.text(currentSlideIndex + ' / ' + slidesCount);
    }

    // function responsible for fading to previous slide
    function fadePrev() {
        currentSlide.removeClass('active').fadeOut(700);

        if (currentSlideIndex == 1) {
            currentSlide = slides.last();
            currentSlide.delay(500).addClass('active').fadeIn();
            currentSlideIndex = slidesCount;
        } else {
            currentSlideIndex--;
            currentSlide = currentSlide.prev();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }

        pager.text(currentSlideIndex + " / " + slidesCount);
    }

    //function that starts the autoplay and resets it in case user navigated away
    function AutoPlay() {
        clearInterval(autoPlay);

        if (auto == true) {
            autoPlay = setInterval(function() { fadeNext () }, pause);
        }
    }

        // Detect if user clicked on arrow for next slide and face next slide if it did
        $(nextSlide).click(function(e){
            console.log("entering nextSlide click function");
            e.preventDefault();
            fadeNext();
            AutoPlay();
        });

        // Detect if user clicked on arrow for previous slide...
        $(prevSlide).click(function(e) {
            e.preventDefault();
            fadePrev();
            AutoPlay();
        });

        // Start autoplay if auto is set to true
        AutoPlay();
    }




$(function() {
    simpleSlider('#slider', true, 8000);
});