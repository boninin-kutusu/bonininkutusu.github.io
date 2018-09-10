var $window = $(window)
const endScroll=200
var logo
var centerOffsetLogo
var mostleft
var initialHeight
var initialBottomMargin

var resetPositions = function(){
    mostleft = $(".header-bar").offset().left
    centerLogoLeft = window.innerWidth / 2 - logo.width()/2

    let navbar = $("#navigation-bar")
    navbar.offset({left:$(".header-bar").width()/2 + mostleft - navbar.width() / 2})

    
    var scrollTop = $window.scrollTop();
    scroll= Math.max(endScroll - scrollTop, 0)/endScroll
    logo.offset({left: (centerLogoLeft-mostleft) * scroll + mostleft })
    logo.width(initialHeight * (1 - (1 - scroll) * 0.6))
}
$window.ready(function(){
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