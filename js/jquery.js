// scroll
$(document).ready(function(){

// hamburger menu

	$('.nav-icon1,.home,.about,.contact').click(function(){
		$(this).toggleClass('open');
		$('.nav-list').toggleClass('opacity-transition');
		$('.nav-bg').toggleClass('phase-in');
	});
});


// social media

	$('.fa-github').click(function(){
		$(this).addClass('bounce');
	})
	$('.fa-linkedin').click(function(){
		$(this).addClass('bounce');
	})
	$('.fa-twitch').click(function(){
		$(this).addClass('bounce');
	})
	$('.fa-envelope').click(function(){
		$(this).addClass('bounce');
	});


// sliders

$('.circle-1').click(function(){
  // slides
  $('.slide-1').addClass('slide-in-left');
  $('.slide-1').removeClass('slide-out-left');
  $('.slide-2').addClass('slide-out-left');
  $('.slide-3').addClass('slide-out-right');
  $('.slide-4').addClass('slide-out-right');
  // records
  $('.record-1').addClass('record-slide-in-left');
  $('.record-1').removeClass('record-slide-out-left');
  $('.record-2').addClass('record-slide-out-left');
  $('.record-3').addClass('record-slide-out-right');
  $('.record-4').addClass('record-slide-out-right');
  // album-info
  $('.album-info-1').addClass('open-album-info');
  $('.album-info-1').removeClass('close-album-info');
  $('.album-info-2').addClass('close-album-info');
  $('.album-info-3').addClass('close-album-info');
  $('.album-info-4').addClass('close-album-info');
});

$('.close-button-1').click(function(){
  $('.slide-1').addClass('slide-out-left');
  $('.record-1').addClass('record-slide-out-left');
  $('.album-info-1').addClass('close-album-info');
});

$('.circle-2').click(function(){
  // slides
  $('.slide-2').addClass('slide-in-left');
  $('.slide-2').removeClass('slide-out-left');
  $('.slide-1').addClass('slide-out-left');
  $('.slide-3').addClass('slide-out-right');
  $('.slide-4').addClass('slide-out-right');
  // records
  $('.record-2').addClass('record-slide-in-left');
  $('.record-2').removeClass('record-slide-out-left');
  $('.record-1').addClass('record-slide-out-left');
  $('.record-3').addClass('record-slide-out-right');
  $('.record-4').addClass('record-slide-out-right');
  // album info
  $('.album-info-2').addClass('open-album-info');
  $('.album-info-2').removeClass('close-album-info');
  $('.album-info-1').addClass('close-album-info');
  $('.album-info-3').addClass('close-album-info');
  $('.album-info-4').addClass('close-album-info');
});

$('.close-button-2').click(function(){
  $('.slide-2').addClass('slide-out-left');
  $('.record-2').addClass('record-slide-out-left');
  $('.album-info-2').addClass('close-album-info');
});

$('.circle-3').click(function(){
  // slides
  $('.slide-3').addClass('slide-in-right');
  $('.slide-3').removeClass('slide-out-right');
  $('.slide-1').addClass('slide-out-left');
  $('.slide-2').addClass('slide-out-left');
  $('.slide-4').addClass('slide-out-right');
  // records
  $('.record-3').addClass('record-slide-in-right');
  $('.record-3').removeClass('record-slide-out-right');
  $('.record-1').addClass('record-slide-out-left');
  $('.record-2').addClass('record-slide-out-left');
  $('.record-4').addClass('record-slide-out-right');
  // album info
  $('.album-info-3').addClass('open-album-info');
  $('.album-info-3').removeClass('close-album-info');
  $('.album-info-1').addClass('close-album-info');
  $('.album-info-2').addClass('close-album-info');
  $('.album-info-4').addClass('close-album-info');
});

$('.close-button-3').click(function(){
  $('.slide-3').addClass('slide-out-right');
  $('.record-3').addClass('record-slide-out-right');
  $('.album-info-4').addClass('close-album-info');
});

$('.circle-4').click(function(){
  // slides
  $('.slide-4').addClass('slide-in-right');
  $('.slide-4').removeClass('slide-out-right');
  $('.slide-1').addClass('slide-out-left');
  $('.slide-2').addClass('slide-out-left');
  $('.slide-3').addClass('slide-out-right');
  // records
  $('.record-4').addClass('record-slide-in-right');
  $('.record-4').removeClass('record-slide-out-right');
  $('.record-1').addClass('record-slide-out-left');
  $('.record-2').addClass('record-slide-out-left');
  $('.record-3').addClass('record-slide-out-right');
  // album info
  $('.album-info-4').addClass('open-album-info');
  $('.album-info-4').removeClass('close-album-info');
  $('.album-info-1').addClass('close-album-info');
  $('.album-info-2').addClass('close-album-info');
  $('.album-info-3').addClass('close-album-info');
});

$('.close-button-4').click(function(){
  $('.slide-4').addClass('slide-out-right');
  $('.record-4').addClass('record-slide-out-right');
  $('.album-info-4').addClass('close-album-info');
});

// image rotation cicles

$(document).ready(function($){
    var classIndex = 0, images = ['me-buffalo', 'me-desk', 'me-friends'];
    $(".circle-1").addClass(images[classIndex]);
    setInterval(function () {
        $(".circle-1")
            .removeClass(images[classIndex])
            .addClass(images[classIndex = (classIndex + 1) % images.length]);
    }, 6000);
});

$(document).ready(function($){
    var classIndex = 0, images = ['me-sister', 'me-diamond', 'chvrchs'];
    $(".circle-2").addClass(images[classIndex]);
    setInterval(function () {
        $(".circle-2")
            .removeClass(images[classIndex])
            .addClass(images[classIndex = (classIndex + 1) % images.length]);
    }, 6250);
});

$(document).ready(function($){
    var classIndex = 0, images = ['firestone', 'me-headset', 'coachella'];
    $(".circle-3").addClass(images[classIndex]);
    setInterval(function () {
        $(".circle-3")
            .removeClass(images[classIndex])
            .addClass(images[classIndex = (classIndex + 1) % images.length]);
    }, 6500);
});

$(document).ready(function($){
    var classIndex = 0, images = ['bobs-burgers', 'me-dad', 'me-beta'];
    $(".circle-4").addClass(images[classIndex]);
    setInterval(function () {
        $(".circle-4")
            .removeClass(images[classIndex])
            .addClass(images[classIndex = (classIndex + 1) % images.length]);
    }, 6750);
});

// height adjust
