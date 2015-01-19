$(document).ready(function(){
	playgame();
})

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolMusic = false;
function playCoolMusic () {
	coolMusic = !coolMusic;
	if (coolMusic) {
		$('#cool-Music')[0].volume = 0.5;
		$('#cool-Music')[0].load();
		$('#cool-Music')[0].play(); 
	}
}

function playgame() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().finish()
			.animate(
				{'left': '1200px'},
				500,
				function(){
					$(this).stop();
					$(this).hide();
					$(this).css('left', '552px')
				})
	}).mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.hadouken').hide();

	});

	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			playCoolMusic ();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('#cool-Music')[0].pause();
			$('#cool-Music')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
	});
}