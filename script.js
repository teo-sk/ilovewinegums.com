var one = false;
var two = false;
var three = false;
var four = false;
var five = false;
var six = false;
function EvalSound(audio1) {
  var thissound=document.getElementById(audio1);	
	thissound.play();
}

function whining(audio2) {
  var sound=document.getElementById(audio2);
	sound.play();
}

function whining(audio3) {
  var sound=document.getElementById(audio3);
	sound.play();
}

function whining(audio4) {
  var sound=document.getElementById(audio4);
	sound.play();
}

function whining(audio5) {
  var sound=document.getElementById(audio5);
	sound.play();
	sound.currentTime=0;
}

function whining(audio6) {
  var sound=document.getElementById(audio6);
	sound.play();
	sound.currentTime=0;
}

$(document).ready(function() {
	$('.winegum').hover(function() {
		$(this).addClass('active');
	});
	var windowWidth = $(document).width();
	var winegumWidth = windowWidth / 6;
	var winegumPlaygroundWidth = (windowWidth - winegumWidth);
	var windowHeight = $(document).height();
	var winegumHeight = windowHeight / 6;
	var winegumPlaygroundHeight = (windowHeight - winegumHeight);
});