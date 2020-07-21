$(document).ready(function (){
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }
    banner.padre.children('.slide').first().css({
        'left': 0
    })

    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        })
        console.log(alto);

    }
    altoBanner();

    $(window).resize(function(){
        altoBanner();
    });
        
});


