function toggleFooterClass(){
    var topNavH = parseInt($('.js-top-nav').height());
    var mainH = parseInt($('.js-main').outerHeight());
    var windowH = parseInt($(window).height());
    var mainP = 50;
    var res = windowH - (topNavH+mainH + mainP);
    var footerHeight = $('.js-footer').outerHeight();
    if (res>0) {
        $('.js-footer').addClass('normal');
        $('.js-main').css('padding-bottom', footerHeight);
    } else {
        $('.js-footer').removeClass('normal');
        $('.js-main').removeAttr('style');   
    }
}

function setPlayerHeight(el){
    var currHeight =  el.parent('.iframe-wrap').data('height');
    var currWidth = $('.main .row').width();
    var res = parseInt((currWidth*currHeight)/650);
    el.attr('height',res);
}

$(document).ready( function() {

    $('.set-height').each( function(){
        setPlayerHeight($(this));
    });

    $('.js-faq dt').click(function(e){
        $(this).next('dd').slideToggle('slow');
    });

    $('.screenshot-links a').click(function(e){
        if ( $(window).width() < 768) {
            e.preventDefault();
        }
    });

    if ($('.screenshot').length>0 ){
        var link = $('a.back-btn').attr('href');
        $('html').click(function(e) {
            window.location.href = link;
        });

        $('.screenshot a').next('a').click(function(event){
          event.stopPropagation();
        });
    }
   
    $('.toggle-topbar a').click(function(e){
        e.preventDefault();
        $(this).parents('.top-bar').toggleClass('expanded');
    })

    toggleFooterClass();
})
 
$(window).resize(function() {
 
    toggleFooterClass();
    $('.set-height').each( function(){
        setPlayerHeight($(this));
    });
}); 
