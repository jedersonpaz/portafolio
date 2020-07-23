$(document).ready(function (){
    
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }
    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion: 1
    }

    banner.padre.children('.slide').first().css({
        'left': 0
    });

    info.padre.children('.slide').first().css({
        'left': 0
    });

    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        })
        console.log(alto);

    }
    var altoInfo = function(){
        var alto = info.padre.children('.active').outerHeight();

        info.padre.animate({
            'height': alto + 'px'
        })
        console.log(alto);

    }
    altoBanner();
    altoInfo();

    $(window).resize(function(){
        altoBanner();
        altoInfo();

    });
//-----------------
// ----- banner
// ----------------   
    // ---- boton siguiente
    $('#banner-next').on('click', function(e){
        e.preventDefault();

        if(banner.posicion < banner.numeroSlides){

            banner.padre.children().not('.active').css({
                'left' : '100%'
            });

            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#banner .active').prev().animate({
                'left' : '-100%'
            });

            banner.posicion = banner.posicion + 1;

        } else {

            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.padre.children().not('.active').css({
                'left' : '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            banner.posicion = 1;
        }

    });

    // boton banner anterior

    $('#banner-prev').on('click',function(e){
        e.preventDefault();

        if(banner.posicion > 1){

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            banner.posicion = banner.posicion - 1;
            
        } else {
            banner.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%' 
            })
            $('#banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
                'left': 0
            });

            banner.posicion = banner.numeroSlides;

        }
       

    });

//-----------------
// ----- Info
// ----------------   
    // ---- boton siguiente
    $('#info-next').on('click', function(e){
        e.preventDefault();

        if(info.posicion < info.numeroSlides){

            info.padre.children().not('.active').css({
                'left' : '100%'
            });

            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#info .active').prev().animate({
                'left' : '-100%'
            });

            info.posicion = info.posicion + 1;

        } else {

            $('#info .active').animate({
                'left': '-100%'
            });

            info.padre.children().not('.active').css({
                'left' : '100%'
            });

            $('#info .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            info.posicion = 1;
        }

        altoInfo();

    });

    // boton info anterior

    $('#info-prev').on('click',function(e){
        e.preventDefault();

        if(info.posicion > 1){

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            info.posicion = info.posicion - 1;
            
        } else {
            info.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%' 
            })
            $('#info .active').removeClass('active');
            info.padre.children().last().addClass('active').animate({
                'left': 0
            });

            info.posicion = info.numeroSlides;

        }
        
        altoInfo();
       

    });

});


