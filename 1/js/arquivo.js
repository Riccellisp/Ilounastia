/* JQUERY */

$(function(e){
    
    $('nav li:first-child').click(function(e){
        $('html, body, main').animate({scrollTop:$('#inicio').offset().top}, 1000);
    });
    
    $('nav li:nth-child(2)').click(function(e){
        $('html, body, main').animate({scrollTop:$('#sinopse').offset().top}, 1000);
    });
    
    $('nav li:nth-child(3)').click(function(e){
        $('html, body, main').animate({scrollTop:$('#sobre_obra').offset().top}, 1000);
    });
    
    $('nav li:nth-child(4)').click(function(e){
        $('html, body, main').animate({scrollTop:$('#sobre_autor').offset().top}, 1000);
    });
});

/* JAVASCRIPT */

