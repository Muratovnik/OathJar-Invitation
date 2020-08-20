$(document).ready(function(){


    $('.about-toggle').click(function(event){
        event.preventDefault();
        console.log('click!');

        $('.about-content__box').hide();

        var href = $(this).attr('href');

        console.log(this);

        $(href).fadeIn();

    });



    var windowhight = $(window).height();


    $(window).scroll(function(){

        if ($(this).scrollTop() > windowhight) {
            $('#scrolltotop').fadeIn();
        } else {
            $('#scrolltotop').fadeOut();
        }

    });

    $('#scrolltotop').click(function(event){
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800)
    });


});