/* JS for modal */
$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

    $('a[data-modal-id]').click(function(e) {
		e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#'+modalBox).fadeIn($(this).data());
	});

    $(".js-modal-close, .modal-overlay").click(function() {
        $(".modal-box, .modal-overlay").fadeOut(800, function() {
            $(".modal-overlay").remove();
        });

    });

    $(window).resize(function() {
        $(".modal-box").css({
            top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
            left: ($(window).width() - $(".modal-box").outerWidth()) / 2
        });
    });
    $(window).resize();
});

/* JS for modal close with ESC (ASCII) */
$(document).keyup(function(e) { 
    if (e.keyCode == 27) { 
        $(".modal-box, .modal-overlay").fadeOut(800, function() {
            $(".modal-overlay").remove();
        });
    } 
});

/* Js for effect parallax */
$(function(){
    $('.parallax').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed'));
        var bgpos = '100% '+ yPos + 'px';
        $obj.css('background-position', bgpos );
        });
    });
});

/* smooth scrolling */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});

/* Function para esconder/mostrar menu */
function slidetoggle() {
    var slider = document.getElementById("nav-slide");
    slider.style.height = window.innerHeight - 60 + "px";

    if(slider.style.left == "0px") {
        slider.style.left = "-400px";
    } else {
    slider.style.left = "0px";
    }
}
