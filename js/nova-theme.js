var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(this).scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

// ON SCROLL EVENTS
if (!isTouch){
    jQuery(document).scroll(function() {
        scrollHeader();
    });
};

// TOUCH SCROLL
jQuery(document).on({
    'touchmove': function(e) {
        scrollHeader(); // Replace this with your code.
    }
});


jQuery(document).ready(function($){

	//Smooth scroll to top
	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
	// Responsive Menu

});


