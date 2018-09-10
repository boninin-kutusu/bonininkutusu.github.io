var $window = $(window)
const endScroll=200
var logo
var offset
var mostleft
var initialHeight
var initialBottomMargin

$window.ready(function(){
    logo = $("#logo")
    offset = logo.offset()
    initialHeight = logo.width()
    let mrg = logo.css('margin-bottom')
    initialBottomMargin = mrg.substring(0,mrg.indexOf('px'))
    mostleft = $(".header-bar").offset().left

    let navbar = $("#navigation-bar")
    navbar.offset({left:$(".header-bar").width()/2 + mostleft - navbar.width() / 2})
    console.log(navbar.width())
    console.log(window.innerWidth)
})

$window.scroll(function() {
    var scrollTop = $window.scrollTop();
    scroll= Math.max(endScroll - scrollTop, 0)/endScroll
    logo.offset({left: (offset.left-mostleft) * scroll + mostleft })
    logo.width(initialHeight * (1 - (1 - scroll) * 0.6))
    logo.css('margin-bottom',Math.max(initialBottomMargin * (1 - (1 - scroll)), 10) + 'px')
});  