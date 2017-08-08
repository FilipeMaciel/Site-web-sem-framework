
/****** Animação no Scroll ******/
// Debounce do Lodash
debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function () {
var $targetLeft = $('.anime-left'),
    $targetRight = $('.anime-right'),
    animationClass = 'anime-reset',
    $targetPai = $('.anime-div-pai'),
    offset = $(window).height() * 3/4;

function animeScroll() {
    var documentTop = $(document).scrollTop();

    $targetPai.each(function () {

        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset){
            $(this).find('.anime-left').addClass(animationClass);
            $(this).find('.anime-right').addClass(animationClass);
        }else{
            /*$(this).find('.anime-left').removeClass(animationClass);
            $(this).find('.anime-right').removeClass(animationClass);*/
        }
    });
}

animeScroll();

$(document).scroll(debounce(function () {
    animeScroll();
},35));
})();