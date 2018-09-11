var $window = $(window)
const endScroll=200
var logo
var centerOffsetLogo
var mostleft
var initialHeight
var initialBottomMargin
var minimizedHeaderHeight

var resetPositions = function(){
    centerLogoLeft = window.innerWidth / 2 - logo.width()/2

    let navbar = $("#navigation-bar")
    navbar.offset({left:$(".header-bar").width()/2 + $(".header-bar").offset().left - navbar.width() / 2})

    mostleft =  navbar.offset().left - 60
    
    var scrollTop = $window.scrollTop();
    scroll= Math.max(endScroll - scrollTop, 0)/endScroll
    logo.offset({left: (centerLogoLeft-mostleft) * scroll + mostleft })
    logo.width(initialHeight * (1 - (1 - scroll) * 0.6))
}
$window.ready(function(){
    minimizedHeaderHeight = $('.top-bar').height() - $('#navigation-bar').height() + 50
    logo = $("#logo")
    initialHeight = logo.width()
    
    let mrg = logo.css('margin-bottom')
    initialBottomMargin = mrg.substring(0,mrg.indexOf('px'))
    resetPositions()
})

$( window ).resize(function() {
    resetPositions()
});

$window.scroll(function() {
    var scrollTop = $window.scrollTop();
    scroll= Math.max(endScroll - scrollTop, 0)/endScroll
    logo.offset({left: (centerLogoLeft-mostleft) * scroll + mostleft })
    logo.width(initialHeight * (1 - (1 - scroll) * 0.6))
    logo.css('margin-bottom',Math.max(initialBottomMargin * (1 - (1 - scroll)), 10) + 'px')
});  


function howWorks(){
    $("html, body").animate({ scrollTop: $('.How-It-Works').offset().top - minimizedHeaderHeight}, 600);
}
function whatsIn(){
    $("html, body").animate({ scrollTop: $('.What-Is-In').offset().top - minimizedHeaderHeight}, 600);
}
function whyUs(){
    $("html, body").animate({ scrollTop: $('.Why-Us').offset().top - minimizedHeaderHeight}, 600);
}
function prices(){
    $("html, body").animate({ scrollTop: $('.Prices').offset().top - minimizedHeaderHeight}, 600);
}