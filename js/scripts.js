$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.page-navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.page-nav').addClass('affix');
    } else {
        $('.page-nav').removeClass('affix');
    }
});

/* 

$(".main-button").hover(
    function(){
        $(".line-left").addClass('triangle-line-left');
        $(".line").removeClass("line-left")
    }, 
        function(){
            $(".line-left").removeClass('triangle-line-left');
            $(".line").addClass("line-left")
        }
);
 */


