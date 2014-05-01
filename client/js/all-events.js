function changePosSearch() 
{
    fatherX = $('.all-events .search').width();
    childX = $('.all-events .search .form-control').width();
    $('.all-events .search .form-control').css( { 
        'left': fatherX / 2 - childX / 2,
    });
}

$(document).on( 'ready', function(){

    changePosSearch();
    
});

(function () {
    var width = $(window).width();
    setInterval( function () {
        if ( $(window).width() !== width ) {
            width = $(window).width();
            changePosSearch();
        }
    }, 100);
}());