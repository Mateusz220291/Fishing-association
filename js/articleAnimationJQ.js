$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();


    const $art2 = $('.art2')
    const $art3 = $('.art3')
    const $art4 = $('.art4')
    const $art5 = $('.art5')


    const art2FromTop = $art2.offset().top;
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;
    const art5FromTop = $art5.offset().top;


    const art2Height = $art2.height();
    const art3Height = $art3.height();
    const art4Height = $art4.height();
    const art5Height = $art5.height();


    if (scrollValue > art2FromTop + art2Height / 2 - windowHeight) {
        $art2.addClass('active')
    }
    if (scrollValue > art3FromTop + art3Height / 2 - windowHeight) {
        $art3.addClass('active')
    }
    if (scrollValue > art4FromTop + art4Height / 2 - windowHeight) {
        $art4.addClass('active')
    }
    if (scrollValue > art5FromTop + art5Height / 2 - windowHeight) {
        $art5.addClass('active')
    }
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }

})