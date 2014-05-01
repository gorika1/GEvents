function changePos() 
{
    fatherX = $('.search-form-content').width();
    fatherY = $('.search-form-content').height();
    childX = $('#search-form').width();
    childY = $('#search-form').height();
    $('#search-form').css( { 
        'left': fatherX / 2 - childX / 2, 
        'display' : 'block' 
    });
}

function showAllEvents()
{
    $('.all-events-content').animate({
        left: "+=0",
        height: "toggle"
    }, 500, function() {
            $('.all-events-content').toggleClass( 'block' );
            $( '.arrow' ).toggleClass('fa-chevron-up');
            $( '.arrow' ).toggleClass('fa-chevron-down');
      
      });

    if(! $('.all-events-content').hasClass('block') )
    {
        changePosSearch();
        $('.all-events .search .form-control').focus();
    }
    else
    {
        $('#search-form .form-control').focus();
    }
}

$(document).on( 'ready', function(){

    changePos();
    $('#search-form .form-control').focus();

    $('.brand').on( 'click' , showAllEvents );
    
});

(function () {
    width = $(window).width();
    height = $(window).height();
    setInterval( function () {
        if ( $(window).width() !== width || $(window).height() !== height ) {
            width = $(window).width();
            height = $(window).height();
            changePos();
        }
    }, 50);
}());